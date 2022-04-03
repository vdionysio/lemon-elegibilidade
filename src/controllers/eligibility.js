const { generateReport } = require('../utils/eligibility');

const createReport = (req, res) => {
  const report = generateReport(req.body);

  res.status(200).json(report);
};

module.exports = {
  createReport,
};
