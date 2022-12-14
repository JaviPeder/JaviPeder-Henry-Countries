const { Country, conn, load } = require('../../src/db.js');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
const { expect } = require('chai');
const  { getAllCountries }  = require ('../../src/controllers/AllCountries.js')

chai.use(chaiAsPromised);

describe('Controllers', () => {
    // Country.sync({ force: true })
    // beforeEach(async () => await load);
    describe('countries_name', () => {
        it('should throw an result if name is correct', async () => {
            const result = await getAllCountries('Argentina');
            // expect(result).to.have.lengthOf(1)
            expect(result[0].name).to.equal('Argentina')
        });
        it("shouldn't work when it is not a valid name",async () => {
             await expect(getAllCountries('argentino')).to.be.rejectedWith('No se encuentra el país con el nombre argentino') 
        })
        })
})