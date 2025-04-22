//your JS code here. If required.
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
	let name = document.getElementById("First Name").value.trim();
	let lname = document.getElementById("Last Name").value.trim();
	let no = document.getElementById("Phone Number").value.trim();
	let email = document.getElementById("Email ID").value.trim();
	
	alert(`First Name: ${name}  Last Name: ${lname}  Phone Number: ${no} Email ID: ${email}`);
});
