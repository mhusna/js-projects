const handleOnClick = () => {
    const body = document.getElementById("body-id");
    const rgbColor = [];

    for (let index = 0; index < 3; index++) {
        rgbColor[index] = getRandomNumber();
    }

    body.style.backgroundColor = `rgb(${rgbColor[0]}, ${rgbColor[1]}, ${rgbColor[2]})`;

    if(body.style.backgroundColor === "rgb(255, 255, 255)"){
        document.getElementById("btn-click").style.borderColor = "rgb(0, 0, 0)";
    }
    else{
        document.getElementById("btn-click").style.border = "2px dashed rgb(255, 255, 255)";
        document.getElementById("btn-click").style.color = "rgb(255, 255, 255)";
    }
}

const getRandomNumber = () => {
    return Math.floor(Math.random() * 256);
}