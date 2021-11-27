/**
 * Khối 1: dữ liệu đầu vào
 * input: number(số nguyên dương có 3 chữ số)
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * hund (trăm)
 * ten (chục)
 * unit (đơn vị)
 * B2: lấy hàng trăm
 * lấy phần nguyên trong phép chia num/100
 * hund = Math.floor(num/100);
 * phanDu = num%100
 * B3: lấy hàng chục và đơn vị
 * ten = Math.floor(phanDu/10)
 * unit = phanDu%10
 * 
 * Khối 3: dữ liệu đầu ra
 * output: tổng các chữ số của số number
 * VB: 586 ==> 5 + 8 + 6 = 19.
 */

// B1: Khai báo biến
var num = 476;

// B2: 
var hund = Math.floor(num/100); //4
console.log(hund);
var phanDu = num%100; //76
console.log(phanDu);
var ten = Math.floor(phanDu/10); //7
console.log(ten);
var unit = phanDu%10; //6
console.log(unit);
var tong = hund + ten + unit;

// B3:
console.log("Tổng 3 ký số là: " + tong);
