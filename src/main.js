const btnClicker =document.querySelector('.clicker');
const timer=document.querySelector('.timer')
const clicker=document.querySelector('.showClicker');
const btnSub=document.querySelector('.inputButton');
const inputWindow=document.querySelector('.inputWindow');
const inputName=document.querySelector('.inputName')
const inputSurname=document.querySelector('.inputSurname')

// const newUser= new UserList()

// stałe
let totalClickValue=0;
let inputValue;
let firstClickTime;
let intervalStoper


// function 


//przyciski
btnClicker.addEventListener('click',()=>{
    totalClickValue++;
    console.log(totalClickValue);
    if(totalClickValue===1){
        // finishTime()
        timeToFinish()
    }
    
})
btnSub.addEventListener('click',(e)=>{
    e.preventDefault();
       
    inputValue=inputWindow.value; 
})

console.log(inputValue);
