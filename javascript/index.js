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
const formattedCurrentMonthStartDate = '' + year + monthString + `01`;

const formattedCurrentDate = '' + year + monthString + dayString;

console.log(`month start: ` + formattedCurrentMonthStartDate + "   This month:" + formattedCurrentDate);

const transactionDateRange = `http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='` + formattedCurrentMonthStartDate + `'&end_date='` + formattedCurrentDate + `'`;



const listMaker = document.getElementById("transaction-list");

let teamColor1 = "white";
let teamColor2 = "black";
// fetch(`http://lookup-service-prod.mlb.com/json/named.transaction_all.bam?sport_code='mlb'&start_date='` + formattedCurrentMonth + `'&end_date='` + formattedCurrentDate + `'`)
// .then((response) => response.json())
// .then((data) => console.log(data));



// async function loadMLBStuff() {
// const response = await fetch(transactionDateRange);
// const info = await response.json();
// console.log(`HELLO`);
// console.log(`Info: ` + info);
// }

// loadMLBStuff();





// const getStuff = fetch(transactionDateRange)
// .then(res => res.json())
// .then(data => console.log(data));

// console.log(`hi   ` + res.json());

const MLBTeamNames = ["Arizona Diamondbacks", "Atlanta Braves", "Baltimore Orioles", "Boston Red Sox", "Chicago White Sox", "Chicago Cubs", "Cincinnati Reds", "Cleveland Guardians", "Colorado Rockies", "Detroit Tigers", "Houston Astros", "Kansas City Royals", "Los Angeles Angels", "Los Angeles Dodgers", "Miami Marlins", "Milwaukee Brewers", "Minnesota Twins", "New York Yankees", "New York Mets", "Oakland Athletics", "Philadelphia Phillies", "Pittsburgh Pirates", "San Diego Padres", "San Francisco Giants", "Seattle Mariners", "St. Louis Cardinals", "Tampa Bay Rays", "Texas Rangers", "Toronto Blue Jays", "Washington Nationals"];



async function getTransactionData() {
    const response = await fetch(transactionDateRange);
    const data = await response.json();
    console.log(data.transaction_all.queryResults.row[0]);
    const allPlayers = data.transaction_all.queryResults.row;
    const name = data.transaction_all.queryResults.row[0].name_display_first_last;
    const team = data.transaction_all.queryResults.row[0].team;
    const note = data.transaction_all.queryResults.row[0].note;
//     console.log(name + ` of the 

// ` + team + `: ` + note);


//     console.log(allPlayers[5]);

    for (let i = (allPlayers.length - 1); i > -1; i--) {

        let transactionDate = allPlayers[i].trans_date.slice(0, 10);
        // console.log(transactionDate + `: ` + allPlayers[i].name_display_first_last + ` of the ` + allPlayers[i].team);

        // Team colors!

        if (allPlayers[i].team === "Arizona Diamondbacks") {
            teamColor1 = "#A71930";
            teamColor2 = "#E3D4AD";
        } else if (allPlayers[i].team === "Atlanta Braves") {
            teamColor1 = "#CE1141";
            teamColor2 = "#13274F";
        } else if (allPlayers[i].team === "Baltimore Orioles") {
            teamColor1 = "#DF4601";
            teamColor2 = "#000000";
        } else if (allPlayers[i].team === "Boston Red Sox") {
            teamColor1 = "#BD3039";
            teamColor2 = "#0C2340";
        } else if (allPlayers[i].team === "Chicago Cubs") {
            teamColor1 = "#0E3386";
            teamColor2 = "#CC3433";
        } else if (allPlayers[i].team === "Chicago White Sox") {
            teamColor1 = "#27251F";
            teamColor2 = "#C4CED4";
        } else if (allPlayers[i].team === "Cincinnati Reds") {
            teamColor1 = "#C6011F";
            teamColor2 = "#000000";
        } else if (allPlayers[i].team === "Cleveland Guardians") {
            teamColor1 = "#00385D";
            teamColor2 = "#E50022";
        } else if (allPlayers[i].team === "Colorado Rockies") {
            teamColor1 = "#333366";
            teamColor2 = "#C4CED4";
        } else if (allPlayers[i].team === "Detroit Tigers") {
            teamColor1 = "#0C2340";
            teamColor2 = "#FA4616";
        } else if (allPlayers[i].team === "Houston Astros") {
            teamColor1 = "#002D62";
            teamColor2 = "#EB6E1F";
        } else if (allPlayers[i].team === "Kansas City Royals") {
            teamColor1 = "#004687";
            teamColor2 = "#BD9B60";
        } else if (allPlayers[i].team === "Los Angeles Angels") {
            teamColor1 = "#003263";
            teamColor2 = "#BA0021";
        } else if (allPlayers[i].team === "Los Angeles Dodgers") {
            teamColor1 = "#005A9C";
            teamColor2 = "#FFFFFF";
        } else if (allPlayers[i].team === "Miami Marlins") {
            teamColor1 = "#00A3E0";
            teamColor2 = "#EF3340";
        } else if (allPlayers[i].team === "Milwaukee Brewers") {
            teamColor1 = "#12284B";
            teamColor2 = "#FFC52F";
        } else if (allPlayers[i].team === "Minnesota Twins") {
            teamColor1 = "#002B5C";
            teamColor2 = "#D31145";
        } else if (allPlayers[i].team === "New York Mets") {
            teamColor1 = "#002D72";
            teamColor2 = "#FF5910";
        } else if (allPlayers[i].team === "New York Yankees") {
            teamColor1 = "#003087";
            teamColor2 = "#C4CED3";
        } else if (allPlayers[i].team === "Oakland Athletics") {
            teamColor1 = "#003831";
            teamColor2 = "#EFB21E";
        } else if (allPlayers[i].team === "Philadelphia Phillies") {
            teamColor1 = "#E81828";
            teamColor2 = "#002D72";
        } else if (allPlayers[i].team === "Pittsburgh Pirates") {
            teamColor1 = "#FDB827";
            teamColor2 = "#27251F";
        } else if (allPlayers[i].team === "San Diego Padres") {
            teamColor1 = "#2F241D";
            teamColor2 = "#FFC425";
        } else if (allPlayers[i].team === "San Francisco Giants") {
            teamColor1 = "#FD5A1E";
            teamColor2 = "#27251F";
        } else if (allPlayers[i].team === "Seattle Mariners") {
            teamColor1 = "#0C2C56";
            teamColor2 = "#C4CED4";
        } else if (allPlayers[i].team === "St. Louis Cardinals") {
            teamColor1 = "#C41E3A";
            teamColor2 = "#0C2340";
        } else if (allPlayers[i].team === "Tampa Bay Rays") {
            teamColor1 = "#092C5C";
            teamColor2 = "#8FBCE6";
        } else if (allPlayers[i].team === "Texas Rangers") {
            teamColor1 = "#003278";
            teamColor2 = "#C0111F";
        } else if (allPlayers[i].team === "Toronto Blue Jays") {
            teamColor1 = "#134A8E";
            teamColor2 = "#FFFFFF";
        } else if (allPlayers[i].team === "Washington Nationals") {
            teamColor1 = "#AB0003";
            teamColor2 = "#FFFFFF";
        } else {

            // If no MLB team is assigned to the player, such as when sent to the MutationObserver, use the color based on the from_team
            if (allPlayers[i].from_team === "Arizona Diamondbacks") {
                teamColor1 = "#A71930";
                teamColor2 = "#E3D4AD";
            } else if (allPlayers[i].from_team === "Atlanta Braves") {
                teamColor1 = "#CE1141";
                teamColor2 = "#13274F";
            } else if (allPlayers[i].from_team === "Baltimore Orioles") {
                teamColor1 = "#DF4601";
                teamColor2 = "#000000";
            } else if (allPlayers[i].from_team === "Boston Red Sox") {
                teamColor1 = "#BD3039";
                teamColor2 = "#0C2340";
            } else if (allPlayers[i].from_team === "Chicago Cubs") {
                teamColor1 = "#0E3386";
                teamColor2 = "#CC3433";
            } else if (allPlayers[i].from_team === "Chicago White Sox") {
                teamColor1 = "#27251F";
                teamColor2 = "#C4CED4";
            } else if (allPlayers[i].from_team === "Cincinnati Reds") {
                teamColor1 = "#C6011F";
                teamColor2 = "#000000";
            } else if (allPlayers[i].from_team === "Cleveland Guardians") {
                teamColor1 = "#00385D";
                teamColor2 = "#E50022";
            } else if (allPlayers[i].from_team === "Colorado Rockies") {
                teamColor1 = "#333366";
                teamColor2 = "#C4CED4";
            } else if (allPlayers[i].from_team === "Detroit Tigers") {
                teamColor1 = "#0C2340";
                teamColor2 = "#FA4616";
            } else if (allPlayers[i].from_team === "Houston Astros") {
                teamColor1 = "#002D62";
                teamColor2 = "#EB6E1F";
            } else if (allPlayers[i].from_team === "Kansas City Royals") {
                teamColor1 = "#004687";
                teamColor2 = "#BD9B60";
            } else if (allPlayers[i].from_team === "Los Angeles Angels") {
                teamColor1 = "#003263";
                teamColor2 = "#BA0021";
            } else if (allPlayers[i].from_team === "Los Angeles Dodgers") {
                teamColor1 = "#005A9C";
                teamColor2 = "#FFFFFF";
            } else if (allPlayers[i].from_team === "Miami Marlins") {
                teamColor1 = "#00A3E0";
                teamColor2 = "#EF3340";
            } else if (allPlayers[i].from_team === "Milwaukee Brewers") {
                teamColor1 = "#12284B";
                teamColor2 = "#FFC52F";
            } else if (allPlayers[i].from_team === "Minnesota Twins") {
                teamColor1 = "#002B5C";
                teamColor2 = "#D31145";
            } else if (allPlayers[i].from_team === "New York Mets") {
                teamColor1 = "#002D72";
                teamColor2 = "#FF5910";
            } else if (allPlayers[i].from_team === "New York Yankees") {
                teamColor1 = "#003087";
                teamColor2 = "#C4CED3";
            } else if (allPlayers[i].from_team === "Oakland Athletics") {
                teamColor1 = "#003831";
                teamColor2 = "#EFB21E";
            } else if (allPlayers[i].from_team === "Philadelphia Phillies") {
                teamColor1 = "#E81828";
                teamColor2 = "#002D72";
            } else if (allPlayers[i].from_team === "Pittsburgh Pirates") {
                teamColor1 = "#FDB827";
                teamColor2 = "#27251F";
            } else if (allPlayers[i].from_team === "San Diego Padres") {
                teamColor1 = "#2F241D";
                teamColor2 = "#FFC425";
            } else if (allPlayers[i].from_team === "San Francisco Giants") {
                teamColor1 = "#FD5A1E";
                teamColor2 = "#27251F";
            } else if (allPlayers[i].from_team === "Seattle Mariners") {
                teamColor1 = "#0C2C56";
                teamColor2 = "#C4CED4";
            } else if (allPlayers[i].from_team === "St. Louis Cardinals") {
                teamColor1 = "#C41E3A";
                teamColor2 = "#0C2340";
            } else if (allPlayers[i].from_team === "Tampa Bay Rays") {
                teamColor1 = "#092C5C";
                teamColor2 = "#8FBCE6";
            } else if (allPlayers[i].from_team === "Texas Rangers") {
                teamColor1 = "#003278";
                teamColor2 = "#C0111F";
            } else if (allPlayers[i].from_team === "Toronto Blue Jays") {
                teamColor1 = "#134A8E";
                teamColor2 = "#FFFFFF";
            } else if (allPlayers[i].from_team === "Washington Nationals") {
                teamColor1 = "#AB0003";
                teamColor2 = "#FFFFFF";
            } else {
                teamColor1 = "white";
                teamColor2 = "black";
            }
        }



        let infoSection = document.createElement("div");
        infoSection.innerText = transactionDate + `: The ` + allPlayers[i].note;
        infoSection.style.backgroundColor = teamColor1;
        infoSection.style.color = teamColor2;
        listMaker.appendChild(infoSection);

        infoSection.setAttribute("id", "player-display");



infoSection.setAttribute("class", `${allPlayers[i].team} ${allPlayers[i].from_team}`);
console.log(infoSection.className);

    }



}


getTransactionData();