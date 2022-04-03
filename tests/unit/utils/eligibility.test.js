const { expect } = require('chai');
const { eligibility } = require('../../../src/utils');
const mocks = require('../mocks/eligibilityMocks');

describe('Checagem da elegibilidade', () => {
  describe('Quando o cliente é elegível', () => {
    const { eligible } = mocks;
    let report;
    before(() => {
      report = eligibility.generateReport(eligible)
    });
    it('a função generateReport deve retornar um objeto com a propriedade elegivel sendo true', () => {
      expect(report.elegivel).to.be.true;
    })
    it('e a propriedade economiaAnualDeCO2', () => {
      expect(report).to.has.property('economiaAnualDeCO2')
      expect(report.economiaAnualDeCO2).to.be.equal(5553.24)
    })
  });

  describe('Quando o cliente não é elegível', () => {
    const { notEligible } = mocks;
    let report;
    before(() => {
      report = eligibility.generateReport(notEligible);
    });
    it('a função generateReport deve retornar um objeto com a propriedade elegivel sendo false', () => {
      expect(report.elegivel).to.be.false;
    })
    it('e a propriedade razoesInelegibilidade', () => {
      expect(report).to.has.property('razoesInelegibilidade');
      expect(report.razoesInelegibilidade).to.be.deep.equal([
        "Classe de consumo não aceita",
        "Modalidade tarifária não aceita",
      ]);
    })
  });
});