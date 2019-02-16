// Root
const app = document.getElementById('root');

// Container
const container = document.createElement('div');
container.setAttribute('class', 'container');

// Status Button
const status = document.getElementById('status');
status.setAttribute('class', 'card');
// Status Header
const header = document.createElement('h3');
header.textContent = "Server Status";
// Status Function
status.onclick = function() {
	location.href = "status.html";
};

// Stat Tracker Header
const tracker = document.getElementById('tracker');
tracker.setAttribute('class', 'card2');
const stheader = document.createElement('h4');
stheader.textContent = "Enter Player Name";

// Player Stats Card
const stats = document.getElementById('stats');
stats.setAttribute('class', 'card2');
const sheader = document.createElement('h1');
sheader.textContent = "Player";
const sdesc = document.createElement('p');
sdesc.innerHTML = "<b>Not available.</b>";

// Append Elements
app.appendChild(container);

container.appendChild(status);
status.appendChild(header);

container.appendChild(tracker);
tracker.appendChild(stheader);

container.appendChild(stats);
stats.appendChild(sheader);
stats.appendChild(sdesc);

// Hide Player Stats
stats.style.display = 'none';

/*-------------------------------------------------------------------------------------*/

// Player Platform
let platform = "PC";

// Search Field
const searchBox = document.getElementById('searchText');
searchBox.style.height="35px";
searchBox.style.fontSize="14pt";

// Search Button
const searchButton = document.getElementById('searchButton');
searchButton.style.width="100px";
searchButton.style.height="35px";
searchButton.style.fontSize="14pt";
searchButton.onclick = function() {
	// Search Box Input
	var userInput = searchBox.value;
	var userName = encodeURIComponent(userInput);
	// Call API Functions
	getUID(userName);
}

// Get Player UID from API
function getUID(userName) {
	var request = new XMLHttpRequest();
	var userAPI = "https://fortnite-public-api.theapinetwork.com/prod09/users/id?username=" + userName;

	request.onreadystatechange = () => {
		if (request.readyState == 4 && request.status == 200) {
			// Parse Data from API
			let data = JSON.parse(request.responseText);
			// Assign User & UID
			var user = data.username;
			var userID = data.uid;
			// If UID is UNDEFINED
			if (typeof userID == 'undefined' || userID == "") {
				// Show "Enter Player Name" Card
				sheader.textContent = "Player does not exist.";
				sdesc.innerHTML = "<b>Not available.</b>";
				stats.style.display = 'block';
			}
			// UID is VALID
			else {
				// Username & Platform on Header
				sheader.textContent = user + " - " + platform;
				// Get Player Stats
				getStats(userID);
			}
		}
	}

	request.open('GET', userAPI, true);
	request.send();
}

// Get Player Stats from API
function getStats(userID) {
	var request = new XMLHttpRequest();
	var statAPI = "https://fortnite-public-api.theapinetwork.com/prod09/users/public/br_stats?user_id=" + userID + "&platform=" + platform;

	request.onreadystatechange = () => {
		if (request.readyState == 4 && request.status == 200) {
			let data = JSON.parse(request.responseText);
			// Display Stats in description
			if (data.totals.matchesplayed == 0) {
				sdesc.innerHTML = "<b>No games played.</b>";
			}
			else {
				sdesc.innerHTML = "<b>Wins: </b>" + data.totals.wins + "<br />" +
								  "<b>Kills: </b>" + data.totals.kills + "<br />" +
								  "<b>K/D: </b>" + data.totals.kd + "<br />" +
								  "<b>Matches: </b>" + data.totals.matchesplayed + "<br />" +
								  "<b>Winrate: </b>" + data.totals.winrate + "%" + "<br />";
			}
			// Show Player Stats
			tracker.style.display = 'none';
			stats.style.display = 'block';
		}
	}

	request.open('GET', statAPI, true);
	request.send();
}