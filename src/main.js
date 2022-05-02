// buttons
const btnClicker =document.querySelector('.clicker');
const timer=document.querySelector('.timer')
const btnChangePlayerInfo=document.querySelector('.changePlayerInfo')
//inputs windows
const inputWindow=document.querySelector('.inputWindow');
const inputName=document.querySelector('.inputName')
const inputSurname=document.querySelector('.inputSurname')
//others
const clicker=document.querySelector('.showClicker');
const btnSub=document.querySelector('.inputButton');

// variable
let totalClickValue=0;
let inputValue;
let firstClickTime;
let intervalStoper


//buttons HTML
btnClicker.addEventListener('click',()=>{
    totalClickValue++;
    console.log(totalClickValue);
    if(totalClickValue===1){
        timeToFinish()
    }
    
})
btnSub.addEventListener('click',(e)=>{
    e.preventDefault();   
    inputValue=inputWindow.value; 
    timer.textContent=`Timer: ${inputValue}.00s`;
    switchOnClicker()
})

btnChangePlayerInfo.addEventListener('click',switchOnUserInput)


console.log(inputValue);
