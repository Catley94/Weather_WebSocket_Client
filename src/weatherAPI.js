//Using WeatherAPI.com
//Had to make this repo private because I'm storing my APIKey here
//In Unity, ask for the API key and send it to the frontend.
const format = "json";
let weatherAPIKey = "";

const form = document.querySelector("#form");
const textInput = document.querySelector("#location");

form.addEventListener("submit", (event) => {
    getWeatherData(textInput.value);
    event.preventDefault();
})


const setWeatherAPIKey = (apiKey) => {
    weatherAPIKey = apiKey;
}

const getWeatherData = (_location) => {
    const examplecallString = `http://api.weatherapi.com/v1/current.${format}?key=${weatherAPIKey}&q=${_location}&aqi=no`;
    axios.get(examplecallString)
        .then((response) => {
            const weatherSummary = response.data.current.condition.text;
            console.log(response);
            sendMessageToServer(weatherSummary);
            console.log(weatherSummary);
            //TODO: Could hide the form now and show the game?
            //TODO: Could even display the question in Unity
            //then send the data back to JS, 
            //send the API data to weatherAPI.com, 
            //get the JSON, 
            //send the weatherSummary to the game as a string
            //game responds to that and hides the question
            //shows the game
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            if(error.response.status = 400) {
                const errorMessage = "Bad Request: Please input a valid location."
                console.error(errorMessage);
                alert(errorMessage);
            }
        })
        .finally(function () {
            // always executed
        });
}



