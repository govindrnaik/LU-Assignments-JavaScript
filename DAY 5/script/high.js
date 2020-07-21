class User {
    constructor(name, age,email) {
      this.name = name;
      this.age = age;
      this.email = email;
      this.luCoins = 0;
      this.courses = [];
    }
    login(){
        console.log(`${this.name} has logged in`);
        return this;
    }
    logout(){
        console.log(`${this.name} has logged out`);
        return this;
    }
}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;
    }
    addCoins(a){
        a.luCoins++;
        console.log(`${a.name} has ${a.luCoins} coins`);
        return a;
    }
    removeCoins(a){
        a.luCoins--;
        console.log(`${a.name} has ${a.luCoins} coins`);
        return a;
    }
    

}

class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteUser(user){
        users = users.filter(u =>{
            return u.email != user.email; 
        })
    }   
}


//test code 
let user1 = new User('Dilip',25,'dilip@gmail.com')
let user2 = new User('Krishnan',24,'k@gmai.com')
let mod = new Moderator('Berlin',24,'b@gmail.com','Moderator');
let admin = new Admin('Rio',25,'r@gmail.com');
let users = [user1,user2,mod,admin];
console.log(users);


mod.login().addCoins(user2).logout();
mod.login().removeCoins(user1).logout();

admin.deleteUser(user1);
console.log(users);
