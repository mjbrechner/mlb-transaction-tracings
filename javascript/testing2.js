'use strict';

// Set defaults and MLB color scheme elements--START
const listMaker = document.getElementById("transaction-list");
let highlightTeam = `Major League Baseball`;

let teamColor1 = "#FAF1E6";
let teamColor2 = "#413d3d";
document.getElementById("menu-mlb").classList.add("colors-mlb");
document.getElementById("page-body").classList.add("colors-mlb");
// Set defaults and MLB color scheme elements--END

// Main function to obtain and process API data
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

    // Grab name, team, and transaction information
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

    // Create and populate the main list of transactions
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