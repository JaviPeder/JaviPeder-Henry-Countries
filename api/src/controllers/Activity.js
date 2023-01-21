const { Country, Activity } = require("../db");

const newActivity = async function (name, difficulty, duration, season, countryID, description) {
  //Busco la actividad por name para saber si existe
  // console.log(countryID)
  if (!name || !difficulty || !duration || !season || !countryID || !description) {
    throw new Error('Debe completar todos los campos requeridos')
  }
  const searchActivity = await Activity.findOne({
    where: {
      name: name,
    },
  });
  // console.log(searchActivity)
  // busco el pais que coincida con id
  const countryMatch = await Country.findAll({
    where: {
      id: countryID,
    },
  });
  // console.log(countryMatch)
  if (countryMatch.length === 0) {
    throw new Error(`No se encuentra el país ${countryID} para agregar actividad`)
  }
  // si no existe en la base de datos, crearla
  if (!searchActivity) {
    const newActiv = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
      description: description
    });
    //agrego la actividad al pais
    // const NewActivityAdd = 
    await newActiv.addCountries(countryMatch);
    // return NewActivityAdd ???;
    return `Nueva actividad ${name} fué creada y agregada con éxito`
  } else {
    // console.log(countrymatch)
    // const ActivityAdd = 
    await searchActivity.addCountries(countryMatch);
    // return ActivityAdd;
    return `Actividad ${name} agregada con éxito`
  }
}
module.exports = { newActivity };