# Neoma Assessment

## Weather App API

This project leverages **MongoDB, Node.js,** and **Express** to create a **weather data management system**. Utilizing a third-party API, it fetches weather data for diverse locations, storing it in a MongoDB collection.
The implementation encompasses **CRUD** operations, allowing users to Create, Read, Update, and Delete weather data through corresponding endpoints (POST, GET, PUT, DELETE).
Additionally, a search functionality has been integrated, enabling users to retrieve the **current weather** for a specific location.

This project not only showcases effective use of popular technologies but also provides a comprehensive solution for **managing and accessing weather information.**

## API Endpoints 
1. **"/ "** ->   http://localhost:8080/
   
   **(GET)** - This default route will render the "index.html file" when the app launches.
   ![Screenshot 2023-12-22 220358](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/c43fe970-bc02-4287-9936-7a3dd2f1c6a3)

4. **"/weathers "** -> Example - http://localhost:8080/weathers

    **(GET)** - Get all locations user has added in database collection.
   ![Screenshot 2023-12-22 221403](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/263d9c9f-c5f9-4950-90c7-b5f2c8684ae1)
   
6. **"/weathers/:identifier "** ->  Example - http://localhost:8080/weathers/delhi or http://localhost:8080/weathers/65852bacb9ec64a796ad9780
   
   **(GET)** - User can get weather forecast data of that location from databse collection by using ID or City.
![Screenshot 2023-12-22 220847](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/37aac0e9-1f74-4d72-818d-d4e376ad6aac)
   
   **(PUT)** - User can update weather data of that particular location by using its ID or City name.
![Screenshot 2023-12-22 220950](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/1c17662f-5d98-47fc-8814-24588e4c679c)

   **(DELETE)** - Delete weather data from database collection by ID or City.
![Screenshot 2023-12-22 221033](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/1da73310-5bae-45e7-ae71-a1d41c959e22)

8. **"/weather/:lat/:lon "** ->  Example - http://localhost:8080/weathers/-29.8579/31.0292

   **(POST)** - User can add weather forecast of any location by latitude(lat) and longitude(lon)
![Screenshot 2023-12-22 220658](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/58d18e57-2d18-44d2-85a6-9c65da32b3ec)

9. **"/weather/:cityName"** ->  Example - http://localhost:8080/weathers/delhi

   **(POST)** - User can add weather forecast of any location by City (cityName)
![Screenshot 2023-12-22 220739](https://github.com/parthojha12/Neoma-Assessment/assets/112394456/26109ea4-d30e-4ee9-8e2d-93c6ccd61b01)


## Application Folder Structure
1. **[controllers/specificWeatherController.js]** -> Responsible for fetching weather data for a given location.

2. **[controllers/weatherController.js]** -> Responsible for fetching and handling the weather forecast data for routes.

3. **[routes/locationRoutes.js]** -> Routes for CRUD operations of the weather data in database collection using the Express Router

4. **[routes/specificLocationRoutes.js]** -> Route for fetching weather information based on a specific location ID.

5. **[/index.js]** ->  For handling requests and responses.To connect and start the server.
   
6. **[src/index.html]** -> The home page for the application.

7. **[models/Weather.js]** -> The home page for the application.
```
├── controllers
|   ├── weatherController.js
|   ├── specificWeatherController.js
├── models
|   ├── Weather.js
├── routes
|   ├── locationRoutes.js
|   ├── specificLocationRoutes.js
├── src/
│   ├── index.html 
├── index.js
├── {} package-lock.json
└── {}package.json
```

## Installation 

You'll need to have **Node.js** and **MongoDB** installed on your computer in order to begin working on the project. 

Once installed, Clone this repository to your **local** machine.

Install the required dependencies as mentioned below by using **npm install <packageName>**.

Start the server by **nodemon index.js**

## Dependencies
Following dependencie are needed to run this application: 

1. express

2. mongoose

3. nodemon

4. axios

5. dotenv

