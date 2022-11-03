let getEl = selector => document.querySelector(selector); 
const startBtnRef = getEl('[data-start]');
const stopBtnRef = getEl('[data-stop]');
const bodyRef = getEl('body');

const delay = 1000;
let intervalId = null;
stopBtnRef.setAttribute('disabled', true);

function startDisabledAdd() {
    startBtnRef.setAttribute('disabled', true);
    stopBtnRef.removeAttribute('disabled');
};
function stopDisabledAdd() {
    stopBtnRef.setAttribute('disabled', true);
    startBtnRef.removeAttribute('disabled');
};

function startColorSwich() { 
    startDisabledAdd();
    intervalId = setInterval(() => {
    bodyRef.style.backgroundColor = getRandomHexColor();
    }, delay);
};

function stopColorSwich() {
    stopDisabledAdd();
    clearInterval(intervalId);
};

startBtnRef.addEventListener('click', () => startColorSwich()); 
stopBtnRef.addEventListener('click', () => stopColorSwich());

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};
// ==============================================================================
//Варіант 2 - написання через клас

// class Rainbow {
//     start() { 
//         startBtnRef.setAttribute('disabled', true);
//         stopBtnRef.removeAttribute('disabled');
//         this.intervalId = setInterval(() => {
//         let randomColor = getRandomHexColor();
//         bodyRef.style.backgroundColor = randomColor;
//         }, delay);
//     };

//     stop() {       
//         stopBtnRef.setAttribute('disabled', true);
//         startBtnRef.removeAttribute('disabled');
//         clearInterval(this.intervalId)
//     };
// };

// const rainbow = new Rainbow();
// startBtnRef.addEventListener('click', () => rainbow.start()); 
// stopBtnRef.addEventListener('click', () => rainbow.stop());