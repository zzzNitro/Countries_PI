const { Country } = require("../db.js")
const axios = require("axios");

async function preCharge(){
    try {
        let countries = (await axios.get("https://restcountries.com/v3/all")).data
        countries = countries.map(e => {
            return {
                id: e.cca3,
                name: e.name.common,
                capital: e.capital,
                flag: e.flags[1],
                continent: e.region,
                subregion: e.subregion,
                area: e.area,
                population: e.population,
            }
        });
        //countries = await Promise.all(countries.map(e => Country.findOrCreate({where: e})))
        //console.log("Paises cargados bien")
        //return "salio bien"
        
        console.log(countries[0])

       /*

        episodes=  await Promise.all(episodes.map(e=> Episodes.findOrCreate({where: e})))
        console.log("Episodios cargados exitosamente")
        return "Episodios cargados exitosamente"
        */
    } catch (error) {
        console.log(error)
    }
}

async function getCountries(req, res, next){    
    try {
        let allCountries = await Country.findAll()
        res.send(allCountries)
    } catch (error) {
        next(error)
    }
}



module.exports={
    preCharge,
    getCountries
}