const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");

const CountryById = async function (req, res) {
  try {
    const CountryId = req.params.idPais.toUpperCase();
    // console.log(idpais)
    const findCountry = await Country.findOne({
      where: {
        id: CountryId,
      },
      include: Activity,
    });
    return res.send(findCountry);
  } catch (error) {
    res.send(error);
  }
}

module.exports = { CountryById };