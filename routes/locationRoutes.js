const express = require("express");
const router = express.Router();
const Weather = require("../models/Weather")
const {fetchData, getAllLocationsData, getWeatherDataById, getWeatherDataByCityName, deleteWeatherDataById, deleteWeatherDataByCityName, fetchDataByCityName, updateWeatherDataById, updateWeatherDataByCityName} = require("../controllers/weatherController");

// CREATE : Add weather forecast of any location by latitude(lat) and longitude(lon) (Example - /weathers/-29.8579/31.0292)
router.post("/:lat/:lon", async (req,res) => {
    const {lat, lon} = req.params;
    try{
        await fetchData(lat, lon);
        res.json({message: `Weather data for latitude ${lat} and longitude ${lon} added successfully`});
    }
    catch(error){
        console.error(`Error for latitude ${lat} and longitude ${lon}`, error.message);
        res.status(500).json({error: `Error for latitude ${lat} and longitude ${lon}`});
    }
});

// CREATE : Add weather forecast of any location by City name(cityName) (Example - /weathers/delhi)
router.post("/:cityName", async (req,res) => {
    const {cityName} = req.params;
    try{
        await fetchDataByCityName(cityName);
        res.json({message: `Weather data for ${cityName} added successfully`});  
    }
    catch(error){
        console.error(`Error for ${cityName} `, error.message);
        res.status(500).json({error: `Error for ${cityName}`});
    }
});

// READ : Get all locations weather data (Example - /weathers)
router.get("/", async (req,res) => {
    try{
        const allLocationsData = await getAllLocationsData();
        res.json(allLocationsData);
        console.log("All location's weather data fetched successsfully")
    }
    catch(error){
        console.error("Error getting all locations data:", error.message);
        res.status(500).json({errror: "Error getting all locations data"});
    }
});

// READ : Get locations weather data By ID or City (Example - /weathers/delhi OR /weathers/65852bacb9ec64a796ad9780)
router.get("/:identifier", async (req,res) => {
    const {identifier} = req.params;
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);
    const isCityName = /^[a-zA-Z]+$/i.test(identifier) && /^[a-zA-Z]+$/.test(identifier);
    try{
        let weatherData;
        if(isObjectId){
            weatherData = await getWeatherDataById(identifier); 
        }
        else if(isCityName){
            weatherData = await getWeatherDataByCityName(identifier);
        }
        else{
            throw new Error("Invalid identifier format")
        }
        res.json(weatherData);
    }
    catch(error){
        console.error(`Error getting weather data for ${identifier}:`, error.message);
        res.status(500).json({error: `Weather data for '${identifier}' not found`});
    }
});

//UPDATE : Update weather data by ID or City (Example - /weathers/delhi OR /weathers/65852bacb9ec64a796ad9780)
router.put("/:identifier", async (req, res) => {
    const { identifier } = req.params;
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);
    const isCityName = /^[a-zA-Z]+$/i.test(identifier) && /^[a-zA-Z]+$/.test(identifier);
    // Check if the request body contains valid update fields
    const updateFields = req.body;
    const validUpdateFields = Object.keys(updateFields).every(field => {
        return Weather.schema.obj[field] !== undefined;
    });

    if (!validUpdateFields) {
        return res.status(400).json({ error: "Invalid update fields" });
    }

    try {
        let updatedWeatherData;

        if (isObjectId) {
            updatedWeatherData = await updateWeatherDataById(identifier, updateFields);
        }
        else if(isCityName){
            updatedWeatherData = await updateWeatherDataByCityName(identifier, updateFields);
        }
        else{
            throw new Error("Invalid identifier format");
        }
        res.json(updatedWeatherData);
        console.log(`Weather data of '${identifier}' updated`);
    } 
    catch(error){
        console.error(`Error updating weather data for ${identifier}:`, error.message);
        res.status(500).json({ error: `Error updating weather data for '${identifier}'` });
    }
});

//DELETE : Delete weather data by ID or City (Example - /weathers/delhi OR /weathers/65852bacb9ec64a796ad9780)
router.delete("/:identifier", async (req,res) => {
    const {identifier} = req.params;
    const isObjectId = /^[0-9a-fA-F]{24}$/.test(identifier);
    const isCityName = /^[a-zA-Z]+$/i.test(identifier) && /^[a-zA-Z]+$/.test(identifier);
    try{
        let result;
        if(isObjectId){
            result = await deleteWeatherDataById(identifier); 
        }
        else if(isCityName){
            result = await deleteWeatherDataByCityName(identifier);
        }
        else{
            throw new Error("Invalid identifier format")
        }
        res.json(result);
        console.log(`Weather data of '${identifier}' deleted successfully`)
    }
    catch(error){
        console.error(`Error deleting weather data of ${identifier}:`, error.message);
        res.status(500).json({error: `Error deleting weather data of '${identifier}' `});
    }
});


module.exports = router;