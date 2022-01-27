window.onload = () => { 'use strict';
if ('serviceWorker' in navigator) { navigator.serviceWorker.register('./sw.js')} }

navigator.getBattery().then(b => { document.querySelector('#bty').innerHTML = b.level * 100 +'%'})
