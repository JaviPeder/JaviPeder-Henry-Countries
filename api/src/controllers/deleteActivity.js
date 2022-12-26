const { Activity } = require("../db");

const deleteActivity = async function (name) {
    //Busco la actividad por name para saber si existe
    if (!name) {
        throw new Error('Debe seleccionar una actividad a eliminar')
    }
    const searchActivity = await Activity.findOne({
        where: {
            name: name,
        },
    });
    //   console.log(searchActivity)
    //   busco el pais que coincida con id
    // const countryMatch = await Country.findAll({
    //     where: {
    //         id: countryID.toUpperCase(),
    //     },
    // });
    // console.log(countryID)

    if (!searchActivity) {
        throw new Error(`No se encuentra la actividad ${name} para eliminar`)
    } else{
        // console.log(countrymatch)
        await Activity.destroy({
            where: {
                name: name
            }
        })
        // return ActivityAdd;
        return `Actividad ${name} eliminada con éxito`
    } 
    
    // else {
    //     await countries_activity.destroy({
    //         where: {
    //             countryId: countryID
    //         }
    //     })
    //     `Actividad ${name} del país ${countryID} eliminada con éxito`
    // }
}
module.exports = { deleteActivity };