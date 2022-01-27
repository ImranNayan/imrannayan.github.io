window.onload = () => { 'use strict';
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js')} }

setInterval(myTimer, 1000)
function myTimer() {
document.querySelector('#time').innerHTML = new Date().toLocaleTimeString();
}
document.querySelector('#date').innerHTML = (new Date()).toString().split(' ').splice(1,3).join(' ');
