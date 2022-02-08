const text = document.getElementById('username');
const span = document.getElementById('nametext');

text.addEventListener('input', function(e) {
    span.innerText = text.value;
});

const colorPicker = document.getElementById('colorpicker');
const namerect = document.getElementById('namerect');

colorPicker.addEventListener('input', function(e) {
    namerect.style.backgroundColor = colorPicker.value;
});


let radios = document.querySelectorAll('input[type=radio][name="textColor"]');
radios.forEach(radio => radio.addEventListener('change', function() {
    if (radio.value === "black") {
        namerect.style.color = "black";
    } else namerect.style.color = "white";
}));