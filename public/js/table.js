import { d, mjesec, year, calcdan } from './calendar.js'


const parentTable = document.querySelector('tbody');
export const table = () => {
    for (let i = 1; i <= mjesec.days; i++) {
        d.setDate(i);
        const trow = document.createElement('tr');
        const tdatum = document.createElement('td');
        const tdan = document.createElement('td');
        const ttermin = document.createElement('td');
        ttermin.id = `ttermin${i}_${d.getMonth()}_${year}`;
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


function makeSvg(param) {
    let svg1 = document.createElementNS('http://www.w3.org/2000/svg', "svg");
    svg1.setAttribute("width", "100%");
    svg1.setAttribute("height", "24px");
    let rect1 = document.createElementNS('http://www.w3.org/2000/svg', "rect");
    rect1.setAttribute("x", "0");
    rect1.setAttribute("width", "100%");
    rect1.setAttribute("height", "100%");
    rect1.setAttribute("fill", "transparent");
    let parentElement = document.querySelector(`#ttermin${param}_${d.getMonth()}_${year}`);
    parentElement.appendChild(svg1);
    svg1.appendChild(rect1);
};