const { Country, Activity } = require("../db");

const newActivity = async function (req, res) {
  const { name, difficulty, duration, season, countryID } = req.body;

  const valdidate = await Activity.findOne({
    where: {
      name: name,
    },
  });

  if (!valdidate) {
    const newActiv = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
    });
    const countryMatch = await Country.findAll({
      where: {
        id: countryID,
      },
    });

    const resact = await newActiv.addCountries(countryMatch);

    return res.send(resact);
  }

  const countryMatch = await Country.findAll({
    where: {
      id: countryID,
    },
  });
  // console.log(addAct)
  // console.log(countrymatch)

  const resact = await valdidate.addCountries(countryMatch);

  res.send(resact);
}
module.exports = { newActivity };