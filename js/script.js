function showMessage() {
    alert("Hello! Welcome to my portfolio website.");
}

function validateContact() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let msg = document.getElementById("contactMsg");

    if (name === "" || email === "" || message === "") {
        msg.style.color = "red";
        msg.textContent = "Please fill all fields.";
        return false;
    }

    msg.style.color = "green";
    msg.textContent = "Message sent successfully!";

    // clear form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    return false; // prevent page reload
}

/* Login Form */
function validateLogin() {
    let user = document.getElementById("username").value.trim();
    let pass = document.getElementById("password").value.trim();

    if (user === "" || pass === "") {
        alert("Please enter username and password");
        return false;
    }

    alert("Login successful! (Demo)");
    return false; // demo only
}

/* Signup Form */
function validateSignup() {
    let name = document.getElementById("sname").value.trim();
    let email = document.getElementById("semail").value.trim();
    let password = document.getElementById("spassword").value.trim();

    if (name === "" || email === "" || password === "") {
        alert("All fields are required");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Signup successful! (Demo)");
    return false; // demo only
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    // Save theme preference
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

// Apply saved theme on page load
window.onload = function () {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
    }
};

