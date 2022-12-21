const axios = require('axios');
const { Country } = require('./db')

const LoadingDb = async function (req, res) {
  try {
    const AllCountriesApi = await axios.get('https://restcountries.com/v3/all');
    // Me traigo toda la info de paises
    // Luego selecciono los datos que me interesan con un map
    const Countries = AllCountriesApi.data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        flag_img: e.flags[0],
        continent: e.continents[0],
        region: e.region,
        capital: typeof e.capital !== 'undefined' ? e.capital[0] : 'No se encontro la capital',
        subregion: typeof e.subregion !== 'undefined' ? e.subregion : 'No se encontro subregion',
        area: e.area,
        population: e.population,
      };
    });
    Countries.forEach(async (e) => {
      await Country.findOrCreate({
        where: {
          name: e.name,
          id: e.id,
          flag_img: e.flag_img,
          continent: e.continent,
          region: e.region,
          capital: e.capital,
          subregion: e.subregion,
          area: e.area,
          population: e.population,
        },
      });
    });

    console.log('Database loaded successfully')
  } catch (error) {
    console.log(error)
    res.send(error);
  }
}
module.exports = { LoadingDb }