



const clearAllValues = () => {
    totalClickValue = 0;
    inputValue = 0;
    firstClickTime = 0;
    intervalStopper = 0;
}


const switchOnUserInputOrClicker = (data) => {
    btnClicker.disabled = data;
    btnChangePlayerInfo.disabled = data;
    btnSubmit.disabled = !data;
    inputName.disabled = !data;
    inputSurname.disabled = !data;
    inputWindow.disabled = !data;
}