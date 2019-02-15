// Website root
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// Create status button
const status = document.getElementById('status');
status.setAttribute('class', 'card');

const header = document.createElement('h3');
header.textContent = "Status";

container.appendChild(status);
status.appendChild(header);