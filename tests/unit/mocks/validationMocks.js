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

module.exports = {
  extraProps,
  requiredProps,
  missingRequiredProps,
  validCnpj,
  validCpf,
  invalidDocNumber,
};
