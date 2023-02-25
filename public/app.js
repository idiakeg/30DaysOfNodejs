// obtain the desired fields
const userName = document.querySelector("#name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const phone = document.getElementById("phone");
const form = document.querySelector("#form");

window.onunload = (e) => {
	userName.value = "";
	email.value = "";
	password.value = "";
	phone.value = "";
};
