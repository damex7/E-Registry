// Get the login form
const loginForm = document.getElementById("loginForm");

// Listen for form submission
loginForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get user inputs
    const username = document.getElementById("userName").value.trim();
    const password = document.getElementById("passWord").value.trim();

    // Get the error message element
    const errorMessage = document.getElementById("errorMessage");

    // Clear previous error
    errorMessage.textContent = "";

    // Basic validation
    if (username === "" || password === "") {

        errorMessage.textContent = "Please enter your username and password.";
        return;

    }

    // Authenticate user
    const user = login(username, password);

    // Check if login was successful
    if (user) {

        // Redirect based on role
        switch (user.role) {

            case "admin":
                window.location.href = "admin/admindashboard.html";
                break;

            case "department":
                window.location.href = "user/userdashboard.html.html";
                break;

            case "hod":
                window.location.href = "hod/dashboard.html";
                break;

            default:
                errorMessage.textContent = "User role not recognized.";

        }

    } else {

        errorMessage.textContent = "Invalid username or password.";

    }

});