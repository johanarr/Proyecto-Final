document.addEventListener("DOMContentLoaded", function() {
    const signupButton = document.getElementById("signup");
    const signinButton = document.getElementById("signin");
    const container = document.querySelector(".container");

    signupButton.addEventListener("click", () => {
        container.classList.add("right-panel-active");
    });

    signinButton.addEventListener("click", () => {
        container.classList.remove("right-panel-active");
    });
});
