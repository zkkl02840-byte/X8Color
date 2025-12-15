function hexToRgb(hex) {
    hex = hex.replace('#', '');
    let bigint = parseInt(hex, 16);
    return [(bigint >> 16) & 255, (bigint >> 8) & 255, bigint & 255];
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b].map(x => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
    }).join('');
}

const color1 = document.getElementById('color1');
const color2 = document.getElementById('color2');
const hexValue = document.getElementById('hexValue');

function updateBoxColor() {
    const value = parseInt(slider.value);
    const startColor = hexToRgb(color1.value);
    const endColor = hexToRgb(color2.value);

    const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * (value / 100));
    const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * (value / 100));
    const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * (value / 100));

    const newHex = rgbToHex(r, g, b);
    box.style.backgroundColor = newHex;
    hexValue.textContent = newHex;
}

slider.addEventListener('input', updateBoxColor);
color1.addEventListener('change', updateBoxColor);
color2.addEventListener('change', updateBoxColor);