const express = require("express");
const { fetchDataForSpecificLocation } = require("../controllers/specificWeatherController");
const router = express.Router();

//GET : Fetch weather data of any City regardless if its in database collection or not  (Example - /location/delhi)
router.get("/location/:cityName", async (req,res) => {
    try{
        const cityName = req.params.cityName;
        const weatherData = await fetchDataForSpecificLocation(cityName);
        res.json(weatherData);
        console.log(`Weather data for ${cityName} successfully fetched`)
    }
    catch(error){
        console.error(`Error fetching weather data of ${cityName}:`, error.message);
        res.status(500).json({error: `Error fetching weather data of ${cityName}`});
    }
})

module.exports = router;