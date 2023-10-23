// //literal object
// let objOfTham = {
//     id: 6,
//     name: "Thắm",
//     address: "Quảng Nam"
// };

// function person(id,name) {
//
// }

//PascalCase
class Student {
    constructor(id, name, address) {
        this.id = id;
        this.name = name;
        this.address = address;
    }

    study(date, student) {
        this.go("CodeGym")
        alert(this.name + ` đi học với ${student.name} vào ngày `+ date);
    }

    go(address) {

    }
    toString() {
        return `Id: ${this.id}, có tên là ${this.name}, và có địa chỉ ở ${this.address}`
    }
}

let objOfTham = new Student(1, "Thắm", "Quảng Nam")
let objOfKhanh = new Student(2, "Khánh", "Đà Nẵng")
console.log(objOfTham.name);
console.log(objOfKhanh.address);
objOfTham.study("23/10/2023", objOfKhanh)
let informationOfTham = objOfTham.toString();
alert(informationOfTham)
