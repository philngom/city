// import functions and grab DOM elements
import { createCountString } from './utils.js';
const dropDowns = document.querySelectorAll('select');
const reportEl = document.querySelector('#report');
const sloganEl = document.querySelector('input');
const addSloganButton = document.querySelector('button');
const sloganHouse = document.querySelector('#sloganHouse');

// let state
let tracker = {
    waterfront: 0,
    skyline: 0,
    castle: 0
};

const slogans = [];


for (let dropDown of dropDowns) {
    dropDown.addEventListener('change', () => {
        let value = dropDown.value;
        let category = dropDown.name;
        tracker[category]++;
        let img = document.createElement('img');
        img.src = `./assets/${value}-${category}.jpg`;
        displayImg(img, category);
        displayReport();
    });
}

addSloganButton.addEventListener('click', () => {
    slogans.push(sloganEl.value);
    sloganEl.value = '';
    displaySlogans();
});

function displayImg(img, category) {
    const imgContainer = document.querySelector(`.${category}`);
    imgContainer.textContent = '';
    imgContainer.append(img);
}

function displayReport() {
    reportEl.textContent = '';
    let report = createCountString(tracker.waterfront, tracker.skyline, tracker.castle);
    let p = document.createElement('p');
    p.textContent = report;
    reportEl.append(p);
}

function displaySlogans() {
    sloganHouse.textContent = '';
    for (let slogan of slogans) {
        let p = document.createElement('p');
        p.textContent = slogan;
        sloganHouse.prepend(p);
    }
}
