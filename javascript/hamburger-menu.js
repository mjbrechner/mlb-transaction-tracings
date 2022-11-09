'use strict';

// Open and close hamburger menu
function toggleHamburger() {
    let e = document.getElementById("menu-left");
    if (e.style.display === "block") {
        e.style.display = "none";
    } else {
        e.style.display = "block"
    }

    let e2 = document.getElementById("menu-right");
    if (e2.style.display === "block") {
        e2.style.display = "none";
    } else {
        e2.style.display = "block"
    }
};

// Only display hamburger menu in mobile mode
window.addEventListener('resize', (event) => {
    if (true) {
        let e = window.innerWidth;
        if (e >= 768) {
            document.getElementById("menu-left").style.display = "block";
            document.getElementById("menu-right").style.display = "block";
        } else {
            document.getElementById("menu-left").style.display = "none";
            document.getElementById("menu-right").style.display = "none";
        }
    }
});

// Close hamburger menu if in mobile mode
function closeHamburger() {
    let e = window.innerWidth;
    if (e >= 768) {
        // Do nothing
    } else {
        // Close hamburger menu
        document.getElementById("menu-left").style.display = "none";
        document.getElementById("menu-right").style.display = "none";
    }



};