const { Sequelize } = require("sequelize");
const { Country, Activity } = require("../db");

const CountryById = async function (countryId) {
    // console.log(idpais)
    if(countryId === null){
      throw new Error('Debe ingresar un id')
    }
    if(countryId.length > 3){
      // console.log(countryId.length)
      throw new Error('Debe ingresar un valor de tres letras')
    }
    const findCountry = await Country.findOne({
      where: {
        id: countryId,
      },
      include: Activity,
    });
    if(findCountry){
       return findCountry;
    }else{
      throw new Error(`El país con el id ${countryId} no existe en la base de datos`)
    }
 
}

module.exports = { CountryById };