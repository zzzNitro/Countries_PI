const { Activity, Country, Op } = require('../db');

async function addActivity(req, res, next) {
    try {
        const { name, difficulty, duration, season } = req.body; //destructuring del body sin cca3
        if (!name || !difficulty || !season || !duration) {
            res.status(404).send('Faltan propiedades');
        } else {
            const newActivity = {
                name, 
                difficulty,
                duration,
                season,
            }

            return Activity.create(newActivity)
            .then(async (activity) => {
                await activity.addCountries(req.body.countries)
                return activity
            })
            .then((activity) => res.send(activity))
        }
    } catch (error){
        console.log(error)
    }
    
}

async function getActivities(req, res, next) {
    try {
        let { name } = req.query;
        let activities = []
        if (name && name !== "") {
            activities = await Activity.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Country
            })
        } else {
            activities = await Activity.findAll({ include: Country })
        }
        res.send({activities: activities})
    } catch (error) {
        console.log(error)
        next(error)
    }
}

module.exports = { addActivity, getActivities }