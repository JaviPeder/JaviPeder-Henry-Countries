const { Sequelize } = require("sequelize");
const Op = Sequelize.Op;
const { Country, Activity } = require("../db");

const getAllCountries = async function (req, res){
    let { name } = req.query;
    // console.log(name)
    try {
        const countryAll = await Country.findAll({ include: Activity});
        // Traigo toda la informacion incluida la actividad
        if(!name){  
            //si no tiene name por query que devuelva todo   
      res.send(countryAll);
        } else {
        // Si tiene name que filtre los datos 
            let searchCountry = await countryAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
            if (searchCountry.length === 0) {
    // si el pais no se encuentra en la dataBase
                      throw new Error(` No se encuentra el País con el nombre  ${name}`) 
                      //   console.log("error");
                    }else{
    // si esta el pais que devuelva la coincidencia
                        res.send(searchCountry);
                    } 
        //     {
        //     const searchCountry = await Country.findAll({
        //       where: {
        //         name: {
        //           [Op.iLike]: `%${name}%`
        //         },
        //       },
        //        include: Activity
        //     });
      
        //     if (!searchCountry[0]) {
        //       console.log("error");
      
        //       return res
        //         .status(404)
        //         .json({
        //           error: ` No se encuentro el País con el nombre  ${name}`,
        //         });
        //     }
        //     return res.send(searchCountry);
        //   }
        } 
    }catch (error) {
          res.send(error);
        }  
}

module.exports = { getAllCountries }