const { Country } = require("../db.js")
const axios = require("axios");

async function preCharge(){
    try {
        let countries = (await axios.get("https://restcountries.com/v2/all")).data
        countries = countries.map(country => {
            return {
                id: country.alpha3Code,
                name: country.name,
                flag: country.flag,
                continent: country.region,
                capital: country.capital,
                subregion: country.subregion,
                area: country.area,
                population: country.population,
            }
        });
        countries = await Promise.all(countries.map(e => Country.findOrCreate({where: e})))
        //console.log("Paises cargados bien")
        //return "salio bien"
        
        //console.log(countries[0])

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