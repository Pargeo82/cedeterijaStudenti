const d = new Date();
let year = d.getFullYear();

// testing another year
// d.setFullYear(2024);
// year = d.getFullYear();

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

let mjesec = mjeseci[d.getMonth()];

// testing another month
// d.setMonth(1);
// mjesec = mjeseci[d.getMonth()]

export { mjeseci, dani, d, year, mjesec };