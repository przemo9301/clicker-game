const btn =document.querySelector('button');
const timer=document.querySelector('.timer')
const clicker=document.querySelector('.showClicker');
const btnSub=document.querySelector('.inputButton')
const inputWindow=document.querySelector('.inputWindow')

const newUser= new UserData()

// stałe
let totalClickValue=0;
let inputValue;
let firstClickTime;
let intervalStoper
const timeToChoose=[];


//przyciski
btn.addEventListener('click',()=>{
    totalClickValue++;
    console.log(totalClickValue);
    if(totalClickValue===1){
        finishTime()
        timeToFinish()
        newUser.addUserToList()
    }
    
})
btnSub.addEventListener('click',(e)=>{
    e.preventDefault()
    inputValue=inputWindow.value
    console.log('dziła', inputValue );
    
})

console.log(inputValue);
