const generateBtn = document.getElementById("generateBtn");
const colorDisplay = document.getElementById("colorDisplay");
let body = document.body;

const genRandomHexColor = () =>{
    let hex = "0123456789ABCDEF";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}


const randomDeg = () =>{
    return Math.floor(Math.random() * 360)
}


const displayColor = () =>{
    const randomColor1 = genRandomHexColor();
    const randomColor2 = genRandomHexColor();
    const degree = randomDeg();
    console.log(randomColor1,randomColor2)
    colorDisplay.textContent = `background: linear-gradient(${degree}deg, ${randomColor1}, ${randomColor2});`
    body.style.background = `linear-gradient(135deg, ${randomColor1}, ${randomColor2})`
}


generateBtn.addEventListener("click", displayColor)

colorDisplay.addEventListener("click", () =>{
    navigator.clipboard.writeText(colorDisplay.textContent)
})