// Bài Tập 1:Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + ... + n > 10000
var n = 0;
var sum = 0;
while (sum <= 10000) {
    n++;
    sum += n;
}
document.getElementById("result").innerHTML =
    "Đáp án: Số nguyên dương nhỏ nhất là " + n;

// Bài Tập 2:Viết chương trình nhập vào 2 số x,n tính tổng: S(n) = x + x^2 + x^3 + ... + X ^ n
function tinhTong() {
    // B1: Khai báo biến
    var x = document.getElementById("x").value;
    var n = document.getElementById("n").value;
    var sum = 0;
    // B2: Hướng xử lý
    for (var i = 1; i <= n; i++) {
        sum += Math.pow(x, i);
    }
    // B3: Xuất dữ liệu
    document.getElementById("result2").innerHTML = "Tổng S(" + n + ") = " + sum;
}
// Bài Tập 3:Nhập vào n. Tính giai thừa 1*2*....n
function tinhGiaiThua() {
    // B1: Khai báo biến
    var n2 = +document.getElementById("n2").value;
    var giaiThua = 1;
    // B2: Hướng xử lý
    for (var i = 1; i <= n2; i++) {
        giaiThua *= i;
    }
    // B3: Xuất dữ liệu
    document.getElementById("ketQua").innerHTML = "Giai thừa của " + n2 + " là: " + giaiThua;
}
// Bài Tập 4:In ra 10 thẻ div.Nếu thẻ div nào vị trí chẵn thì background màu
// đỏ và lẻ thì background màu xanh
function myFunction() {
    // B1: Khai báo biến
    var x2 = document.getElementById("myDIV");
    // B2: Hướng xử lý
    for (var i = 1; i <= 10; i++) {
        var div = document.createElement("div");
        if (i % 2 == 0) {
            div.style.backgroundColor = "#df3e3e";
        } else {
            div.style.backgroundColor = "#87CEFA";
        }
        x2.appendChild(div);
        // B3: Xuất dữ liệu
        div.innerHTML = "Div " + i;
    }

}
// Bài Tập 5:Viết chương trình có 1 ô input, 1 ô button. Khi click vào button thì in ra có số nguyên tố từ 1 tới giá trị của ô input
// Chương trình kiểm tra số nguyên dương là số nguyên tố:
function checkPrime(n) {
    if (n <= 1) return false;
    for (var i = 2; i * i <= n; i++) {
        if (n % i == 0) return false;
    }
    return true;
}
function printPrimes() {
    // B1: Khai báo biến
    var inputNumber = document.getElementById("inputNumber").value;
    var result5 = "";
    // B2: Hướng xử lý
    for (var i = 1; i <= inputNumber; i++) {
        if (checkPrime(i)) result5 += i + " ";
    }
    // B3: Xuất dữ liệu
    document.getElementById("result5").innerHTML = "Các số nguyên tố là: " + result5;
}