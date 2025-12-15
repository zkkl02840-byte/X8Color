const slider = document.getElementById('colorSlider');
const box = document.getElementById('loadingBox');

//Levi Joel

slider.addEventListener('input', function () {
    const value = parseInt(this.value);
    const red = 255 - Math.round((value/100) * 255);
    const green = Math.round((value/100) * 255);
    box.style.backgroundColor = `rgb(${red}, ${green}, 0)`;;

//Levi Joel    
});