const webSocket = new WebSocket("ws://localhost:9000/Weather");


webSocket.onopen = (event) => {
    console.log("Web Socket Connected!");
};

webSocket.onmessage = (event) => {
    console.log("Message received: " + event.data);
    try {
        const json = JSON.parse(event.data);
        console.log(json);
        setWeatherAPIKey(json.Weather_API_Key);
    }
    catch (e) {

    }
}

webSocket.onclose = () => {
    console.log("Web Socket Disconnected");
}

webSocket.onerror = () => {
    console.log("Error");
}

const sendMessageToServer = (message) => {
    webSocket.send(message.toString());
}