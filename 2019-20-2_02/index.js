window.addEventListener('load', () => {

    let resultElement = document.getElementById('result');
    let radiusInput = document.getElementById('radius');
    let lengthInput = document.getElementById('length');
    let levelInput = document.getElementById('level');
    let levelLabel = document.getElementById('levelLabel');

    function calculateVolume(r, l, h) {
        return r * r * l * (Math.acos((r - h) / r) - (r - h) * Math.sqrt(2 * r * h - h * h) / (r * r));
    }

    function onInputChanged() {
        let radius = radiusInput.valueAsNumber;
        let length = lengthInput.valueAsNumber;
        let level = levelInput.valueAsNumber;
        levelLabel.innerText = level;
        levelInput.max = radius * 2;
        resultElement.innerText = calculateVolume(radius, length, level);
    }

    radiusInput.addEventListener('input', onInputChanged);
    lengthInput.addEventListener('input', onInputChanged);
    levelInput.addEventListener('input', onInputChanged);
});