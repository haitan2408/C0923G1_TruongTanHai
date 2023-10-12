// let a =  prompt("Nhập a");
// let b =  prompt("Nhập b");
// let c =  prompt("Nhập c");
//
// let max = a;
// if(max <b) {
//     max = b;
// }
//
// if(max <c) {
//     max = c;
// }
//
// alert(max +" là số lớn nhất");
//
//
// let usernameOfFace = prompt("Nhập usename");
// let passOfFace = prompt("Nhập pass face")
// if (usernameOfFace == "username" && passOfFace == "pass") {
//     alert("Đăng nhập thành công");
// //    Hiển thị danh sách bài viết của tài khoản đó
// } else {
//     alert("Tài khoản hoặc mật khẩu không đúng");
// //    Chuyển về lại trang xác nhận tài khoản
// //    Quên mật khẩu
// }
let count = 0;
let usernameOfGG = prompt("Nhập username");
if(usernameOfGG === "username") {
    let passwordOfGG = prompt("Nhập pass");
    if(passwordOfGG ==="pass") {
        alert("Đăng nhập thành công")
    } else {
        alert("Sai password")
    }
} else {
    alert("Sai tài khoản");
    count++;
    if(count == 3) {

    }
}

// Demo hiển thị số ngày của tháng trong năm

// let month = +prompt("Nhập tháng: ");
// if (month >= 1 && month <= 12 && parseInt(month) === month) {
//     if (month === 1 || month === 3 || month === 5
//         || month === 7 || month === 8 || month === 10 || month === 12) {
//         alert(`Thang ${month} có 31 ngày`);
//     } else if (month === 4 || month === 6 || month === 9 || month === 11) {
//         alert(`Thang ${month} có 30 ngày`);
//     } else {
//         let year = +prompt("Nhập năm: ");
//         if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
//             alert("Tháng 2 có 29 ngày");
//         } else {
//             alert("Tháng 2 có 28 ngày");
//         }
//     }
// } else {
//     alert("Người dùng nhập sai định dạng");
// }

let month = +prompt("Nhập tháng: ");
if (month >= 1 && month <= 12 && parseInt(month) === month) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            alert(`thang ${month} có 31 ngày`);
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            alert(`thang ${month} có 30 ngày`);
            break;
        case 2:
            let year = +prompt("Nhập năm: ");
            if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
                alert("Tháng 2 có 29 ngày");
            } else {
                alert("Tháng 2 có 28 ngày");
            }
    }
} else {
    alert("Người dùng nhập sai định dạng");
}

(0>1)? alert("0 lớn hơn 1"): alert("0 nhỏ hơn 1");





