const { expect } = require('chai');
const sinon = require('sinon');
const { validator } = require('../../../src/middlewares');
const { consumptionClass, props, docNumber, connectionType } = require('../../../src/schemas');
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
    it('chama next sem parâmetros', () => {
      request.body = requiredProps;
      validator(props)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando são passadas propriedades não esperadas', () => {
    it('chama next com Erro e mensagem: "propriedadeExtra" is not allowed', () => {
      request.body = extraProps;
      validator(props)(request, response, next)
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"propriedadeExtra" is not allowed');
    })
  });

  describe('quando faltam propriedades necessárias', () => {
    it('chama next com Erro e mensagem do tipo: "historicoDeConsumo" is required', () => {
      request.body = missingRequiredProps;
      validator(props)(request, response, next)
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
    it('chama next sem parâmetros', () => {
      request.body = validCpf;
      validator(docNumber)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o número de documento é um cnpj com pattern valido', () => {
    it('chama next sem parâmetros', () => {
      request.body = validCnpj;
      validator(docNumber)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o número de documento não satisfaz nenhuma das patterns', () => {
    it('chama next com Erro e mensagem: "numeroDoDocumento" is invalid', () => {
      request.body = invalidDocNumber;
      validator(docNumber)(request, response, next)
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
    it('chama next sem parâmetros', () => {
      request.body = validConnectionType;
      validator(connectionType)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando o tipo de conexão é invalido', () => {
    it('chama next com Erro e mensagem: "tipoDeConexao" must be one of ["monofasico", "bifasico", "trifasico"]', () => {
      request.body = invalidConnectionType;
      validator(connectionType)(request, response, next)
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"tipoDeConexao" must be one of ["monofasico", "bifasico", "trifasico"]');
    })
  });

});

describe('validação da classe de consumo', () => {
  const { validConsumptionClass, invalidConsumptionClass } = mocks
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

  describe('quando a classe de consumo é valida', () => {
    it('chama next sem parâmetros', () => {
      request.body = validConsumptionClass;
      validator(consumptionClass)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando a classe de consumo é invalida', () => {
    it('chama next com Erro e mensagem: "classeDeConsumo" must be one of' +
     '["residencial","industrial","comercial","rural","poderPublico" ]', () => {
      request.body = invalidConsumptionClass;
      validator(consumptionClass)(request, response, next)
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"classeDeConsumo" must be one of' +
      '["residencial","industrial","comercial","rural","poderPublico" ]');
    })
  });
});

describe('validação da modalidade tarifária', () => {
  const { validTariffModality, invalidTariffModality } = mocks
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

  describe('quando a modalidade tarifária é valida', () => {
    it('chama next sem parâmetros', () => {
      request.body = validTariffModality;
      validator(tariffModality)(request, response, next)
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando a classe de consumo é invalida', () => {
    it('chama next com Erro e mensagem: "modalidadeTarifaria" must be one of' +
    '["azul", "branca", "verde", "convencional"]', () => {
      request.body = invalidTariffModality;
      validator(tariffModality)(request, response, next)
      expect(next.called).to.be.true;
      const errArg = next.lastCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal('"modalidadeTarifaria" must be one of' +
      '["azul", "branca", "verde", "convencional"]');
    })
  });
});