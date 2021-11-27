/**
 * Khối 1: input
 * number
 * 
 * Khối 2: các bước xử lý
 * B1: tạo và khai báo biến
 * B2: 
 * ten = Math.floor(number/10);
 * unit = number%10;
 * tong = ten + unit;
 * 
 * Khối 3: output
 * tong
 */

//B1:
var num = 68;

//B2: 
var ten = Math.floor(num/10);
var unit = num%10;
var tong = ten + unit;

// B3:
console.log("Tổng 2 kí số là:" + tong);