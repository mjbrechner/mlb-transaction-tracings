'use strict';

// Choose to display data for all teams or one specific team
function highlightAll() {
    highlightTeam = `Major League Baseball`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-mlb").classList.add("colors-mlb");
    document.getElementById("header-section").classList.add("colors-mlb");
    closeHamburger();
}

function highlightArizonaDiamondbacks() {
    highlightTeam = `Arizona Diamondbacks`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-diamondbacks").classList.add("colors-diamondbacks");
    document.getElementById("header-section").classList.add("colors-diamondbacks");
    closeHamburger();
}

function highlightAtlantaBraves() {
    highlightTeam = `Atlanta Braves`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-braves").classList.add("colors-braves");
    document.getElementById("header-section").classList.add("colors-braves");
    closeHamburger();
}

function highlightBaltimoreOrioles() {
    highlightTeam = `Baltimore Orioles`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-orioles").classList.add("colors-orioles");
    document.getElementById("header-section").classList.add("colors-orioles");
    closeHamburger();
}

function highlightBostonRedSox() {
    highlightTeam = `Boston Red Sox`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-red-sox").classList.add("colors-red-sox");
    document.getElementById("header-section").classList.add("colors-red-sox");
    closeHamburger();
}

function highlightChicagoCubs() {
    highlightTeam = `Chicago Cubs`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-cubs").classList.add("colors-cubs");
    document.getElementById("header-section").classList.add("colors-cubs");
    closeHamburger();
}

function highlightChicagoWhiteSox() {
    highlightTeam = `Chicago White Sox`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-white-sox").classList.add("colors-white-sox");
    document.getElementById("header-section").classList.add("colors-white-sox");
    closeHamburger();
}

function highlightCincinnatiReds() {
    highlightTeam = `Cincinnati Reds`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-reds").classList.add("colors-reds");
    document.getElementById("header-section").classList.add("colors-reds");
    closeHamburger();
}

function highlightClevelandGuardians() {
    highlightTeam = `Cleveland Guardians`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-guardians").classList.add("colors-guardians");
    document.getElementById("header-section").classList.add("colors-guardians");
    closeHamburger();
}

function highlightColoradoRockies() {
    highlightTeam = `Colorado Rockies`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-rockies").classList.add("colors-rockies");
    document.getElementById("header-section").classList.add("colors-rockies");
    closeHamburger();
}

function highlightDetroitTigers() {
    highlightTeam = `Detroit Tigers`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-tigers").classList.add("colors-tigers");
    document.getElementById("header-section").classList.add("colors-tigers");
    closeHamburger();
}

function highlightHoustonAstros() {
    highlightTeam = `Houston Astros`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-astros").classList.add("colors-astros");
    document.getElementById("header-section").classList.add("colors-astros");
    closeHamburger();
}

function highlightKansasCityRoyals() {
    highlightTeam = `Kansas City Royals`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-royals").classList.add("colors-royals");
    document.getElementById("header-section").classList.add("colors-royals");
    closeHamburger();
}

function highlightLosAngelesAngels() {
    highlightTeam = `Los Angeles Angels`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-angels").classList.add("colors-angels");
    document.getElementById("header-section").classList.add("colors-angels");
    closeHamburger();
}

function highlightLosAngelesDodgers() {
    highlightTeam = `Los Angeles Dodgers`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-dodgers").classList.add("colors-dodgers");
    document.getElementById("header-section").classList.add("colors-dodgers");
    closeHamburger();
}

function highlightMiamiMarlins() {
    highlightTeam = `Miami Marlins`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-marlins").classList.add("colors-marlins");
    document.getElementById("header-section").classList.add("colors-marlins");
    closeHamburger();
}

function highlightMilwaukeeBrewers() {
    highlightTeam = `Milwaukee Brewers`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-brewers").classList.add("colors-brewers");
    document.getElementById("header-section").classList.add("colors-brewers");
    closeHamburger();
}

function highlightMinnesotaTwins() {
    highlightTeam = `Minnesota Twins`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-twins").classList.add("colors-twins");
    document.getElementById("header-section").classList.add("colors-twins");
    closeHamburger();
}

function highlightNewYorkMets() {
    highlightTeam = `New York Mets`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-mets").classList.add("colors-mets");
    document.getElementById("header-section").classList.add("colors-mets");
    closeHamburger();
}

function highlightNewYorkYankees() {
    highlightTeam = `New York Yankees`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-yankees").classList.add("colors-yankees");
    document.getElementById("header-section").classList.add("colors-yankees");
    closeHamburger();
}

function highlightOaklandAthletics() {
    highlightTeam = `Oakland Athletics`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-athletics").classList.add("colors-athletics");
    document.getElementById("header-section").classList.add("colors-athletics");
    closeHamburger();
}

function highlightPhiladelphiaPhillies() {
    highlightTeam = `Philadelphia Phillies`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-phillies").classList.add("colors-phillies");
    document.getElementById("header-section").classList.add("colors-phillies");
    closeHamburger();
}

function highlightPittsburghPirates() {
    highlightTeam = `Pittsburgh Pirates`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-pirates").classList.add("colors-pirates");
    document.getElementById("header-section").classList.add("colors-pirates");
    closeHamburger();
}

function highlightSanDiegoPadres() {
    highlightTeam = `San Diego Padres`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-padres").classList.add("colors-padres");
    document.getElementById("header-section").classList.add("colors-padres");
    closeHamburger();
}

function highlightSanFranciscoGiants() {
    highlightTeam = `San Francisco Giants`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-giants").classList.add("colors-giants");
    document.getElementById("header-section").classList.add("colors-giants");
    closeHamburger();
}

function highlightSeattleMariners() {
    highlightTeam = `Seattle Mariners`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-mariners").classList.add("colors-mariners");
    document.getElementById("header-section").classList.add("colors-mariners");
    closeHamburger();
}

function highlightStLouisCardinals() {
    highlightTeam = `St. Louis Cardinals`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-cardinals").classList.add("colors-cardinals");
    document.getElementById("header-section").classList.add("colors-cardinals");
    closeHamburger();
}

function highlightTampaBayRays() {
    highlightTeam = `Tampa Bay Rays`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-rays").classList.add("colors-rays");
    document.getElementById("header-section").classList.add("colors-rays");
    closeHamburger();
}

function highlightTexasRangers() {
    highlightTeam = `Texas Rangers`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-rangers").classList.add("colors-rangers");
    document.getElementById("header-section").classList.add("colors-rangers");
    closeHamburger();
}

function highlightTorontoBlueJays() {
    highlightTeam = `Toronto Blue Jays`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-blue-jays").classList.add("colors-blue-jays");
    document.getElementById("header-section").classList.add("colors-blue-jays");
    closeHamburger();
}

function highlightWashingtonNationals() {
    highlightTeam = `Washington Nationals`;

    function removeAllPlayerData(listMaker) {
        while (listMaker.firstChild) {
            listMaker.removeChild(listMaker.firstChild);
        }
    }
    listMaker.innerHTML = "";
    getTransactionData();

    // Clear existing menu highlighting and apply new highlighting
    menuReset();
    document.getElementById("menu-nationals").classList.add("colors-nationals");
    document.getElementById("header-section").classList.add("colors-nationals");
    closeHamburger();
}