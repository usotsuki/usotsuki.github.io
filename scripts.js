// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://fortnite-public-api.theapinetwork.com/prod09/status/fortnite_server_status', true);

request.onload = function () {

	// Begin accessing JSON data here
	var data = JSON.parse(this.response);

	if (request.status >= 200 && request.status < 400) {
		/*console.log("Status: " + data.status);
		console.log("Uptime: " + data.time.duration.formated);

		const card = document.createElement('div');
		card.setAttribute('class', 'card');

		const h1 = document.createElement('h1');
		h1.textContent = movie.title;

		const p = document.createElement('p');
		movie.description = movie.description.substring(0, 300);
		p.textContent = `${movie.description}...`;

		container.appendChild(card);
		card.appendChild(h1);
		card.appendChild(p);*/

		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Please try again later.`;
		app.appendChild(errorMessage);
	}
	else {
		const errorMessage = document.createElement('marquee');
		errorMessage.textContent = `Please try again later.`;
		app.appendChild(errorMessage);
	}
}

// Send request
request.send();