document.addEventListener("DOMContentLoaded", function () {
    const error = new URLSearchParams(window.location.search).get('error');
    if (error) {
        alert("Invalid username or password!");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);

    if (params.has('error')) {
        alert(params.get('error'));
    }

    if (params.has('success')) {
        alert(params.get('success'));
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");

    // Add interactive animation on hover
    container.addEventListener("mouseover", () => {
        container.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.2)";
    });

    container.addEventListener("mouseleave", () => {
        container.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    });
});
