const { Country, conn, load } = require('../../src/db.js');
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
const { expect } = require('chai');
const  { CountryById }  = require ('../../src/controllers/CountryById.js')
chai.use(chaiAsPromised);

describe('Controllers_ById', () => {
    // beforeEach(async () => await load);
    describe('countries_name', () => {
        it('should work when its a valid id', async () => {
            const result = await CountryById('ARG');
            // console.log(Object.keys(result))
            expect(result.id).to.equal('ARG')
            expect(Object.keys(result)).to.have.lengthOf(7);
            // un unico país
        });
        it("shouldn't work when it's not a valid id",async () => {
             await expect(CountryById('ARO')).to.be.rejectedWith('El país con el id ARO no existe en la base de datos') 
        })
        it("shouldn't work when id is equal to null",async () => {
            await expect(CountryById(null)).to.be.rejectedWith('Debe ingresar un id') 
       })
       it("should not work when the id has more than 3 letters",async () => {
        await expect(CountryById('ARON')).to.be.rejectedWith('Debe ingresar un valor de tres letras') 
   })

        })
})