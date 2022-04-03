const express = require('express');
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
  '/eligibility',
  validator(props),
  validator(docNumber),
  validator(connectionType),
  validator(consumptionClass),
  validator(tariffModality),
  validator(consumptionHistory),
);

module.exports = router;
