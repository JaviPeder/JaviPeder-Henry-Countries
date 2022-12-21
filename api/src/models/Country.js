const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('country', {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag_img: {
      type: DataTypes.STRING,
      allowNull: false,
    }, //array
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    }, //array
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    subregion: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    // createdInDb: {
    //   type: DataTypes.BOOLEAN,
    //   allowNull: false,
    //   defaultValue: true
    // }
  });
};
// ID (Código de 3 letras) * STRING
// https://es.wikipedia.org/wiki/ISO_3166-1_alfa-3

// Nombre *   STRING
// Imagen de la bandera *  STRING
// Continente *       STRING
// Capital *          STRING
// Subregión          STRING
// Área               NUMERO
// Población          NUMERO