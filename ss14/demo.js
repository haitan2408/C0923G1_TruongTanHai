function isPrime(number) {
    let count = 0;
    for (let i = 0; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false
        }
    }
    return true;
}

let number = +prompt("Mời bạn nhập số kiểm tra")
if(isPrime(number)) {
    console.log(number + "là số nguyên tố")
}

//Hiển thị 20 số nguyên tố đầu tiên
let num = 2;
let countPrime = 0;
while (countPrime < 20) {
    if(isPrime(num)) {
        console.log(num+"là số nguyên tố");
        countPrime++;
    }
    num++;
}
