const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

/*-------------------------------------------------------------------------------------*/

// Get Server Status from API
var request = new XMLHttpRequest();

request.open('GET', 'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status', true);

request.onload = function () {
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	// Card
	const card = document.createElement('div');
	card.setAttribute('class', 'card2');

	if (request.status >= 200 && request.status < 400) {
		// Servers UP
		if (data.status == "UP") {
			const header = document.createElement('h1');
			header.textContent = "Status: " + data.status;

			const description = document.createElement('p');
			description.innerHTML = "<b>Uptime: </b>" + data.time.duration.formated;

			container.appendChild(card);
			card.appendChild(header);
			card.appendChild(description);
		}
		// Servers DOWN
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

request.send();