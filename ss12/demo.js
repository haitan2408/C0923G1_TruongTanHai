let size;

do {
    size = prompt("Mời bạn nhập số lượng phần tử trong mảng");

} while (size > 0 && size <= 50 && parseInt(size) === size);

let arrOfNumber = [];

for (let i = 0; i < size; i++) {
    arrOfNumber[i] = +prompt("Mời bạn nhập phần tử thứ " + i);
}

console.log(arrOfNumber);

// for - i
// let sizeOfArray = arrOfNumber.length;
// for (let i = 0; i < sizeOfArray; i++) {
//     arrOfNumber[i] = arrOfNumber[i] * 2;
// }
//
// console.log(arrOfNumber);

// for in

// for(let i in arrOfNumber) {
//     arrOfNumber[i] = arrOfNumber[i] * 2;
// }
// console.log(arrOfNumber);


// for of
// for (let item of arrOfNumber) {
//     item = item * 2;
// }

// console.log(arrOfNumber);
// let sum = 0;
// for (let i = 1; i < size; i = i + 2) {
//     sum += arrOfNumber[i];
// }
//push: thêm vào cuối mảng
//pop: xóa cuối mảng
//unshift: thêm vào đầu mảng
//shift: xóa đầu mảng
//splice(3,2): xóa từ vị trí index = 3 và xóa 2 phần tử
//splice(3,0,"a",2): thêm phần tử số 2 vào vị trí index = 3;
//sort: sắp xếp các phần tử trong mảng

arrOfNumber.sort((a, b) => a - b);
console.log(arrOfNumber)
