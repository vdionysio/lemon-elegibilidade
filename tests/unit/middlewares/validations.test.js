const { expect } = require('chai');
const sinon = require('sinon');
const { validations } = require('../../../src/middlewares');
const mocks = require('../mocks/validationMocks');

describe('validação da presença/ausência das propriedades', () => {
  const { requiredProps, missingRequiredProps, extraProps } = mocks
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
      validations.validatePropsIntegrity(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando são passadas propriedades não esperadas', () => {
    it('executa next com Erro e mensagem: "propriedadeExtra" is not allowed', () => {
      request.body = extraProps;

      validations.validatePropsIntegrity(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"propriedadeExtra" is not allowed');
    })
  });

  describe('quando faltam propriedades necessárias', () => {
    it('executa next com Erro e mensagem do tipo: "historicoDeConsumo" is required', () => {
      request.body = missingRequiredProps;

      validations.validatePropsIntegrity(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"historicoDeConsumo" is required');
    })
  });
});

describe('validação do número do documento', () => {
  const { validCnpj, validCpf, invalidDocNumber } = mocks
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

  describe('quando o número de documento é um cpf com pattern valido', () => {
    it('executa next sem parâmetros', () => {
      request.body = validCpf;
      validations.validateDocNumber(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o número de documento é um cnpj com pattern valido', () => {
    it('executa next sem parâmetros', () => {
      request.body = validCnpj;
      validations.validateDocNumber(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o número de documento não satisfaz nenhuma das patterns', () => {
    it('executa next com Erro e mensagem: "numeroDoDocumento" is invalid', () => {
      request.body = invalidDocNumber;

      validations.validateDocNumber(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"numeroDoDocumento" is invalid');
    })
  });

});

describe('validação do tipo de conexão', () => {
  const { validConnectionType, invalidConnectionType } = mocks
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

  describe('quando o tipo de conexão é valido', () => {
    it('executa next sem parâmetros', () => {
      request.body = validConnectionType;
      validations.validateConnectionType(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o tipo de conexão é invalido', () => {
    it('executa next com Erro e mensagem: "tipoDeConexao" is invalid', () => {
      request.body = invalidConnectionType;

      validations.validateConnectionType(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"tipoDeConexao" is invalid');
    })
  });

});
