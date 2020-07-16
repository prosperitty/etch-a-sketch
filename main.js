const bodyElement = document.querySelector('body');
const headingText = document.createElement('h1');
const mainTag = document.createElement('main');
const mainContainer = document.createElement('div');
const resetButton = document.createElement('button');
const rgbButton = document.createElement('button');
const gridSquares = [];
let area = 16;
let r = undefined;
let g = undefined;
let b = undefined;

const runFunctions = () => {
    appendTags();
    styleContent();
    generateGrid();
    updateContainer();
    toggle();
    resetGrid();
}

const appendTags = function() {
    bodyElement.appendChild(headingText);
    bodyElement.appendChild(resetButton);
    bodyElement.appendChild(rgbButton);
    bodyElement.appendChild(mainTag);
    mainTag.appendChild(mainContainer);
    mainContainer.classList = 'main-container';
    rgbButton.setAttribute('value', 'off');
};

const styleContent = function() {
    bodyElement.style.background = '#e8cc7d';
    headingText.textContent = 'etch-a-sketch';
    headingText.style.textAlign = 'center';
    styleResetButton();
    styleRgbButton();
};

const updateContainer = function() {
    mainContainer.style.gridTemplateColumns = `repeat(${area}, auto)`;
    mainContainer.style.gridTemplateRows = `repeat(${area}, auto)`;
};

const generateGrid = function() {
    for(i = 0; i < area ** 2; i++) {
        gridSquares[i] = document.createElement('div');
        gridSquares[i].classList = 'grid-div';
        mainContainer.append(gridSquares[i]);
        gridSquares[i].addEventListener('mouseleave', (event) => {
            if(rgbButton.value === 'off') {
                return event.target.style.background = "white";
            } else {
                return event.target.style.background = randomRGB();
            };
        });
    };
};

const resetGrid = function() {
    resetButton.addEventListener('click', (e) => {
        while (mainContainer.firstChild) {
            mainContainer.removeChild(mainContainer.lastChild);
            gridSquares.pop();
        };     
        generateNewGrid(e);
    });
};

const generateNewGrid = function(e) {
    e = prompt('How many squares per side would you like to generate? (min:16, max: 64)');
    if(e >= 16 && e <= 64){
        area = e;
        generateGrid();
        updateContainer();
    } else {
        return alert('invalid input');
    };
    console.log(e);
};

const randomRGB = function() {
    getRandomInt = () => {
        return Math.floor(Math.random() * Math.floor(255));
      };
    console.log(`${r = getRandomInt()} ${g = getRandomInt()} ${b = getRandomInt()}`);
    return `rgb(${r},${g},${b})`;
};

const toggle = function() {
    rgbButton.addEventListener('click', (e) => {
        if(e.target.value==="off"){
            e.target.value="on";
            e.target.style.background = `linear-gradient(45deg,${randomRGB()},${randomRGB()})`;
        }
        else if(e.target.value==="on"){
            e.target.value="off";
            e.target.style.background = '#00b7ff';
        };
    });
};


const styleResetButton = function() {
    resetButton.textContent = 'reset';
    resetButton.style.fontFamily = '\'Indie Flower\', cursive';
    resetButton.style.fontSize = '16px';
    resetButton.style.background = '#00b7ff';
    resetButton.style.border = 'none';
    resetButton.style.borderRadius = '15px';
    resetButton.style.display = 'block';
    resetButton.style.width = '500px';
    resetButton.style.margin = '10px auto';
    resetButton.style.padding = '10px 0';
};

const styleRgbButton = function() {
    rgbButton.textContent = 'RGB';
    rgbButton.style.fontFamily = '\'Indie Flower\', cursive';
    rgbButton.style.fontSize = '16px';
    rgbButton.style.background = '#00b7ff';
    rgbButton.style.border = 'none';
    rgbButton.style.borderRadius = '15px';
    rgbButton.style.display = 'block';
    rgbButton.style.width = '500px';
    rgbButton.style.margin = '10px auto';
    rgbButton.style.padding = '10px 0';
}

runFunctions();
