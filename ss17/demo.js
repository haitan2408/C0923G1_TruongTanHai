class Person {
    constructor(id, name) {
        this._id = id;
        this._name = name;
    }

    getName() {
        // if()
        return this._name;
        // else {
        //     return "*******"
        // }
    }

    setName(name) {
        this._name = name;
    }
}
class Student extends Person {
    constructor(id, name,level) {
        //Gọi constructor của lớp cha
        super(id, name);
        this._level = level;

    }
}

let person = new Person(1, "HaiTT");
console.log(person.getName());

let student = new Student(2, "CongNT", "Đại học");
console.log(student.getName())
