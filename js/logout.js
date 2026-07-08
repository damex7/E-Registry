document.querySelectorAll(".logout-link").forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        logout();

        window.location.href = "../index.html";

    });

});