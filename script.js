document.getElementById("submitButton").addEventListener("click", function() {
    // the values entered by the user
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;

    // Combine the first name and last name
    var fullName = firstName + " " + lastName;

    // Display the full name on the page
    document.getElementById("fullName").textContent = "Full Name: " + fullName;
});