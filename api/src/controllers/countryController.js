const { Country } = require("../db.js")
const axios = require("axios");

async function preCharge(){
    try {
        let result = await axios.get('https://restcountries.com/v3.1/all');

        let countries = result.data.map((country) => {
            return {
                id: country.cca3,
                name: country.name.common,
                flag: country.flags.png || "not defined",
                continent: country.region || "not defined",
                capital: country.capital && country.capital[0] || "not defined",
                subregion: country.subregion || "not defined",
                area: country.area || 0,
                population: country.population || 0
            }
        })
        countries = await Promise.all(countries.map(c => Country.findOrCreate({ where: c })))

        return "Paises cargados: Si"

    } catch (error) {
        console.log(error);
        return "Paises cargados: No"
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

async function getCountriesById(req, res, next) {
    try {
        const id = req.params.id;
        let country = await Country.findByPk(id) //{ include: Activity })
        return res.send(country)
    } catch (error) {
        console.log(error)
        next(error);
    }
}


module.exports={
    preCharge,
    getCountries,
    getCountriesById
}