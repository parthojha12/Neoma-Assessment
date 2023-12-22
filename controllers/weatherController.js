const axios = require("axios");
const Weather = require("../models/Weather");
require('dotenv').config();
const API_KEY = process.env.API_KEY;

const fetchData = async (lat, lon) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=e2e806e1b480ea910f059ad02b483505&units=metric`

    try {
        const response = await axios.get(API_URL);
        const weatherData = response.data;

        const newLocation = new Weather(weatherData);
        await newLocation.save();
        console.log(`Weather data for ${weatherData.name} saved to database`);

        return weatherData;
    } 
    catch(error) {
        console.error("Error fetching and storing data:", error.message);
        throw error;
    }
}

const fetchDataByCityName = async (cityName) => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e2e806e1b480ea910f059ad02b483505&units=metric`

    try {
        const response = await axios.get(API_URL);
        const weatherData = response.data;

        const newLocation = new Weather(weatherData);
        await newLocation.save();
        console.log(`Weather data for ${weatherData.name} saved to database`);

        return weatherData;
    } 
    catch(error) {
        console.error("Error fetching and storing data:", error.message);
        throw error;
    }
}

const getAllLocationsData = async () => {
    try{
        const weatherData = await Weather.find();
        return weatherData;
    }
    catch(error){
        console.error("Error fetching all locations data:", error.message);
        throw error;
    }
};

const getWeatherDataById = async (identifier) => {
    try{
        const weatherData = await Weather.findById(identifier);
        console.log(`Weather data of '${weatherData.name}' with ID '${identifier} fetched'`)
        return weatherData;
    }
    catch(error){
        console.error(`Error fetching location's weather data with ID ${identifier}`, error.message);
        throw error;
    }
}; 

const getWeatherDataByCityName = async (cityName) => {
    try {
        const weatherData = await Weather.findOne({ name: { $regex: new RegExp(`^${cityName}$`, 'i') } });

        if (!weatherData) {
            throw new Error(`Weather data for "${cityName}" not found`);
        }
        console.log(`Weather data of '${weatherData.name}' fetched successfully`)
        return weatherData;
    } catch (error) {
        console.error(`Error getting weather for "${cityName}":`, error.message);
        throw error;
    }
};

const deleteWeatherDataById = async (identifier) => {
    try{
        const result = await Weather.findByIdAndDelete(identifier);
        if (!result) {
            throw new Error(`Weather data with ID ${identifier} not found or already deleted`);
          }
          return { message: `Weather data of ${result.name} with ID ${identifier} deleted successfully` };
    }
    catch(error){
        console.error(`Error deleting weather data of ID ${id}`)
        throw error;
    }
}

const deleteWeatherDataByCityName = async (cityName) => {
    try {
        const result = await Weather.findOneAndDelete({ name: { $regex: new RegExp(`^${cityName}$`, 'i') } });

        if (!result) {
            throw new Error(`Weather data for "${cityName}" not found`);
        }
        return {message: `Weather data of '${cityName}' deleted`};
    } catch (error) {
        console.error(`Error deleting weather of "${cityName}":`, error.message);
        throw error;
    }
};

const updateWeatherDataById = async (identifier, updateFields) => {
    try {
        const updatedWeatherData = await Weather.findByIdAndUpdate(
            identifier,
            { $set: updateFields },
            { new: true } // Return the updated document
        );
        if (!updatedWeatherData) {
            throw new Error(`Weather data with ID ${identifier} not found`);
        }
        console.log(`Weather data of '${updatedWeatherData.name}' with ID '${identifier}' updated successfully`);
        return updatedWeatherData;
    } 
    catch(error){
        console.error(`Error updating weather data for ID ${identifier}:`, error.message);
        throw error;
    }
};

const updateWeatherDataByCityName = async (cityName, updateFields) => {
    try{
        const updatedWeatherData = await Weather.findOneAndUpdate(
            {name: { $regex: new RegExp(`^${cityName}$`, 'i')}},
            {$set: updateFields},
            {new: true} 
        );

        if(!updatedWeatherData){
            throw new Error(`Weather data of ${cityName} not found`);
        }
        console.log(`Weather data of '${cityName}' updated successfully`);
        return updatedWeatherData;
    }
    catch(error){
        console.error(`Error updating weather data of '${cityName}':`,error.message);
        throw error;
    }
};

module.exports = { fetchData, fetchDataByCityName, getAllLocationsData, getWeatherDataById, getWeatherDataByCityName,deleteWeatherDataById, deleteWeatherDataByCityName, updateWeatherDataById, updateWeatherDataByCityName }