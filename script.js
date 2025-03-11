//your JS code here. If required.
function submitForm() {
            let firstName = document.getElementById("first-name").value.trim();
            let lastName = document.getElementById("last-name").value.trim();
            let phone = document.getElementById("phone").value.trim();
            let email = document.getElementById("email").value.trim();

            // Ensure all fields are filled
            if (!firstName || !lastName || !phone || !email) {
                alert("Please fill in all fields before submitting.");
                return;
            }

            // Correct formatting as per requirements
            alert("First Name: " + firstName + " Last Name: " + lastName + " Phone Number: " + phone + " Email ID: " + email);
        }
    </script>