const ws = new WebSocket("ws://localhost:6061");

const btn = document.querySelector("#btn");
const message = document.querySelector("#message");
const messageContainer = document.querySelector(".message_container");

btn.addEventListener("click", () => {
	ws.send(message.value);
	messageContainer.innerHTML += `<p class="self">${message.value}</p>`;
	message.value = "";
});

ws.onopen = () => {
	console.log("successfully connected to webSocket server");
};

ws.onmessage = ({ data: msg }) => {
	messageContainer.innerHTML += `<p class="others">${msg}</p>`;
};
