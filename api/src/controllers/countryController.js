const { Country, Activity, Op } = require("../db.js")
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
        console.log("Paises cargados: Si")
        return "Paises cargados: Si"

    } catch (error) {
        console.log(error);
        return "Paises cargados: No"
    }
}

async function getCountries(req, res, next){    
    try {
        let { name, order, page } = req.query;
        let countries = []
        page = page || 1
        const countriesOnPage = 5

        //#region NAME
        if (name && name !== "") {
            console.log(`Entro al if con name = ${name}`)
            countries = await Country.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Activity
            })
        } else {
            countries = await Country.findAll({ include: Activity })
        }
        //#endregion

        //#region ORDER
        if(order === "asc" || !order || order === ""){
            countries = countries.sort((a,b) =>{
                return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
            })
        }else{
            countries = countries.sort((a,b) =>{
                return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
            })
        }
        //#endregion        
        
        //#region PAGE
        let result = countries.slice((charXPage * (page -  1)) , (charXPage * (page -  1)) + charXPage )
        //#endregion

        return res.send({
            result: result,
            count: countries.length
        })






        
    } catch (error) {
        next(error)
    }
}


async function getCountriesById(req, res, next) {
    try {
        const id = req.params.id;
        let country = await Country.findByPk(id)//, { include: Activity })
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