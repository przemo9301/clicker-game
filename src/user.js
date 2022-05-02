class UserList {
    constructor(){
       this.userList=[]
    }
    add (userId){
        this.userList.push(userId);
        console.log(this.userList);
        
    }
} 
class User {
    constructor(name,surname,time,result){
        this.name=name;
        this.surname=surname;
        this.time=time;
        this.result=result
    }
}