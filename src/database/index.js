const Client = require("../app/models/Client");
const Sequelize = require("sequelize");
const databaseConfig = require("../config/database");

const models = [Client];
class dataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}
module.exports= new dataBase();
