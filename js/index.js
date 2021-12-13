const cardHour = $("section .card h1");
const headerButton = $("header button");
const lastHour = $("section .card p");

const daily = [5, 1, 0, 1, 1, 0];
const lastDay = [7, 2, 1, 1, 3, 1];

const weekly = [32, 10, 4, 4, 5, 2];
const lastWeek = [36, 8, 7, 5, 10, 2];

const monthly = [103, 23, 13, 11, 21, 7];
const lastMonth = [128, 29, 19, 18, 23, 11];

function ShowDaily() {
    headerButton.removeClass("active");
    headerButton.eq(0).addClass("active");
    for (let i = 0; i < cardHour.length; i++) {
        cardHour.eq(i).text(daily[i] + "hrs");
        lastHour.eq(i).text("Last Day - " + lastDay[i] + "hrs");
    }
}

function ShowWeekly() {
    headerButton.removeClass("active");
    headerButton.eq(1).addClass("active");
    for (let i = 0; i < cardHour.length; i++) {
        cardHour.eq(i).text(weekly[i] + "hrs");
        lastHour.eq(i).text("Last Week - " + lastWeek[i] + "hrs");
    }
}

function ShowMonthly() {
    headerButton.removeClass("active");
    headerButton.eq(2).addClass("active");
    for (let i = 0; i < cardHour.length; i++) {
        cardHour.eq(i).text(monthly[i] + "hrs");
        lastHour.eq(i).text("Last Month - " + lastMonth[i] + "hrs");
    }
}

ShowWeekly();