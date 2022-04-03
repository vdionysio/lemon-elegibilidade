const { tiposDeConexao, classesDeConsumo, modalidadesTarifarias } = require("../../../src/utils/types");

const requiredProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
  historicoDeConsumo: 0,
};

const missingRequiredProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
}

const extraProps = {
  numeroDoDocumento: 0,
  tipoDeConexao: 0,
  classeDeConsumo: 0,
  modalidadeTarifaria: 0,
  historicoDeConsumo: 0,
  propriedadeExtra: 0,
};

const validCnpj = {
  numeroDoDocumento: '87945143000154',
};

const validCpf = {
  numeroDoDocumento: '21554495008',
};

const invalidDocNumber = {
  numeroDoDocumento: '428776053',
};

const validConnectionType = {
  tipoDeConexao: tiposDeConexao[0],
};

const invalidConnectionType = {
  tipoDeConexao: 'invalid'
};

const validConsumptionClass = {
  classeDeConsumo: classesDeConsumo[0],
};

const invalidConsumptionClass = {
  classeDeConsumo: 'invalid',
};

const validTariffModality = {
  modalidadeTarifaria: modalidadesTarifarias[0],
};

const invalidTariffModality = {
  modalidadeTarifaria: 'invalid',
};

const validConsumptionHistory = {
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597
  ],
};

const twoMonthsConsumptionHistory = {
  historicoDeConsumo: [
    3878,
    9760,
  ],
};

const fourteenMonthsConsumptionHistory = {
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597,
    5599,
    4027,
  ],
};

const consumptionHistoryWithString = {
  historicoDeConsumo: [
    '3878',
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    4597
  ],
};

const invalidTypeConsumptionHistory = {
  historicoDeConsumo: 'not an array',
};

const outlierConsumptionHistory = {
  historicoDeConsumo: [
    3878,
    9760,
    5976,
    2797,
    2481,
    5731,
    7538,
    4392,
    7859,
    4160,
    6941,
    10000,
  ],
};

module.exports = {
  extraProps,
  requiredProps,
  missingRequiredProps,
  validCnpj,
  validCpf,
  invalidDocNumber,
  validConnectionType,
  invalidConnectionType,
  validConsumptionClass,
  invalidConsumptionClass,
  validTariffModality,
  invalidTariffModality,
  validConsumptionHistory,
  twoMonthsConsumptionHistory,
  fourteenMonthsConsumptionHistory,
  consumptionHistoryWithString,
  invalidTypeConsumptionHistory,
  outlierConsumptionHistory,
};
