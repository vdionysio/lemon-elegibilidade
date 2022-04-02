const { expect } = require('chai');
const sinon = require('sinon');

const validations = {
  validatesPropertiesIntegrity: (req, res, next) => {
    next(Error('your request has extra properties'))
  },
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
      validations.validatesPropertiesIntegrity(request, response, next);
      expect(next.calledWithExactly()).to.be.true
    })
  });

  describe('quando são passadas propriedades não esperadas', () => {
    it('executa next com Erro e mensagem "your request has extra properties"', () => {
      request.body = {
        teste: 'teste'
      };

      validations.validatesPropertiesIntegrity(request, response, next);
      expect(next.called).to.be.true;
      const errArg = next.firstCall.args[0];
      expect(errArg).to.be.instanceof(Error);
      expect(errArg.message).to.equal("your request has extra properties");
    })
  });
});
