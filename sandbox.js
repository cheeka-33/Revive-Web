function colorBlack() {
    var body = document.body;
    var navItems = document.getElementById("navItems");
    var h1 =document.querySelectorAll("h1");

    body.classList.toggle("dark-theme");

    if (document.body.classList.contains("dark-theme")) {
        navItems.style.color = "white"; 
        h1.forEach(function(h1) {
            h1.style.color = "white";
        });
    } else {
        navItems.style.color = "";
        h1.forEach(function(h1) {
            h1.style.color = "hsl(243, 87%, 12%)";
        });
    }


    // h1.forEach(function(h1) {
    //     h1.style.color = "white";
    // });

}

function toggleTheme() {
    var body = document.body;
    var navbar = document.getElementById("navbar");
    var navItems = document.getElementById("navItems");
    var h1 = document.querySelectorAll("h1");


    body.classList.toggle("dark-theme");
    body.classList.toggle("light-theme");

    if (body.classList.contains("dark-theme")) {
        navItems.style.color = "white"; 

        h1.forEach(function(h1) {
            h1.style.color = "white";
        });
    } else {
        if (body.classList.contains("light-theme")) {
            navItems.style.color = "";
            h1.forEach(function(h1) {
                h1.style.color = "hsl(243, 87%, 12%)";
            });
        }
    }
}

function validateEmail() {
    var emailInput = document.getElementById("email");
    var emailWarning = document.getElementById("email-warning");

    if(emailInput.value.trim() === "") {
        emailWarning.style.display = "block";
    } else {
        emailWarning.style.display = "none";
    }
}

document.getElementById("email").addEventListener("input", validateEmail);

function validateMail() {
    var mailInput = document.getElementById("mail");
    var mailWarn = document.getElementById("mail-warn");

    if(mailInput.value.trim() === "") {
        mailWarn.style.display = "block";
    }
    else {
        mailWarn.style.display = "none";
    }
}

document.getElementById("mail").addEventListener("input", validateMail)