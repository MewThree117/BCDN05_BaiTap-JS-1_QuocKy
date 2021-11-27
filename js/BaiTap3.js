/**
 * Khối 1: input
 * tiGiaUSD
 * soTienUSD
 * 
 * Khối 2: Các bước xử lý
 * B1: Tạo biến và gán giá trị
 * B2: soQuyDoiVND = soTienUSD  * tiGiaUSD;
 * 
 * Khối 3: output
 * soQuyDoiVND
 * 
 * 
 */

//B1:
var tiGiaUSD = 23500;
var soTienUSD = 46;

//B2:
var soQuyDoiVND = soTienUSD  * tiGiaUSD;

//B3:
console.log("Số tiền quy đổi sang VNĐ là: " + new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(soQuyDoiVND) + " VNĐ");