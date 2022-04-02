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
  propriedadeExtra: 0
};

const validCnpj = {
  numeroDoDocumento: 87945143000154
};

const validCpf = {
  numeroDoDocumento: 14041737706
};

module.exports = {
  extraProps,
  requiredProps,
  missingRequiredProps,
  validCnpj,
  validCpf,
};
