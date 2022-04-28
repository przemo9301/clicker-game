const btn =document.querySelector('button');
const timer=document.querySelector('.timer')
const clicker=document.querySelector('.showClicker');
const btnSub=document.querySelector('.inputButton')
const inputWindow=document.querySelector('.inputWindow')


// stałe
let totalClickValue=0;
let inputValue;
let firstClickTime;
let intervalStoper
const timeToChoose=[];

//function
const finishTime = ()=>{
    firstClickTime=new Date().getTime()
    console.log(firstClickTime);
    
    setTimeout(()=>{
        clicker.textContent=`Liczba kliknięć równa ${totalClickValue}`
        console.log('work');
        clearInterval(intervalStoper)
        },inputValue*1000)
} 

const timeToFinish= ()=>{
    intervalStoper =setInterval(()=>{
    const actualTime= new Date().getTime()
    const stoper=((actualTime-firstClickTime)/1000).toFixed(2)
    console.log(stoper);
    
    timer.textContent=`Timer: ${stoper}s`
        
    },1)
}


//przyciski
btn.addEventListener('click',()=>{
    totalClickValue++;
    console.log(totalClickValue);
    if(totalClickValue===1){
        finishTime()
        timeToFinish()
    }
    
})
btnSub.addEventListener('click',(e)=>{
    e.preventDefault()
    inputValue=inputWindow.value
    console.log('dziła', inputValue );
    
})

console.log(inputValue);
