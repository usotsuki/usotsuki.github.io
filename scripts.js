// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status', true);

request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		console.log("Status: " + data.status);
		console.log(data.message);
	}
	else {
		console.log('error');
	}
}

// Send request
request.send();