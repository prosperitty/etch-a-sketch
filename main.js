const bodyElement = document.querySelector('body');
const mainTag = document.createElement('main');
const divContainer = document.createElement('div')
const resetButton = document.createElement('button')

bodyElement.style.background = '#222222'


const appendTags = () => {
    bodyElement.appendChild(resetButton);
    bodyElement.appendChild(mainTag);
    mainTag.appendChild(divContainer);
    divContainer.classList = 'main-container';
};



const drawSketch = () => {
    const divsArray = []
    for(i = 0; i < 256; i++) {
        divsArray[i] = document.createElement('div');
        divsArray[i].classList = 'grid-div';
        divContainer.append(divsArray[i]);
        divsArray[i].addEventListener('mousemove', (event) => {
            return event.target.style.background = "gray"
        });
    }
};

const styleContent = () => {
    // const resetButton = document.querySelector('button');
    resetButton.textContent = 'reset';
}

const runFunctions = () => {
    appendTags();
    drawSketch();
    styleContent();
}

runFunctions();