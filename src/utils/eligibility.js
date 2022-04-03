const eligibleComsumptionClasses = ['comercial', 'residencial', 'industrial'];
const eligibleTariffModality = ['convencional', 'branca'];
// emissão de CO2 para gerar 1000kWh de energia
const co2EmissionRate = 84 / 1000;
const reasonsStrings = {
  class: 'Classe de consumo não aceita',
  tariff: 'Modalidade tarifária não aceita',
  consumption: 'Consumo muito baixo para tipo de conexão',
};

const round = (value) => Math.round((value + Number.EPSILON) * 100) / 100;

const average = (items) => items.reduce((a, b) => (a + b)) / items.length;

const isConsumptionEligible = (consumptionAverage) => ({
  monofasico: consumptionAverage > 400,
  bifasico: consumptionAverage > 500,
  trifasico: consumptionAverage > 750,
});

const checkConsumptionEligibility = ({ tipoDeConexao, historicoDeConsumo }) => {
  const consumptionAverage = average(historicoDeConsumo);

  if (!isConsumptionEligible(consumptionAverage)[tipoDeConexao]) return false;
  return true;
};

const annualEconomyCalculator = ({ historicoDeConsumo }) => {
  const consumptionAverage = average(historicoDeConsumo);
  const annualConsumption = consumptionAverage * 12;

  return round(annualConsumption * co2EmissionRate);
};

const generateReport = (data) => {
  const { classeDeConsumo, modalidadeTarifaria } = data;
  const reasons = [];

  if (!eligibleComsumptionClasses.includes(classeDeConsumo)) {
    reasons.push(reasonsStrings.class);
  }

  if (!eligibleTariffModality.includes(modalidadeTarifaria)) {
    reasons.push(reasonsStrings.tariff);
  }

  if (!checkConsumptionEligibility(data)) {
    reasons.push(reasonsStrings.consumption);
  }

  if (reasons.length > 0) {
    return { elegivel: false, razoesInelegibilidade: reasons };
  }

  return {
    elegivel: true,
    economiaAnualDeCO2: annualEconomyCalculator(data),
  };
};

module.exports = {
  generateReport,
};
