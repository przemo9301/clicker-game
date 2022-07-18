// buttons
const btnClicker = document.querySelector('.clicker');
const btnSubmit = document.querySelector('.inputButton');
const btnChangePlayerInfo = document.querySelector('.changePlayerInfo');
//inputs windows
const inputWindow = document.querySelector('.inputWindow');
const inputName = document.querySelector('.inputName')
const inputSurname = document.querySelector('.inputSurname')
//others
const clicker = document.querySelector('.showClicker');
const timer = document.querySelector('.timer');

// variable
let totalClickValue = 0;
let inputValue;
let firstClickTime;
let intervalStopper


//buttons HTML
btnClicker.addEventListener('click', () => {
    totalClickValue++;
    console.log(totalClickValue);
    if (totalClickValue === 1) {
        timeToFinish()
    }

})
btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    inputValue = inputWindow.value;
    timer.textContent = `Timer: ${inputValue}.00s`;
    switchOnUserInputOrClicker(false);
})

btnChangePlayerInfo.addEventListener('click', () => {
    switchOnUserInputOrClicker(true)
})


console.log(inputValue);
