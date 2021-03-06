//function
const newUser = new UserList()


const putUserInList = (clicksResult) => {
    inputValue = inputWindow.value;
    const playerName = inputName.value;
    const playerSurname = inputSurname.value;
    const currentDate = new Date().toLocaleString();
    const newPlayer = new User(playerName, playerSurname, inputValue, clicksResult, currentDate);
    const user1 = newUser.add(newPlayer);
    newUser.saveUserInDatabase();
    console.log(user1);
    inputName.value = '';
    inputWindow.value = '';
    inputSurname.value = '';
}


const timeToFinish = () => {
    firstClickTime = new Date().getTime()
    console.log(firstClickTime);

    intervalStopper = setInterval(() => {
        const actualTime = new Date().getTime();
        const stopperShow = Number(((firstClickTime + (inputValue * 1000)) - actualTime) / 1000).toFixed(2);
        timer.textContent = `Timer: ${stopperShow}s`
        if (stopperShow == 0) {
            console.log('work');
            clicker.textContent = `Number of clicks equal: ${totalClickValue}`
            console.log('work');
            clearInterval(intervalStopper)
            putUserInList(totalClickValue)
            clearAllValues()
            switchOnUserInputOrClicker(true)
        }
    }, 1)

}


