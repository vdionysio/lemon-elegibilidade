<p align="center">
  <img src="https://assets.website-files.com/5f7e0994165e365ab297bfe7/5fb28b8004eb4b7dff6fcf23_logo-original.png " />
</p>

<h4 align="center">
   API Lemon Energia 🍋
</h4>

<p align="center">
   <a href="#sobre">Sobre</a> •
   <a href="#instalação">Instalação</a> •
   <a href="#utilização">Utilização</a> •
   <a href="#testes">Testes</a> •
   <a href="#tecnologias">Tecnologias</a>
</p>

<p align="center">
   <a href="http://ec2-18-229-124-142.sa-east-1.compute.amazonaws.com:5000/doc">Link da API</a>
</p>

## Sobre

API desenvolvida para consulta da elegibilidade de possíveis clientes da Lemon Energia. Recebe dados referentes ao consumo energético e responde com um relatório indicando se o requisitante é elegível ou não. Quando elegível, o relatório também retorna a projeção da economia de CO2 em kg/ano. Quando não elegível, retorna os motivos da inelegibilidade.

## Instalação

Primeiramente, faça o clone do repositório.

`git clone git@github.com:vdionysio/lemon-elegibilidade.git`

Entre na pasta clonada.

`cd lemon-elegibilidade`

Escolha uma das opções a seguir para continuar a instalação:

### 1. Utilizando docker

Basta rodar o comando abaixo que o orquestrador ficará responsável pela instalação.

`docker-compose up`

### 1. Utilizando npm

Rode o comando abaixo para instalar todas as dependências.

`npm install`

Rode o comando abaixo para iniciar a aplicação.

`npm start`

### 2. Acesso
Para ambos os casos, quando a API estiver pronta, a mensagem "Escutando na porta 5000" aparecerá no terminal.

Acesse a API a partir da url http://localhost:5000/

## Utilização

Atualmente, a API possui apenas uma rota POST /elegibilidade para checagem da elegibilidade do cliente.

### POST /elegibilidade

A rota em questão é responsável por gerar um relatório sobre a elegibilidade do cliente, com base num JSON enviado como body da requisição.

A requisição aceita apenas as propriedades necessárias com as seguintes chaves:

<table border="1">
  <tr>
    <th>chave</th>
    <th>tipo</th>
    <th>valores possíveis</th>
  </tr>        
  <tr>
    <td>numeroDoDocumento</td>
    <td>string</td>
    <td>CPF ou CNPJ sem pontuação</td>
  </tr>
  <tr>
    <td>tipoDeConexao</td>
    <td>string</td>
    <td>'monofasico', 'bifasico' ou 'trifasico'.</td>

  </tr>
    <tr>
    <td>classeDeConsumo</td>
    <td>string</td>
    <td>'residencial', 'industrial', 'comercial', 'rural' ou 'poderPublico'.</td>
  </tr>
    <tr>
    <td>modalidadeTarifaria</td>
    <td>string</td>
    <td>'azul', 'branca', 'verde' ou 'convencional'.</td>
  </tr>
    <tr>
    <td>historicoDeConsumo</td>
    <td>array de inteiros</td>
    <td>lista de consumos mensais em em kWh. Mínimo 3 meses e máximo 12 meses.</td>
  </tr>
</table>

Para ser elegível os seguintes critérios precisam ser satisfeitos:

<table border="1">
  <tr>
    <th>Propriedade</th>
    <th>Valores Elegíveis</th>
  </tr>
  <tr>
    <td>Classe de consumo</td>
    <td>Comercial, Residencial e Industrial.</td>
  </tr>
    <tr>
    <td>Modalidade tarifária</td>
    <td>Convencional e Branca.</td>
  </tr>
    <tr>
    <td>Consumo mínimo do cliente</td>
    <td>
      <p>
      Clientes com tipo de conexão Monofásica só são elegíveis caso tenham consumo médio acima de 400 kWh.
      </p>
      <p>
      Clientes com tipo de conexão Bifásica só são elegíveis caso tenham consumo médio acima de 500 kWh.
      </p>
      Clientes com tipo de conexão Trifásica só são elegíveis caso tenham consumo médio acima de 750 kWh.
      </p>
    </td>
  </tr>
</table>

Para calcular a projeção da economia anual de CO2 foi utilizada a taxa de 84kg de CO2 para gerar 1000 kWh.

**Exemplos de requisição para a rota POST /elegibilidade**

*Exemplo 1 - Elegível*

Entrada

```json
{
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
}
```

Saída

```json
{
   "elegivel": true,
   "economiaAnualDeCO2": 5553.24,
}
```

**Exemplo 2 - Não elegível**

*Entrada*

```json
{
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
}
```

Saída

```json
{
  "elegivel": false,
	"razoesInelegibilidade": [
    "Classe de consumo não aceita",
    "Modalidade tarifária não aceita"
  ]
}
```

## Testes

O projeto foi construído a partir de TDD. Para rodar os testes execute o seguinte comando na raiz do projeto:

`npm test`

No processo de TDD, foram desenvolvidos todos os testes unitários. Após o desenvolvimento da aplicação, foram adicionados testes de integração.

Atualmente, o projeto conta com um cobertura de 100%
<p align="center">
  <img src="./images/test-coverage.png" />
</p>

## Tecnologias

As seguintes ferramentas foram utilizadas na construção do projeto.

**API([NodeJS](https://nodejs.org/en/))**

- **[Express](https://expressjs.com/)**

- **[Express Rescue](https://www.npmjs.com/package/express-rescue)**

**Testes**
- **[Chai](https://www.chaijs.com/)**
- **[Chai HTTP](https://www.chaijs.com/plugins/chai-http/)**
- **[Mocha](https://mochajs.org/)**
- **[Sinon](https://sinonjs.org/)**

**Utilitários**
- **[ESLint](https://eslint.org/)**
- **[nodemon](https://www.npmjs.com/package/nodemon)**
- **[dotenv](https://www.npmjs.com/package/dotenv)**
- **[nyc](https://github.com/istanbuljs/nyc)**
- **[VSCode](https://code.visualstudio.com/)**
- **[Insomnia](https://insomnia.rest/)**

<hr>

## Autor

Vinícius Dionysio

<div> 
  <a href = "mailto:vini.dionysio@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
  <a href="https://www.linkedin.com/in/vdionysio/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
</div>