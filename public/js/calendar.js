export const d = new Date();
import { table } from './table.js';
import { clearTable } from "./prevNext.js";



export let year = d.getFullYear();
// console.log(year);

export function calcdan() {
    let dan = d.getDay();
    if (dan === 0) {
        return dani[6];
    } else {
        return dani[dan - 1];
    }
};

// testing another year
// d.setFullYear(2024);
// year = d.getFullYear();
// console.log(year);

function leapYear() {
    if ((year - 2020) % 4 === 0) {
        return 29;
    } else return 28;
};

const mjeseci = [{
        name: "Siječanj",
        days: 31
    },
    {
        name: "Veljača",
        days: leapYear()
    },
    {
        name: "Ožujak",
        days: 31
    },
    {
        name: "Travanj",
        days: 30
    },
    {
        name: "Svibanj",
        days: 31
    },
    {
        name: "Lipanj",
        days: 30
    },
    {
        name: "Srpanj",
        days: 31
    },
    {
        name: "Kolovoz",
        days: 31
    },
    {
        name: "Rujan",
        days: 30
    },
    {
        name: "Listopad",
        days: 31
    },
    {
        name: "Studeni",
        days: 30
    },
    {
        name: "Prosinac",
        days: 31
    },
];

const dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];


export let mjesec = mjeseci[d.getMonth()];

// console.log(mjesec);

// testing another month

// mjesec = mjeseci[d.getMonth()]



table();



const drawRect = {
    radnoVrijeme: {
        start: 9,
        end: 20
    },
    totalVrijeme: function() {
        return this.radnoVrijeme.end - this.radnoVrijeme.start;
    },
    parentEl: "ttermin1_1_2022",
    cliWidth: function() {
        return document.getElementById(this.parentEl).clientWidth;
    },
    sat: function() {
        return this.cliWidth() / this.totalVrijeme();
    },
    radnaPotreba: {
        start: null,
        end: null
    },
    totalRad: function() {
        return this.radnaPotreba.end - this.radnaPotreba.start;
    },
    x: function() {
        return (this.radnaPotreba.start - this.radnoVrijeme.start) * this.sat();
    },
    width: function() {
        return parseFloat(this.totalRad() / this.totalVrijeme()).toFixed(2);
    },
    startText: function() {
        return `${this.x() + this.width() / 4 * this.cliWidth()}`;
    },
    studentColor: null,
    workRect: function() {
        let rect2 = document.createElementNS('http://www.w3.org/2000/svg', "rect");
        rect2.setAttribute("x", this.x());
        rect2.setAttribute("width", `${parseInt(this.width() * 100)}%`);
        rect2.setAttribute("height", "100%");
        rect2.setAttribute("fill", this.studentColor);
        let text1 = document.createElementNS('http://www.w3.org/2000/svg', "text");
        text1.setAttributeNS(null, "x", this.startText());
        text1.setAttributeNS(null, "y", "10");
        text1.setAttribute("dominant-baseline", "central");
        text1.textContent = `${this.radnaPotreba.start} - ${this.radnaPotreba.end}`;
        text1.setAttribute("textLength", `${(this.width() * 100) / 2}%`);
        let parentElement = document.querySelector(`#${this.parentEl} svg`);
        parentElement.appendChild(rect2);
        parentElement.appendChild(text1);
    }
};



document.querySelectorAll('.prevMon').forEach(item => {
    item.addEventListener('click', function() {
        d.setMonth(`${d.getMonth() - 1}`, 10);
        mjesec = mjeseci[d.getMonth()];
        clearTable();
        table();
        return d.setMonth(`${d.getMonth()}`, 10);
    });
});

document.querySelectorAll('.nextMon').forEach(item => {
    item.addEventListener('click', function() {
        d.setMonth(`${d.getMonth() + 1}`, 10);
        mjesec = mjeseci[d.getMonth()];
        clearTable();
        table();
        return d.setMonth(`${d.getMonth()}`, 10);
    });
});


function setHours(rpstart, rpend, pardate, color) {
    drawRect.radnaPotreba.start = rpstart;
    drawRect.radnaPotreba.end = rpend;
    drawRect.parentEl = pardate;
    drawRect.studentColor = color;
    drawRect.workRect();
};

// setHours(16, 20, "ttermin5_1_2022", "blue");