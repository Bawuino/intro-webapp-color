document.addEventListener('DOMContentLoaded', function() {
    const colorPicker = document.getElementById('colorPicker');
    const redInput = document.getElementById('redInput');
    const greenInput = document.getElementById('greenInput');
    const blueInput = document.getElementById('blueInput');
    const redRange = document.getElementById('redRange');
    const greenRange = document.getElementById('greenRange');
    const blueRange = document.getElementById('blueRange');
    const colorBox = document.getElementById('colorBox');

    function updateColor() {
        const color = colorPicker.value;
        const rgb = hexToRgb(color);
        redInput.value = rgb.r;
        greenInput.value = rgb.g;
        blueInput.value = rgb.b;
        redRange.value = rgb.r;
        greenRange.value = rgb.g;
        blueRange.value = rgb.b;
        const rgbColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        colorBox.style.backgroundColor = rgbColor;
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.substring(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    colorPicker.addEventListener('input', updateColor);
    redInput.addEventListener('input', updateColor);
    greenInput.addEventListener('input', updateColor);
    blueInput.addEventListener('input', updateColor);
    redRange.addEventListener('input', updateColor);
    greenRange.addEventListener('input', updateColor);
    blueRange.addEventListener('input', updateColor);

    updateColor(); // Actualiza el color al cargar la página
});
