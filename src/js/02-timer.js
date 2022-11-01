import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from "notiflix";
require("flatpickr/dist/themes/material_green.css"); // you can choose themes
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const getEl = selector => document.querySelector(selector);
const inputRef = getEl('#datetime-picker');
const startBtnRef = getEl('[data-start]');
const daysValueRef = getEl('[data-days]');
const hoursValueRef = getEl('[data-hours]');
const minutesValueRef = getEl('[data-minutes]');
const secondsValueRef = getEl('[data-seconds]');
startBtnRef.setAttribute('disabled', true);
startBtnRef.addEventListener('click', () => { timer.strart() });

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            startBtnRef.setAttribute('disabled', true);
            Notiflix.Notify.failure('Please choose a date in the future');
        } else {
            startBtnRef.removeAttribute('disabled');
            Notiflix.Notify.success('Please click Start button');
        }     
    },
};  

const calendar = flatpickr(inputRef, options);

const timer = {
    strart() {
        const startTime = calendar.selectedDates[0];
        const intervalId = setInterval(() => {
            const currentTime = new Date();
            const dataTime = startTime - currentTime;
            const time = convertMs(dataTime);
            console.log(time)
            if (dataTime < 1000) {
                clearInterval(intervalId);
                Notiflix.Notify.info('Time out')
            };
            updateIntterface(time);
        }, 1000);
    }
};

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const days = pad(Math.floor(ms / day));
    const hours = pad(Math.floor((ms % day) / hour));
    const minutes = pad(Math.floor(((ms % day) % hour) / minute));
    const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
};

function pad(value) {
    return String(value).padStart(2, '0');
}; 

function updateIntterface({days, hours, minutes, seconds}) { 
    daysValueRef.textContent = days;
    hoursValueRef.textContent = hours;
    minutesValueRef.textContent = minutes;
    secondsValueRef.textContent = seconds;
};