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

// const MLBTeamNames = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago White Sox", "Chicago Cubs", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Yankees", "New York Mets", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"];

const MLBTeams = [

    {
        teamName: "Arizona Diamondbacks",
        teamColors: {
            c1: "#E3D4AD",
            c2: "#A71930"
        }
    },

    {
        teamName: "Atlanta Braves",
        teamColors: {
            c1: "#CE1141",
            c2: "#13274F"
        }
    },

    {
        teamName: "Baltimore Orioles",
        teamColors: {
            c1: "#DF4601",
            c2: "#000000"
        }
    },
    {
        teamName: "Boston Red Sox",
        teamColors: {
            c1: "#BD3039",
            c2: "#0C2340"
        }
    },
    {
        teamName: "Chicago Cubs",
        teamColors: {
            c1: "#CC3433",
            c2: "#0E3386"
        }
    },
    {
        teamName: "Chicago White Sox",
        teamColors: {
            c1: "#C4CED4",
            c2: "#27251F"
        }
    },
    {
        teamName: "Cincinnati Reds",
        teamColors: {
            c1: "#C6011F",
            c2: "#000000"
        }
    },
    {
        teamName: "Cleveland Guardians",
        teamColors: {
            c1: "#E50022",
            c2: "#00385D"
        }
    },
    {
        teamName: "Colorado Rockies",
        teamColors: {
            c1: "#C4CED4",
            c2: "#333366"
        }
    },
    {
        teamName: "Detroit Tigers",
        teamColors: {
            c1: "#0C2340",
            c2: "#FA4616"
        }
    },
    {
        teamName: "Houston Astros",
        teamColors: {
            c1: "#002D62",
            c2: "#EB6E1F"
        }
    },
    {
        teamName: "Kansas City Royals",
        teamColors: {
            c1: "#004687",
            c2: "#BD9B60"
        }
    },
    {
        teamName: "Los Angeles Angels",
        teamColors: {
            c1: "#BA0021",
            c2: "#003263"
        }
    },
    {
        teamName: "Los Angeles Dodgers",
        teamColors: {
            c1: "#FFFFFF",
            c2: "#005A9C"
        }
    },
    {
        teamName: "Miami Marlins",
        teamColors: {
            c1: "#00A3E0",
            c2: "#EF3340"
        }
    },
    {
        teamName: "Milwaukee Brewers",
        teamColors: {
            c1: "#12284B",
            c2: "#FFC52F"
        }
    },
    {
        teamName: "Minnesota Twins",
        teamColors: {
            c1: "#002B5C",
            c2: "#D31145"
        }
    },
    {
        teamName: "New York Mets",
        teamColors: {
            c1: "#002D72",
            c2: "#FF5910"
        }
    },
    {
        teamName: "New York Yankees",
        teamColors: {
            c1: "#0C2340",
            c2: "#C4CED3"
        }
    },
    {
        teamName: "Oakland Athletics",
        teamColors: {
            c1: "#003831",
            c2: "#EFB21E"
        }
    },
    {
        teamName: "Philadelphia Phillies",
        teamColors: {
            c1: "#E81828",
            c2: "#002D72"
        }
    },
    {
        teamName: "Pittsburgh Pirates",
        teamColors: {
            c1: "#FDB827",
            c2: "#27251F"
        }
    },
    {
        teamName: "San Diego Padres",
        teamColors: {
            c1: "#2F241D",
            c2: "#FFC425"
        }
    },
    {
        teamName: "San Francisco Giants",
        teamColors: {
            c1: "#FD5A1E",
            c2: "#27251F"
        }
    },
    {
        teamName: "Seattle Mariners",
        teamColors: {
            c1: "#0C2C56",
            c2: "#C4CED4"
        }
    },
    {
        teamName: "St. Louis Cardinals",
        teamColors: {
            c1: "#C41E3A",
            c2: "#0C2340"
        }
    },
    {
        teamName: "Tampa Bay Rays",
        teamColors: {
            c1: "#092C5C",
            c2: "#8FBCE6"
        }
    },
    {
        teamName: "Texas Rangers",
        teamColors: {
            c1: "#003278",
            c2: "#C0111F"
        }
    },
    {
        teamName: "Toronto Blue Jays",
        teamColors: {
            c1: "#134A8E",
            c2: "#FFFFFF"
        }
    },
    {
        teamName: "Washington Nationals",
        teamColors: {
            c1: "#AB0003",
            c2: "#FFFFFF"
        }
    }

];

console.log(MLBTeams);

async function getTransactionData() {
    const response = await fetch(transactionDateRange);
    const data = await response.json();
    console.log(data.transaction_all.queryResults.row[0]);
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


        // testing MLBteam set

        // for (const e of MLBTeams) {
        //     if (e.teamName === allPlayers[i].team) {
        //         infoSection.style.color = e.teamColors.c2;
        //         infoSection.style.border = `3px solid` + e.teamColors.c1;
        //         break;
        //     } else if (e.teamName === allPlayers[i].from_team) {
        //         infoSection.style.color = e.teamColors.c2;
        //         infoSection.style.border = `1px solid` + e.teamColors.c1;
        //         break;
        //     } else {
        //         infoSection.style.backgroundColor = "#FAF1E6";
        //         infoSection.style.color = "#413d3d";
        //     }
        // };

        // end testing MLBteam set

        listMaker.appendChild(infoSection);
        infoSection.setAttribute("id", "player-display");
        infoSection.setAttribute("class", `${allPlayers[i].team} ${allPlayers[i].from_team}`);
    }
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
}