/* eslint-disable import/no-extraneous-dependencies */
const request = require('supertest');
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Country, conn, load } = require('../../src/db.js');

const agent = session(app);
const country1 = {
  name: 'Argentina',
  id:'ARG',
  flag_img: 'https://flagcdn.com/ar.svg',
continent: 'South America',
capital: 'Buenos Aires',
subregion: 'South America',
area: 2780400,
population: 45376763,
}; 
const country2 = {
  id: "BRA",
  name: "Brazil",
  flag_img: "https://flagcdn.com/br.svg",
  continent: "South America",
  capital: "Brasília",
  subregion: "South America",
  area: 8515767,
  population: 212559409
}; 
const country3 = {
  id: "BOL",
name: "Bolivia",
flag_img: "https://flagcdn.com/bo.svg",
continent: "South America",
capital: "Sucre",
subregion: "South America",
area: 1098581,
population: 11673029
}; 

describe('Country routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Country.sync({ force: true })
  .then(() => Country.create(country1)).then(() => Country.create(country2)).then(() => Country.create(country3)));
  describe('GET /countries', () => {
  
    it('should get 200', () =>
      agent.get('/countries').expect(200)
    );
  });
  it('should return the list of all countries', async () => {
    const res = await request(app).get('/countries');
    expect(res.body).lengthOf(3);
  })
  // it('should return country select', async () => {
  //   const res = await request(app).get('/countries/:idPais').send({name:"BOL"});
  //   expect(res.body).equal({
  //     id: "BOL",
  //   name: "Bolivia",
  //   flag_img: "https://flagcdn.com/bo.svg",
  //   continent: "South America",
  //   capital: "Sucre",
  //   subregion: "South America",
  //   area: 1098581,
  //   population: 11673029
  //   })
  // })
});
