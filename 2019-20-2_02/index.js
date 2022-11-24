let resultElement = document.getElementById('result');
let radiusInput = document.getElementById('radius');
let lengthInput = document.getElementById('length');
let levelInput = document.getElementById('level');
let levelLabel = document.getElementById('levelLabel');

function updateResult(result) {
    resultElement.innerText = result;
}

function updateLevel(level) {
    levelLabel.innerText = level;
}

function calculateVolume(r, l, h) {
    return r * r * l * (Math.acos((r - h) / r) - (r - h) * Math.sqrt(2 * r * h - h * h) / (r * r));
}

function onInputChanged() {
    let radius = parseFloat(radiusInput.value);
    let length = parseFloat(lengthInput.value);
    let level = parseFloat(levelInput.value);
    let volume = calculateVolume(radius, length, level);
    updateResult(volume);
    updateLevel(level);
}

window.addEventListener('load', function(){
    radiusInput.addEventListener('input', onInputChanged);
    lengthInput.addEventListener('input', onInputChanged);
    levelInput.addEventListener('input', onInputChanged);
});