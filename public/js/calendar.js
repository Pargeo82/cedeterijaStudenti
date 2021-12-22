const d = new Date();
let year = d.getFullYear();

// d.setFullYear(2024);
// year = d.getFullYear();

function leapYear() {
    if ((year - 2020) % 4 === 0) {
        return 29;
    } else return 28;
}


const dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];
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
]

let mjesec = mjeseci[d.getMonth()];

// d.setMonth(9);
// mjesec = mjeseci[d.getMonth()]

function calcdan() {
    let dan = d.getDay();
    if (dan === 0) {
        return dani[6];
    } else {
        return dani[dan - 1];
    }
};

const parentTable = document.querySelector('tbody');
const table = () => {
    for (let i = 1; i <= mjesec.days; i++) {
        d.setDate(i);
        const trow = document.createElement('tr');
        const tdatum = document.createElement('th');
        const tdan = document.createElement('th');
        const ttermin = document.createElement('td');
        ttermin.id = `ttermin${i}`;
        tdatum.classList.add("text-end");
        tdan.classList.add("text-start");
        ttermin.classList.add('termincol');
        tdatum.innerText = `${i}. ${mjesec.name}`;
        tdan.innerText = `${calcdan()}`;
        parentTable.appendChild(trow);
        trow.append(tdatum);
        trow.append(tdan);
        trow.append(ttermin);
        makeSvg([i]);
    };
};
table();

function makeSvg(param) {
    let svg1 = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg1.setAttribute("width", "100%");
    svg1.setAttribute("height", "24px");
    let rect1 = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    rect1.setAttribute("x", "0");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("height", "100%");
    rect1.setAttribute("fill", "transparent");
    let parentElement = document.querySelector(`#ttermin${param}`);
    parentElement.appendChild(svg1);
    svg1.appendChild(rect1);
};

const drawRect = {
    radnoVrijeme: {
        start: 9,
        end: 20
    },
    totalVrijeme: function () {
        return this.radnoVrijeme.end - this.radnoVrijeme.start;
    },
    cliWidth: document.querySelector("#ttermin2 svg").clientWidth,
    sat: function () {
        return this.cliWidth / this.totalVrijeme();
    },
    radnaPotreba: {
        start: 9,
        end: 14
    },
    totalRad: function () {
        return this.radnaPotreba.end - this.radnaPotreba.start;
    },
    x: function () {
        return (this.radnaPotreba.start - this.radnoVrijeme.start) * this.sat();
    },
    width: function () {
        return parseFloat(this.totalRad() / this.totalVrijeme()).toFixed(2);
    },
    startText: function () {
        return `${this.x() + this.width() / 4 * this.cliWidth}`;
    },
    studentColor: "red",
    workRect: function () {
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
        let parentElement = document.querySelector(`#ttermin${2} svg`);
        parentElement.appendChild(rect2);
        parentElement.appendChild(text1);
    }
};
drawRect.workRect();

console.log(drawRect.width() * 100);
console.log(drawRect.startText());
console.log(drawRect.sat());
console.log(drawRect.x());