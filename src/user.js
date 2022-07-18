class UserList {
    constructor() {
        this.userList = []
    }

    add(userId) {
        this.userList.push(userId);
        console.log(this.userList);

    }

    saveUserInDatabase() {
        const {writeFile} = require('fs').promises;

        (async () => {
            const changeArrayToJSON = JSON.stringify(this.userList)
            const saveToTxt = await writeFile('./user.json', changeArrayToJSON, 'utf8');
            console.log(saveToTxt);
        })();


    }
}

class User {
    constructor(name, surname, time, result, date) {
        this.name = name;
        this.surname = surname;
        this.time = time;
        this.result = result;
        this.date = date;
    }
}