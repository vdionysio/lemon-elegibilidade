const { expect } = require('chai');
const sinon = require('sinon');
const { validations } = require('../../../src/middlewares');

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

describe('validação da presença/ausência das propriedades', () => {
  let response = {};
  let request = {};
  let next = {};

  before(() => {
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
    next = sinon.spy();
  });

  describe('quando as propriedades passadas são apenas as esperadas', () => {
    it('executa next sem parâmetros', () => {
      request.body = requiredProps;
      validations.validatesPropsIntegrity(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando são passadas propriedades não esperadas', () => {
    it('executa next com Erro e mensagem "your request has extra properties"', () => {
      request.body = extraProps;

      validations.validatesPropsIntegrity(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"propriedadeExtra" is not allowed');
    })
  });
});
