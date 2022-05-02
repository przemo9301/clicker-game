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

const switchOnClicker=()=>{
    btnClicker.disabled= false;
    btnChangePlayerInfo.disabled=false;
    btnSub.disabled=true;
    inputName.disabled=true;
    inputSurname.disabled=true;
    inputWindow.disabled=true;
}

const switchOnUserInput=()=>{
    btnClicker.disabled= true;
    btnChangePlayerInfo.disabled=true;
    btnSub.disabled=false;
    inputName.disabled=false;
    inputSurname.disabled=false;
    inputWindow.disabled=false;
}
// ważniejsze funkcje 

const timeToFinish= ()=>{
    firstClickTime=new Date().getTime()
    console.log(firstClickTime);
    
    intervalStoper =setInterval(()=>{
    const actualTime= new Date().getTime();
    const stoper=Number(((firstClickTime+(inputValue*1000))-actualTime)/1000).toFixed(2);
    timer.textContent=`Timer: ${stoper}s`
    if(stoper==0){
        console.log('działa');
        clicker.textContent=`Liczba kliknięć równa ${totalClickValue}`
        console.log('work');
        clearInterval(intervalStoper)
        putUserInList(totalClickValue)
        clearAllValues()
        switchOnUserInput()
    }  
    },1)
   
}

