const d = new Date();
let year = d.getFullYear();

const mjeseci = ['Siječanj', 'Veljača', 'Ožujak', 'Travanj', 'Svibanj', 'Lipanj', 'Srpanj', 'Kolovoz', 'Rujan', 'Listopad', 'Studeni', 'Prosinac'];
const dani = ['Ponedjeljak', 'Utorak', 'Srijeda', 'Četvrtak', 'Petak', 'Subota', 'Nedjelja'];



let mjesec = mjeseci[d.getMonth()];

function calcdan() {
    let dan = d.getDay();
    if (dan === 0) {
        return dani[6];
    } else {
        return dani[dan - 1];
    }
};