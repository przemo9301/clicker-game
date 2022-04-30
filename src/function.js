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