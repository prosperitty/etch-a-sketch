const bodyElement = document.querySelector('body');
const mainTag = document.createElement('main');
const divContainer = document.createElement('div')
bodyElement.style.background = '#222222'


const appendTags = () => {
    bodyElement.appendChild(mainTag);
    mainTag.appendChild(divContainer);
    divContainer.classList = 'main-container';
    const divs = []
    for(i = 0; i < 32; i++) {
        divs[i] = document.createElement('div');
        divs[i].classList = 'grid-div';
        divContainer.append(divs[i]);
    }
};

const styleDivContainer = () => {
    
    // divContainer = document.querySelector('.main-container');
    // divContainer.style.background = 'red';
}

const runFunctions = () => {
    appendTags();
    styleDivContainer();
}

runFunctions();