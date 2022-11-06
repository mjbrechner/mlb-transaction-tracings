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

let teamColor1 = `white`;
let teamColor2 = `black`;

let highlightTeam = `Major League Baseball`;

// const MLBTeamNames = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago White Sox", "Chicago Cubs", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Yankees", "New York Mets", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"];

const MLBTeams = [

    {
        teamName: "Arizona Diamondbacks",
        teamColors: {
            c1: "#A71930",
            c2: "#E3D4AD"
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
            c1: "#0E3386",
            c2: "#CC3433"
        }
    },
    {
        teamName: "Chicago White Sox",
        teamColors: {
            c1: "#27251F",
            c2: "#C4CED4"
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
            c1: "#00385D",
            c2: "#E50022"
        }
    },
    {
        teamName: "Colorado Rockies",
        teamColors: {
            c1: "#333366",
            c2: "#C4CED4"
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
            c1: "#005A9C",
            c2: "#FFFFFF"
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

    //Restrict to only Giants--START

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
    //Now that we only have Giants in the array, let us then narrow it down to the last 100 transactions
    //Restrict to only Giants--END

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


        // Team colors!

        // if (allPlayers[i].team === "Arizona Diamondbacks") {
        //     teamColor1 = "#A71930";
        //     teamColor2 = "#E3D4AD";
        // } else if (allPlayers[i].team === "Atlanta Braves") {
        //     teamColor1 = "#CE1141";
        //     teamColor2 = "#13274F";
        // } else if (allPlayers[i].team === "Baltimore Orioles") {
        //     teamColor1 = "#DF4601";
        //     teamColor2 = "#000000";
        // } else if (allPlayers[i].team === "Boston Red Sox") {
        //     teamColor1 = "#BD3039";
        //     teamColor2 = "#0C2340";
        // } else if (allPlayers[i].team === "Chicago Cubs") {
        //     teamColor1 = "#0E3386";
        //     teamColor2 = "#CC3433";
        // } else if (allPlayers[i].team === "Chicago White Sox") {
        //     teamColor1 = "#27251F";
        //     teamColor2 = "#C4CED4";
        // } else if (allPlayers[i].team === "Cincinnati Reds") {
        //     teamColor1 = "#C6011F";
        //     teamColor2 = "#000000";
        // } else if (allPlayers[i].team === "Cleveland Guardians") {
        //     teamColor1 = "#00385D";
        //     teamColor2 = "#E50022";
        // } else if (allPlayers[i].team === "Colorado Rockies") {
        //     teamColor1 = "#333366";
        //     teamColor2 = "#C4CED4";
        // } else if (allPlayers[i].team === "Detroit Tigers") {
        //     teamColor1 = "#0C2340";
        //     teamColor2 = "#FA4616";
        // } else if (allPlayers[i].team === "Houston Astros") {
        //     teamColor1 = "#002D62";
        //     teamColor2 = "#EB6E1F";
        // } else if (allPlayers[i].team === "Kansas City Royals") {
        //     teamColor1 = "#004687";
        //     teamColor2 = "#BD9B60";
        // } else if (allPlayers[i].team === "Los Angeles Angels") {
        //     teamColor1 = "#BA0021";
        //     teamColor2 = "#003263";
        // } else if (allPlayers[i].team === "Los Angeles Dodgers") {
        //     teamColor1 = "#005A9C";
        //     teamColor2 = "#FFFFFF";
        // } else if (allPlayers[i].team === "Miami Marlins") {
        //     teamColor1 = "#00A3E0";
        //     teamColor2 = "#EF3340";
        // } else if (allPlayers[i].team === "Milwaukee Brewers") {
        //     teamColor1 = "#12284B";
        //     teamColor2 = "#FFC52F";
        // } else if (allPlayers[i].team === "Minnesota Twins") {
        //     teamColor1 = "#002B5C";
        //     teamColor2 = "#D31145";
        // } else if (allPlayers[i].team === "New York Mets") {
        //     teamColor1 = "#002D72";
        //     teamColor2 = "#FF5910";
        // } else if (allPlayers[i].team === "New York Yankees") {
        //     teamColor1 = "#0C2340";
        //     teamColor2 = "#C4CED3";
        // } else if (allPlayers[i].team === "Oakland Athletics") {
        //     teamColor1 = "#003831";
        //     teamColor2 = "#EFB21E";
        // } else if (allPlayers[i].team === "Philadelphia Phillies") {
        //     teamColor1 = "#E81828";
        //     teamColor2 = "#002D72";
        // } else if (allPlayers[i].team === "Pittsburgh Pirates") {
        //     teamColor1 = "#FDB827";
        //     teamColor2 = "#27251F";
        // } else if (allPlayers[i].team === "San Diego Padres") {
        //     teamColor1 = "#2F241D";
        //     teamColor2 = "#FFC425";
        // } else if (allPlayers[i].team === "San Francisco Giants") {
        //     teamColor1 = "#FD5A1E";
        //     teamColor2 = "#27251F";
        // } else if (allPlayers[i].team === "Seattle Mariners") {
        //     teamColor1 = "#0C2C56";
        //     teamColor2 = "#C4CED4";
        // } else if (allPlayers[i].team === "St. Louis Cardinals") {
        //     teamColor1 = "#C41E3A";
        //     teamColor2 = "#0C2340";
        // } else if (allPlayers[i].team === "Tampa Bay Rays") {
        //     teamColor1 = "#092C5C";
        //     teamColor2 = "#8FBCE6";
        // } else if (allPlayers[i].team === "Texas Rangers") {
        //     teamColor1 = "#003278";
        //     teamColor2 = "#C0111F";
        // } else if (allPlayers[i].team === "Toronto Blue Jays") {
        //     teamColor1 = "#134A8E";
        //     teamColor2 = "#FFFFFF";
        // } else if (allPlayers[i].team === "Washington Nationals") {
        //     teamColor1 = "#AB0003";
        //     teamColor2 = "#FFFFFF";
        // } else {

        // If no MLB team is assigned to the player (as when sent to the Minor Leagues),
        // use color based on the from_team
        // Basically, team takes priority, with from_team used as a backup.

        //     if (allPlayers[i].from_team === "Arizona Diamondbacks") {
        //         teamColor1 = "#A71930";
        //         teamColor2 = "#E3D4AD";
        //     } else if (allPlayers[i].from_team === "Atlanta Braves") {
        //         teamColor1 = "#CE1141";
        //         teamColor2 = "#13274F";
        //     } else if (allPlayers[i].from_team === "Baltimore Orioles") {
        //         teamColor1 = "#DF4601";
        //         teamColor2 = "#000000";
        //     } else if (allPlayers[i].from_team === "Boston Red Sox") {
        //         teamColor1 = "#BD3039";
        //         teamColor2 = "#0C2340";
        //     } else if (allPlayers[i].from_team === "Chicago Cubs") {
        //         teamColor1 = "#0E3386";
        //         teamColor2 = "#CC3433";
        //     } else if (allPlayers[i].from_team === "Chicago White Sox") {
        //         teamColor1 = "#27251F";
        //         teamColor2 = "#C4CED4";
        //     } else if (allPlayers[i].from_team === "Cincinnati Reds") {
        //         teamColor1 = "#C6011F";
        //         teamColor2 = "#000000";
        //     } else if (allPlayers[i].from_team === "Cleveland Guardians") {
        //         teamColor1 = "#00385D";
        //         teamColor2 = "#E50022";
        //     } else if (allPlayers[i].from_team === "Colorado Rockies") {
        //         teamColor1 = "#333366";
        //         teamColor2 = "#C4CED4";
        //     } else if (allPlayers[i].from_team === "Detroit Tigers") {
        //         teamColor1 = "#0C2340";
        //         teamColor2 = "#FA4616";
        //     } else if (allPlayers[i].from_team === "Houston Astros") {
        //         teamColor1 = "#002D62";
        //         teamColor2 = "#EB6E1F";
        //     } else if (allPlayers[i].from_team === "Kansas City Royals") {
        //         teamColor1 = "#004687";
        //         teamColor2 = "#BD9B60";
        //     } else if (allPlayers[i].from_team === "Los Angeles Angels") {
        //         teamColor1 = "#BA0021";
        //         teamColor2 = "#003263";
        //     } else if (allPlayers[i].from_team === "Los Angeles Dodgers") {
        //         teamColor1 = "#005A9C";
        //         teamColor2 = "#FFFFFF";
        //     } else if (allPlayers[i].from_team === "Miami Marlins") {
        //         teamColor1 = "#00A3E0";
        //         teamColor2 = "#EF3340";
        //     } else if (allPlayers[i].from_team === "Milwaukee Brewers") {
        //         teamColor1 = "#12284B";
        //         teamColor2 = "#FFC52F";
        //     } else if (allPlayers[i].from_team === "Minnesota Twins") {
        //         teamColor1 = "#002B5C";
        //         teamColor2 = "#D31145";
        //     } else if (allPlayers[i].from_team === "New York Mets") {
        //         teamColor1 = "#002D72";
        //         teamColor2 = "#FF5910";
        //     } else if (allPlayers[i].from_team === "New York Yankees") {
        //         teamColor1 = "#0C2340";
        //         teamColor2 = "#C4CED3";
        //     } else if (allPlayers[i].from_team === "Oakland Athletics") {
        //         teamColor1 = "#003831";
        //         teamColor2 = "#EFB21E";
        //     } else if (allPlayers[i].from_team === "Philadelphia Phillies") {
        //         teamColor1 = "#E81828";
        //         teamColor2 = "#002D72";
        //     } else if (allPlayers[i].from_team === "Pittsburgh Pirates") {
        //         teamColor1 = "#FDB827";
        //         teamColor2 = "#27251F";
        //     } else if (allPlayers[i].from_team === "San Diego Padres") {
        //         teamColor1 = "#2F241D";
        //         teamColor2 = "#FFC425";
        //     } else if (allPlayers[i].from_team === "San Francisco Giants") {
        //         teamColor1 = "#FD5A1E";
        //         teamColor2 = "#27251F";
        //     } else if (allPlayers[i].from_team === "Seattle Mariners") {
        //         teamColor1 = "#0C2C56";
        //         teamColor2 = "#C4CED4";
        //     } else if (allPlayers[i].from_team === "St. Louis Cardinals") {
        //         teamColor1 = "#C41E3A";
        //         teamColor2 = "#0C2340";
        //     } else if (allPlayers[i].from_team === "Tampa Bay Rays") {
        //         teamColor1 = "#092C5C";
        //         teamColor2 = "#8FBCE6";
        //     } else if (allPlayers[i].from_team === "Texas Rangers") {
        //         teamColor1 = "#003278";
        //         teamColor2 = "#C0111F";
        //     } else if (allPlayers[i].from_team === "Toronto Blue Jays") {
        //         teamColor1 = "#134A8E";
        //         teamColor2 = "#FFFFFF";
        //     } else if (allPlayers[i].from_team === "Washington Nationals") {
        //         teamColor1 = "#AB0003";
        //         teamColor2 = "#FFFFFF";
        //     } else {
        //         teamColor1 = "white";
        //         teamColor2 = "black";
        //     }
        // }



        let infoSection = document.createElement("div");
        infoSection.innerText = transactionDate + `: The ` + allPlayers[i].note;
        infoSection.style.backgroundColor = teamColor1;
        infoSection.style.color = teamColor2;


        // testing MLBteam set

        for (const e of MLBTeams) {
            if (e.teamName === allPlayers[i].team) {
                infoSection.style.backgroundColor = e.teamColors.c1;
                infoSection.style.color = e.teamColors.c2;
                break;
            } else if (e.teamName === allPlayers[i].from_team) {
                infoSection.style.backgroundColor = e.teamColors.c1;
                infoSection.style.color = e.teamColors.c2;
                break;
            } else { // This should never occur but is here  in case of an unexpected error.
                infoSection.style.backgroundColor = "white";
                infoSection.style.color = "black";
            }
        };

        // end testing MLBteam set

        listMaker.appendChild(infoSection);

        infoSection.setAttribute("id", "player-display");


        infoSection.setAttribute("class", `${allPlayers[i].team} ${allPlayers[i].from_team}`);

        //             // only giants
        //               if ((allPlayers[i].team === "San Francisco Giants") || (allPlayers[i].from_team === "San Francisco Giants")) {
        //                 infoSection.style.display = "flex";
        //             } else {
        //                 infoSection.style.display = "none";
        //             }
        // //end only giants




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
}