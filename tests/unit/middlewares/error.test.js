const { expect } = require('chai');
const sinon = require('sinon');
const { error } = require('../../../src/middlewares');
const { generateSchemaError } = require('../../../src/utils');

describe('validação da presença/ausência das propriedades', () => {
  let response = {};
  let request = {};
  let err;

  before(() => {
    response.status = sinon.stub()
      .returns(response);
    response.json = sinon.stub()
      .returns();
  });

  describe('quando um erro coberto pelos schemas é passada como parâmetro', () => {
    it('chama res.status com o code 400 e res.json com a mensagem do erro', () => {
      err = generateSchemaError('error message');
      error(err, request, response);
      expect(response.status.calledWithExactly(400)).to.be.true;
      expect(response.json.calledWith({ message: 'error message' })).to.be.true;
    })
  });

  describe('quando um erro não coberto pelo código é passado como parâmetro', () => {
    it('chama res.status com o code 500 e res.json com mensagem "Internal server error"', () => {
      err = new Error("General errors");
      error(err, request, response);
      expect(response.status.calledWithExactly(500)).to.be.true;
      expect(response.json.calledWith({ message: 'Internal server error' })).to.be.true;
    })
  });
});