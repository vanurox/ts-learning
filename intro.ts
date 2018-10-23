// nvm
// nvm install 8.12.0
// npm install -g typescript
class Person {
    private age;
    setAge(ag){
        this.age = ag;
    }
    public getAge(){
        return this.age;
    }
}

let student = new Person();
let teacher = new Person();
student.setAge(10);
teacher.setAge(50);
console.log(student.getAge());
console.log(teacher.getAge());