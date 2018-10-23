// nvm
// nvm install 8.12.0
// npm install -g typescript
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.setAge = function (ag) {
        this.age = ag;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var student = new Person();
var teacher = new Person();
student.setAge(10);
teacher.setAge(50);
console.log(student.getAge());
console.log(teacher.getAge());
