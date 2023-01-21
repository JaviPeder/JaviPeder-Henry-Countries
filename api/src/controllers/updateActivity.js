const { Country, Activity } = require("../db");

const updateActivity = async function (id, name, difficulty, duration, season, countryID, description) {
    //Busco la actividad por name para saber si existe
    if (!id) {
        throw new Error('You must enter an id value')
    }
    const searchActivity = await Activity.findOne({
        where: {
            id: id,
        },
    });
    const countryMatch = await Country.findAll({
        where: {
          id: countryID,
        },
      });
        console.log(searchActivity)
    if (!searchActivity) {
        throw new Error(`Cannot find activity ${id} to update`)
    } else{
        
        await Activity.update(
            {
                name: name,
                difficulty: difficulty,
                duration: duration,
                season: season,
                description: description,
            }, {where: {
                id: id,
            }}
        )

        await searchActivity.setCountries(countryID);
        // return ActivityAdd;
        return `Actividad ${name} actualizada con éxito`
    } 
}
module.exports = { updateActivity };