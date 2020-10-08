const { Model } = require("sequelize");
const Sequelize = require("sequelize");

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cellphone: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

module.exports =  Client;
