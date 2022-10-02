const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function() {
    const newColor = randomColor();
    document.body.style.background = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`;
}