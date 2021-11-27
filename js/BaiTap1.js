/**
 * Khối 1: input
 * luongMoiNgay
 * soNgayLam
 * 
 * Khối 2:
 * B1: tạo biến và gán giá trị
 * B2: tính tiền lương
 * 
 * Khối 3: ouput
 * tongLuong
 * 
 */

//B1

var luongMoiNgay = 100000;
var soNgayLam = 20;

// B2:
var tongLuong = luongMoiNgay * soNgayLam;

// B3:
console.log("Tổng lương tháng này là: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(tongLuong));
// console.log(new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(tongLuong));