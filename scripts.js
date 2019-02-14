// Website root
const app = document.getElementById('root');

// Fortnite logo
const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

// Append to website
app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status', true);

request.onload = function () {
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	// Create card
	const card = document.createElement('div');
	card.setAttribute('class', 'card');

	if (request.status >= 200 && request.status < 400) {
		// Check Fortnite server status
		if (data.status == "DOWN") {
			const header = document.createElement('h1');
			header.textContent = "Status: " + data.status;

			const description = document.createElement('p');
			description.textContent = "Uptime: " + data.time.duration.formated;

			container.appendChild(card);
			card.appendChild(header);
			card.appendChild(description);
		}
		else {
			const header = document.createElement('h2');
			header.textContent = "Status: " + data.status;

			container.appendChild(card);
			card.appendChild(header);
		}
	}
	// If API page doesn't respond, show error
	else {
		const errorMessage = document.createElement('h2');
		errorMessage.textContent = "Please try again later.";

		container.appendChild(card);
		card.appendChild(errorMessage);
	}
}

// Send request
request.send();