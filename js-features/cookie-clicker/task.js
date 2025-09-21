
let clicksCount = 0;
let clickDSeed = 0; 
let cookie = document.getElementById('cookie');
let clicker_counter = document.getElementById('clicker__counter');
let clicker_speed = document.getElementById('clicker__speed');
let lastClickTime = Date.now();


function changeSize() {    
    if (cookie.width === 200 && cookie.height === 200) {
        cookie.width = 150;
        cookie.height = 150;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
}


cookie.onclick = function() {
    clicksCount++; 
    clicker_counter.textContent = clicksCount; 
    
    clickDSeed = (1/((Date.now() - lastClickTime)/ 1000)).toFixed(2);
    clicker_speed.textContent = clickDSeed;    
    changeSize();
    lastClickTime = Date.now();    
};