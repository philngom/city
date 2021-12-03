// import functions and grab DOM elements
import { createCountString } from './utils.js';
const dropDowns = document.querySelectorAll('select');
const reportEl = document.querySelector('#report');
const sloganEl = document.querySelector('#slogan');
const addSloganButton = document.querySelector('button');
const sloganHouse = document.querySelector('#sloganHouse');
const cityName = document.querySelector('#city-name');
const heading = document.querySelector('h3');

// let state
let tracker = {
    waterfront: 0,
    skyline: 0,
    castle: 0
};

let dropDownItems = {
    skyline: [{ display: '--Please choose an option--', value: '' }, { display: 'Seoul', value: 'seoul' }, { display: 'prague', value: 'prague' }, { display: 'Paris', value: 'paris' }],
    waterfront: [{ display: '--Please choose an option--', value: '' }, { display: 'China', value: 'china' }, { display: 'brooklyn', value: 'Brooklyn' }, { display: 'ostend', value: 'Ostend' }],
    castle: [{ display: '--Please choose an option--', value: '' }, { display: 'Neuschwanstein', value: 'neuschwanstein' }, { display: 'Japan', value: 'japan' }, { display: 'Hungary', value: 'hungary' }]
};

const slogans = [];

window.addEventListener('load', () => {
    for (let category in dropDownItems) {
        for (let option of dropDownItems[category]) {
            const op = document.createElement('option');
            op.textContent = option.display;
            op.value = option.value;
            const el = document.querySelector(`#${category}-select`);
            el.append(op);
        }
    }
});


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
    slogans.push(`${cityName.value}: ${sloganEl.value}`);
    heading.textContent = cityName.value.toUpperCase();
    cityName.value = '';
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
    cityName.textContent = '';
    for (let slogan of slogans) {
        let p = document.createElement('p');
        p.textContent = slogan;
        sloganHouse.prepend(p);
    }
}
