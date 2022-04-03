const eligible = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "comercial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
    6941, // 10 meses atras
    4597  // 11 meses atras
  ]
};

const notEligible = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "rural",
  "modalidadeTarifaria": "verde",
  "historicoDeConsumo": [
    3878, // mes atual
    9760, // mes anterior
    5976, // 2 meses atras
    2797, // 3 meses atras
    2481, // 4 meses atras
    5731, // 5 meses atras
    7538, // 6 meses atras
    4392, // 7 meses atras
    7859, // 8 meses atras
    4160, // 9 meses atras
  ]
};

const notEligibleByHistory = {
  "numeroDoDocumento": "14041737706",
  "tipoDeConexao": "bifasico",
  "classeDeConsumo": "residencial",
  "modalidadeTarifaria": "convencional",
  "historicoDeConsumo": [
    278, // mes atual
    160, // mes anterior
    276, // 2 meses atras
    297, // 3 meses atras
    181, // 4 meses atras
    131, // 5 meses atras
    138, // 6 meses atras
    192, // 7 meses atras
    159, // 8 meses atras
    160, // 9 meses atras
  ]
};

module.exports = {
  eligible,
  notEligible,
  notEligibleByHistory,
}