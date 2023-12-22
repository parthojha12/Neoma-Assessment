# Neoma Assessment

## Weather App API

This project leverages **MongoDB, Node.js,** and **Express** to create a **weather data management system**. Utilizing a third-party API, it fetches weather data for diverse locations, storing it in a MongoDB collection.
The implementation encompasses **CRUD** operations, allowing users to Create, Read, Update, and Delete weather data through corresponding endpoints (POST, GET, PUT, DELETE).
Additionally, a search functionality has been integrated, enabling users to retrieve the **current weather** for a specific location.

This project not only showcases effective use of popular technologies but also provides a comprehensive solution for **managing and accessing weather information.**

## API Endpoints 
1. **"/ "** ->   http://localhost:8080/
   
   **(GET)** - This default route will render the "index.html file" when the app launches.
  
   ![Screenshot 2023-12-14 170936](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/bb651aca-5003-4d73-ad54-4a236c982ae7)

4. **"/weathers "** -> Example - http://localhost:8080/weathers

    **(GET)** - Get all locations user has added in database collection.
   ![Screenshot 2023-12-14 140551](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/74caddad-6097-4fbc-b574-c9f66c7468b8)
   
6. **"/weathers/:identifier "** ->  Example - http://localhost:8080/weathers/delhi or http://localhost:8080/weathers/65852bacb9ec64a796ad9780
   
   **(GET)** - User can get weather forecast data of that location from databse collection by using ID or City.
![Screenshot 2023-12-14 141018](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/a7ec56aa-91ea-4a95-870f-41614212d968)
   
   **(PUT)** - User can update weather data of that particular location by using its ID or City name.
![Screenshot 2023-12-14 140851](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/03e4ecab-3aab-4de4-8305-7f20992bf7b2)

   **(DELETE)** - Delete weather data from database collection by ID or City.
![Screenshot 2023-12-14 141041](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/2f00760e-8549-409c-8558-3f234f9b6f11)

8. **"/weather/:lat/:lon "** ->  Example - http://localhost:8080/weathers/-29.8579/31.0292

   **(POST)** - User can add weather forecast of any location by latitude(lat) and longitude(lon)
![Screenshot 2023-12-14 140523](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/b49f478f-cf1e-4010-ad2f-0b3237911f5c)

9. **"/weather/:cityName"** ->  Example - http://localhost:8080/weathers/delhi

   **(POST)** - User can add weather forecast of any location by City (cityName)
![Screenshot 2023-12-14 140523](https://github.com/parthojha12/Weather-App-FitPage/assets/112394456/b49f478f-cf1e-4010-ad2f-0b3237911f5c)


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

