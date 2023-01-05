const { Sequelize } = require("sequelize");
// const Op = Sequelize.Op;
const { Country, Activity } = require("../db");

const getAllCountries = async function (name) {

    const countryAll = await Country.findAll({ include: Activity });// Traigo toda la informacion incluida la actividad
    if (!name) {  //si no tiene name por query que devuelva todo   
        return countryAll;
    } else {
        // Si tiene name que filtre los datos 
        let searchCountry = await countryAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
        if (searchCountry.length === 0) {
            // si el pais no se encuentra en la dataBase
            throw new Error(`No se encuentra el país con el nombre ${name}`)
            //   console.log(error);
        } else {
            // si esta el pais que devuelva la coincidencia
            return searchCountry;
        }

    }
}

module.exports = { getAllCountries }