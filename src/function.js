//function
const newUser= new UserList()
const putUserInList =(clicksResult)=>{
    
    inputValue=inputWindow.value;
    const playerName =inputName.value;
    const playerSurname =inputSurname.value;
    const newPlayer= new User(playerName,playerSurname,inputValue,clicksResult);
    newUser.add(newPlayer);
    inputName.value='';
    inputWindow.value='';
    inputSurname.value='';
}
const clearAllValues=()=>{
    totalClickValue=0;
    inputValue=0;
    firstClickTime=0;
    intervalStoper =0;     
}

// const finishTime = ()=>{
//     firstClickTime=new Date().getTime()
//     console.log(firstClickTime);
    
//     setTimeout(()=>{
//         clicker.textContent=`Liczba kliknięć równa ${totalClickValue}`
//         console.log('work');
//         clearInterval(intervalStoper)
//         putUserInList(totalClickValue)
//         clearAllValues()
//         },inputValue*1000)
// } 

const timeToFinish= ()=>{
    firstClickTime=new Date().getTime()
    console.log(firstClickTime);
    let stoper;
    intervalStoper =setInterval(()=>{
    const actualTime= new Date().getTime()
     stoper=Number(((firstClickTime+(inputValue*1000))-actualTime)/1000).toFixed(2)
    
    console.log(stoper);
    
    timer.textContent=`Timer: ${stoper}s`
    if(stoper==0){
        console.log('działa');
        clicker.textContent=`Liczba kliknięć równa ${totalClickValue}`
        console.log('work');
        clearInterval(intervalStoper)
        putUserInList(totalClickValue)
        clearAllValues()
    }  
    },1)
   
}

