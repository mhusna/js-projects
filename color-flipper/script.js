const body = document.getElementById("body-id");
const backgroundColorCodeElement = document.getElementById("background-color-code");
const colorCodeElement = backgroundColorCodeElement.lastElementChild;

const hexColorDictionary = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
}

const whiteColor = "rgb(255, 255, 255)";
var isRGB = true;

const handleOnLoad = () => {
    colorCodeElement.innerText = whiteColor;
}

const handleOnClick = () => {
    const button = document.getElementById("btn-click");

    const rgbColorArray = [];
    var createdColor;

    if(isRGB){
        for (let index = 0; index < 3; index++) {
            rgbColorArray[index] = getRandomRGBNumber();
        }
        createdColor = `rgb(${rgbColorArray[0]}, ${rgbColorArray[1]}, ${rgbColorArray[2]})`;
    }
    else{
        for (let index = 0; index < 6; index++) {
            rgbColorArray[index] = getRandomHEXNumber();
        }

        createdColor = `#`;
        rgbColorArray.forEach((colorCode) => {
            createdColor = `${createdColor}${colorCode}`;
        })
    }

    body.style.backgroundColor = createdColor;
    colorCodeElement.innerText = createdColor;
    
    if(body.style.backgroundColor === whiteColor){
        button.style.borderColor = "rgb(0, 0, 0)";
    }
    else{
        button.style.border = "2px dashed rgb(255, 255, 255)";
        button.style.color = whiteColor;
        backgroundColorCodeElement.style.color = whiteColor;
    }
}

const handleColorCodeFormat = (value) => {
    isRGB = value;
}

const getRandomRGBNumber = () => {
    return Math.floor(Math.random() * 256);
}

const getRandomHEXNumber = () => {
    const randomHEXNumber = Math.floor(Math.random() * 16);
    return hexColorDictionary[randomHEXNumber];
}