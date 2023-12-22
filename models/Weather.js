const mongoose = require("mongoose")

const weatherSchema = new mongoose.Schema({
    "coord": {
        "lon": {type: Number, required: true},
        "lat": {type: Number, required: true},
    },
    "weather": [
        {
            "id": {type: Number,},
            "main": {type: String, required: true},
            "description": {type: String, required: true},
            "icon": {type: String}
        }
    ],
    "base": {type: String},
    "main": {
        "temp": {type: Number, required: true},
        "feels_like": {type: Number},
        "temp_min": {type: Number},
        "temp_max": {type: Number},
        "pressure": {type: Number},
        "humidity": {type: Number},
        "sea_level": {type: Number},
        "grnd_level": {type: Number}
    },
    "visibility": {type: Number},
    "wind": {
        "speed": {type: Number},
        "deg": {type: Number},
        "gust": {type: Number}
    },
    "clouds": {
        "all": {type: Number}
    },
    "dt": {type: Number},
    "sys": {
        "country": {type: String},
        "sunrise": {type: Number},
        "sunset": {type: Number}
    },
    "timezone": {type: Number},
    "id": {type: Number},
    "name": {type: String},
    "cod": {type: Number}
});

const Weather = mongoose.model("Weather", weatherSchema);

module.exports = Weather;