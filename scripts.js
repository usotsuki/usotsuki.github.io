const app = document.getElementById('root');

const logo = document.createElement('img');
logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(logo);
app.appendChild(container);

// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status', true);

request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const header = document.createElement('h1');
		header.textContent = "Status: " + data.status;

		const description = document.createElement('p');
		description.textContent = "Uptime: " + data.time.duration.formated;
		//uptime = "Uptime: " + data.time.duration.formated.substring(0, 100);
		//p.textContent = `${uptime}...`;

		container.appendChild(card);
		card.appendChild(header);
		card.appendChild(description);
	}
	else {
		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const errorMessage = document.createElement('h1');
		errorMessage.textContent = "Please try again later.";

		container.appendChild(card);
		card.appendChild(errorMessage);
	}
}

// Send request
request.send();