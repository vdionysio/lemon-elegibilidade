const chai = require('chai');
const chaiHttp = require('chai-http');
const mocks = require('../mocks/eligibilityMocks')

const app = require('../../src/index');

chai.use(chaiHttp);

const { expect } = chai;

describe('POST /eligibility', () => {
  describe('Quando o input é válido e elegível', () => {
    let response = {};

    before(async () => {
      response = await chai.request(app)
        .post('/eligibility')
        .send(mocks.eligible);
    });

    it('responde com status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto com as chaves elegivel igual a true e economiaAnualDeCO2 com o resultado esperado', () => {
      expect(response.body).to.be.an('object');
      expect(response.body.elegivel).to.be.true;
      expect(response.body).to.has.property('economiaAnualDeCO2');
      expect(response.body.economiaAnualDeCO2).to.be.equal(5553.24);
    });
  });

  describe('Quando o input é válido e não elegível', () => {
    let response = {};

    before(async () => {
      response = await chai.request(app)
        .post('/eligibility')
        .send(mocks.notEligible);
    });

    it('responde com status 200', () => {
      expect(response).to.have.status(200);
    });

    it('retorna um objeto com as chaves elegivel igual a true e economiaAnualDeCO2 com o resultado esperado', () => {
      expect(response.body).to.be.an('object');
      expect(response.body.elegivel).to.be.false;
      expect(response.body).to.has.property('razoesInelegibilidade');
      expect(response.body.razoesInelegibilidade).to.be.deep.equal([
        "Classe de consumo não aceita",
        "Modalidade tarifária não aceita",
      ]);
    });
  });

  // describe('')
});