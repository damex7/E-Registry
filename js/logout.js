const logoutLink = document.getElementById("logoutLink");

if (logoutLink) {

    logoutLink.addEventListener("click", function (event) {

        // Prevent the link from navigating
        event.preventDefault();

        const confirmLogout = confirm("Are you sure you want to logout?");

        if (confirmLogout) {

            logout();

            window.location.href = "index.html";

        }

    });

}