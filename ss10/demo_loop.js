// Hạn chế khởi tạo biến trong vòng lặp
// let usernameOfGG;
// let passwordOfGG;
//
// for (let count = 0; count < 3; count++) {
//      usernameOfGG = prompt("Nhập username");
//     if (usernameOfGG === "username") {
//          passwordOfGG = prompt("Nhập pass");
//         if (passwordOfGG === "pass") {
//             alert("Đăng nhập thành công");
//             break;
//         } else {
//             alert("Sai password")
//         }
//     } else {
//         alert("Sai tài khoản");
//     }
// }

// Viết thuật toán kiểm tra số nguyên tố.
// SNT là số chỉ chia hết cho 1 và chính nó


let num;
do {
    num = +prompt("Nhập số num");
} while (num <= 1 && parseInt(num) === num);

let count = 0;
for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
        count++;
        break;
    }
}
if (count === 0) {
    alert("Số nguyên tố")
} else {
    alert("Không phải là số nguyên tố")
}

//Hiển thị 30 số nguyên tố đầu tiên trong dãy số tự nhiên N+;

// let countPrime = 0;
// let num = 2;
// let count;
// while (countPrime < 30) {
//     count = 0;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             count++;
//             num++;
//             break;
//         }
//     }
//     if (count === 0) {
//         alert(num + " là số nguyên tố");
//         countPrime++;
//     }
//     num++;
// }


let num = 2;
let count;
for (let countPrime = 0; countPrime < 30; num++) {
    count = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            count++;
            num++;
            break;
        }
    }
    if (count === 0) {
        alert(num + " là số nguyên tố");
        countPrime++;
    }
}
