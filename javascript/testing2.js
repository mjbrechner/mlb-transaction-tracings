'use strict';

// Get information on current date

const today = new(Date);
const day = today.getDate();
const dayString = day.toString().padStart(2, 0);
const month = today.getMonth() + 1;
const monthString = month.toString().padStart(2, 0);
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const currentMonthName = monthNames[today.getMonth()];
const year = today.getFullYear();
const lastYear = today.getFullYear() - 1;
const formattedLastYearDate = '' + lastYear + monthString + dayString;

const formattedCurrentDate = '' + year + monthString + dayString;


const transactionDateRange = `https://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='` + formattedLastYearDate + `'&end_date='` + formattedCurrentDate + `'`;


const listMaker = document.getElementById("transaction-list");

let teamColor1 = "#FAF1E6";
let teamColor2 = "#413d3d";

let highlightTeam = `Major League Baseball`;

// Set default MLB color scheme elements--START
document.getElementById("menu-mlb").classList.add("colors-mlb");
document.getElementById("page-body").classList.add("colors-mlb");
// Set default MLB color scheme elements--END

async function getTransactionData() {
    const response = await fetch(transactionDateRange);
    const data = await response.json();
    let allPlayers = data.transaction_all.queryResults.row;

    // Restrict to only highlighted team -- START

    if (highlightTeam !== `Major League Baseball`) {
        for (let i = (allPlayers.length - 1); i > -1; i--) {

            if ((allPlayers[i].team === highlightTeam) || (allPlayers[i].from_team === highlightTeam)) {
                //great, keep it
            } else {
                //remove player entry from array
                allPlayers.splice(i, 1);
            }
        }
    }

    // Restrict to only highlighted team -- END

    // Narrow down list to the last 100 transactions
    allPlayers = allPlayers.slice(-100);


    const name = data.transaction_all.queryResults.row[0].name_display_first_last;
    const team = data.transaction_all.queryResults.row[0].team;
    const note = data.transaction_all.queryResults.row[0].note;

    // Getting and displaying the date of the first transaction on the list--Start
    const transactionDateYear = allPlayers[0].trans_date.slice(0, 4);
    const transactionDateMonth = allPlayers[0].trans_date.slice(5, 7);
    const transactionDateMonthName = monthNames[transactionDateMonth - 1];
    const daysOfTheMonth = ["1st", "2nd", "3rd", "4th", "5th", "6th", "7th", "8th", "9th", "10th", "11th", "12th", "13th", "14th", "15th", "16th", "17th", "18th", "19th", "20th", "21st", "22nd", "23rd", "24th", "25th", "26th", "27th", "28th", "29th", "30th", "31st"];
    let transactionDateDay = allPlayers[0].trans_date.slice(8, 10);
    transactionDateDay = parseInt(transactionDateDay);
    transactionDateDay = daysOfTheMonth[(transactionDateDay - 1)];


    if (highlightTeam === `Major League Baseball`) {
        document.getElementById("headline-dates").innerText = `The 100 most recent ${highlightTeam} transactions since ${transactionDateMonthName} ${transactionDateDay}, ${transactionDateYear}.`;
    } else {
        document.getElementById("headline-dates").innerText = `The 100 most recent transactions for the ${highlightTeam} since ${transactionDateMonthName} ${transactionDateDay}, ${transactionDateYear}.`;
    }

    // Getting and displaying the date of the first transaction on the list--End

    for (let i = (allPlayers.length - 1); i > -1; i--) {
        const transactionDate = allPlayers[i].trans_date.slice(0, 10);

        let infoSection = document.createElement("div");
        infoSection.innerText = transactionDate + `: The ` + allPlayers[i].note;
        infoSection.style.backgroundColor = teamColor1;
        infoSection.style.color = teamColor2;

        listMaker.appendChild(infoSection);
        infoSection.setAttribute("id", "player-display");
        infoSection.setAttribute("class", `${allPlayers[i].team} ${allPlayers[i].from_team}`);
    }

    // Reveal footer, which had been hidden while transaction-list data re-populates with data
    document.getElementById("footer-section").style.visibility = "visible";
}

// Run the main function to obtain and populate the data
getTransactionData();

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
    document.getElementById("page-body").classList.add("colors-mlb");
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
    document.getElementById("page-body").classList.add("colors-diamondbacks");
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
    document.getElementById("page-body").classList.add("colors-braves");
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
    document.getElementById("page-body").classList.add("colors-orioles");
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
    document.getElementById("page-body").classList.add("colors-red-sox");
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
    document.getElementById("page-body").classList.add("colors-cubs");
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
    document.getElementById("page-body").classList.add("colors-white-sox");
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
    document.getElementById("page-body").classList.add("colors-reds");
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
    document.getElementById("page-body").classList.add("colors-guardians");
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
    document.getElementById("page-body").classList.add("colors-rockies");
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
    document.getElementById("page-body").classList.add("colors-tigers");
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
    document.getElementById("page-body").classList.add("colors-astros");
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
    document.getElementById("page-body").classList.add("colors-royals");
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
    document.getElementById("page-body").classList.add("colors-angels");
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
    document.getElementById("page-body").classList.add("colors-dodgers");
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
    document.getElementById("page-body").classList.add("colors-marlins");
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
    document.getElementById("page-body").classList.add("colors-brewers");
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
    document.getElementById("page-body").classList.add("colors-twins");
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
    document.getElementById("page-body").classList.add("colors-mets");
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
    document.getElementById("page-body").classList.add("colors-yankees");
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
    document.getElementById("page-body").classList.add("colors-athletics");
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
    document.getElementById("page-body").classList.add("colors-phillies");
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
    document.getElementById("page-body").classList.add("colors-pirates");
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
    document.getElementById("page-body").classList.add("colors-padres");
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
    document.getElementById("page-body").classList.add("colors-giants");
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
    document.getElementById("page-body").classList.add("colors-mariners");
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
    document.getElementById("page-body").classList.add("colors-cardinals");
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
    document.getElementById("page-body").classList.add("colors-rays");
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
    document.getElementById("page-body").classList.add("colors-rangers");
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
    document.getElementById("page-body").classList.add("colors-blue-jays");
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
    document.getElementById("page-body").classList.add("colors-nationals");
    closeHamburger();
}