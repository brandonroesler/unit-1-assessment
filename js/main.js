/*----- constants -----*/ 
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const count = document.getElementById('count');
const input = document.getElementById('input');

/*----- app's state (variables) -----*/ 
var score = 0;

/*----- cached element references -----*/ 

/*----- event listeners -----*/ 
plus.addEventListener('click', addNum);
minus.addEventListener('click', subNum);

/*----- functions -----*/
init();

function init() {
    count.textContent = score;
    input.value = 1;
};

function addNum() {
    score += parseInt(input.value);
    count.textContent = `${score}`;
    if (score < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}

function subNum() {
    score -= parseInt(input.value);
    count.innerHTML = `${score}`;
    if (score < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}