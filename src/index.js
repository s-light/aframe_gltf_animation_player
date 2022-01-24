import 'aframe';
import 'aframe-extras';
import 'aframe-orbit-controls';
// import 'aframe-gradient-sky';
// import 'aframe-sun-sky';
import './style.css';
import  initMyAframeComponents from './my-aframe-components';

initMyAframeComponents();

export default function init() {
    console.log('default init for our aframe project.');
    // addListenerForEscapeKey();
    const input = document.querySelector('input');
    const preview = document.querySelector('.preview');
    input.style.opacity = 0;

}

// ------------------------------------------
window.addEventListener('load', (event) => {
    console.info('all resources finished loading.');
    init();
});


function addListenerForEscapeKey() {
    document.addEventListener('keyup', (event) => {
        console.log('event.keyCode', event.keyCode);
        if (event.keyCode === 27) {
            console.log('close all boxes');
            const overlayBoxes = document.querySelectorAll('.overlay-box');
            for (const elBox of overlayBoxes) {
                overlayBoxHide(elBox);
            }
        }
    });
}
