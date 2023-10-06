// let a = prompt("Nhập a");
// let b = prompt("Nhập b");
// let c = prompt("Nhập c");
//
// let max = a;
// if (max < b) {
//     max = b;
// }
//
// if(max < c) {
//     max = c;
// }
//
// // alert(max);
//
// document.write(max)

//Tính điểm trung bình và phân loại học sinh

let math = +prompt("Nhập điểm toán: ", "0");
while (!(0 <= math && math<=10)) {
    alert("Người dùng nhập sai");
    math = prompt("Nhập lại điểm toán: ")
}
let english = +prompt("Nhập điểm anh: ", "0");
let lite = +prompt("Nhập điểm văn: ", "0");
let avg = (math + english + lite)/3;
//if bậc thang
if(avg >=8 ) { alert("Giỏi") }
else if(avg >=6.5) { alert("Khá") }
else if (avg >=5) {alert("trung bình")}
else if (avg >=3.5) {alert("Yếu")}
else {alert("Kém")}
