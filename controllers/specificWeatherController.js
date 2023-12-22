const axios = require("axios");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

const fetchDataForSpecificLocation = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e2e806e1b480ea910f059ad02b483505&units=metric`;
    try{
        const response = await axios.get(API_URL);
        return response.data;
    }
    catch(error){
        console.error(`Error for ${cityName}`, error.message);
        res.status(500).json({error: `Error during fetching data for '${cityName}'`});
    }
}

module.exports = { fetchDataForSpecificLocation }