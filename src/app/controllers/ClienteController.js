const Client = require("../models/Client");

class ClientController {
  async index(req, res) {
    return res.json("index");
  }

  async create(req,res){

    const{id,name,email,cellphone} = await Client.create(req.body);

    return res.json({
      id,
      name,
      email,
      cellphone
    })
  }
}

module.exports = new ClientController();
