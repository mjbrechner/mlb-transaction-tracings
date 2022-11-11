'use strict';

function menuReset() {

    //Scroll to the top of the document
    window.scrollTo(0, 0);

    // Clear existing menu selections of color highlighting
    document.getElementById("menu-mlb").classList.remove("colors-mlb");
    document.getElementById("menu-diamondbacks").classList.remove("colors-diamondbacks");
    document.getElementById("menu-braves").classList.remove("colors-braves");
    document.getElementById("menu-orioles").classList.remove("colors-orioles");
    document.getElementById("menu-red-sox").classList.remove("colors-red-sox");
    document.getElementById("menu-cubs").classList.remove("colors-cubs");
    document.getElementById("menu-white-sox").classList.remove("colors-white-sox");
    document.getElementById("menu-reds").classList.remove("colors-reds");
    document.getElementById("menu-guardians").classList.remove("colors-guardians");
    document.getElementById("menu-rockies").classList.remove("colors-rockies");
    document.getElementById("menu-tigers").classList.remove("colors-tigers");
    document.getElementById("menu-astros").classList.remove("colors-astros");
    document.getElementById("menu-royals").classList.remove("colors-royals");
    document.getElementById("menu-angels").classList.remove("colors-angels");
    document.getElementById("menu-dodgers").classList.remove("colors-dodgers");
    document.getElementById("menu-marlins").classList.remove("colors-marlins");
    document.getElementById("menu-brewers").classList.remove("colors-brewers");
    document.getElementById("menu-twins").classList.remove("colors-twins");
    document.getElementById("menu-mets").classList.remove("colors-mets");
    document.getElementById("menu-yankees").classList.remove("colors-yankees");
    document.getElementById("menu-athletics").classList.remove("colors-athletics");
    document.getElementById("menu-phillies").classList.remove("colors-phillies");
    document.getElementById("menu-pirates").classList.remove("colors-pirates");
    document.getElementById("menu-padres").classList.remove("colors-padres");
    document.getElementById("menu-giants").classList.remove("colors-giants");
    document.getElementById("menu-mariners").classList.remove("colors-mariners");
    document.getElementById("menu-cardinals").classList.remove("colors-cardinals");
    document.getElementById("menu-rays").classList.remove("colors-rays");
    document.getElementById("menu-rangers").classList.remove("colors-rangers");
    document.getElementById("menu-blue-jays").classList.remove("colors-blue-jays");
    document.getElementById("menu-nationals").classList.remove("colors-nationals");

    document.getElementById("header-section").classList.remove("colors-mlb");
    document.getElementById("header-section").classList.remove("colors-diamondbacks");
    document.getElementById("header-section").classList.remove("colors-braves");
    document.getElementById("header-section").classList.remove("colors-orioles");
    document.getElementById("header-section").classList.remove("colors-red-sox");
    document.getElementById("header-section").classList.remove("colors-cubs");
    document.getElementById("header-section").classList.remove("colors-white-sox");
    document.getElementById("header-section").classList.remove("colors-reds");
    document.getElementById("header-section").classList.remove("colors-guardians");
    document.getElementById("header-section").classList.remove("colors-rockies");
    document.getElementById("header-section").classList.remove("colors-tigers");
    document.getElementById("header-section").classList.remove("colors-astros");
    document.getElementById("header-section").classList.remove("colors-royals");
    document.getElementById("header-section").classList.remove("colors-angels");
    document.getElementById("header-section").classList.remove("colors-dodgers");
    document.getElementById("header-section").classList.remove("colors-marlins");
    document.getElementById("header-section").classList.remove("colors-brewers");
    document.getElementById("header-section").classList.remove("colors-twins");
    document.getElementById("header-section").classList.remove("colors-mets");
    document.getElementById("header-section").classList.remove("colors-yankees");
    document.getElementById("header-section").classList.remove("colors-athletics");
    document.getElementById("header-section").classList.remove("colors-phillies");
    document.getElementById("header-section").classList.remove("colors-pirates");
    document.getElementById("header-section").classList.remove("colors-padres");
    document.getElementById("header-section").classList.remove("colors-giants");
    document.getElementById("header-section").classList.remove("colors-mariners");
    document.getElementById("header-section").classList.remove("colors-cardinals");
    document.getElementById("header-section").classList.remove("colors-rays");
    document.getElementById("header-section").classList.remove("colors-rangers");
    document.getElementById("header-section").classList.remove("colors-blue-jays");
    document.getElementById("header-section").classList.remove("colors-nationals");

    // Hide footer to prevent it flashing up when transaction-list is re-populating with data
    document.getElementById("footer-section").style.visibility = "hidden";

    //Unhide header section, in case it had been hidden due to the opening of the hamburger menu
    document.getElementById("header-section").style.display = "block";
}