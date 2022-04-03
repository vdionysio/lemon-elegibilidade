const express = require('express');
const rescue = require('express-rescue');
const { eligibility } = require('../controllers');
const { validator } = require('../middlewares');
const {
  props,
  docNumber,
  connectionType,
  consumptionClass,
  tariffModality,
  consumptionHistory,
} = require('../schemas');

const router = express.Router();

router.post(
  '/',
  validator(props),
  validator(docNumber),
  validator(connectionType),
  validator(consumptionClass),
  validator(tariffModality),
  validator(consumptionHistory),
  rescue(eligibility.createReport),
);

module.exports = router;
