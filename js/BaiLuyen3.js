/**
 * Khối 1:
 * tenPhim
 * giaVeNL
 * giaVeTE
 * phanTramTuThien
 * soVeNL
 * soVeTE
 * 
 * Khối 2:
 * B1: tạo biến gán giá trị
 * B2: tongVe = soVeNL + soVeTE
 * B3: doanhThu = giaVeNL * soVeNL + giaVeTE * soVeTE
 * B4: tienTuThien = doanhThu * phanTramTuThien / 100
 * B5: tienConLai = doanhThu - tienTuThien
 * Khối 3:
 * tongVe
 * doanhThu
 * tienTuThien
 * tienConLai
 */

// B1: tạo và gán biến
var tenPhim  = "No Way Home";
var giaVeNL = 50000;
var giaVeTE = 20000;    
var phanTramTuThien = 10;
var soVeNL = 10;
var soVeTE = 5;

// B2: 
var tongVe = soVeNL + soVeTE;
var doanhThu = giaVeNL * soVeNL + giaVeTE * soVeTE;
var tienTuThien = doanhThu * phanTramTuThien / 100;
var tienConLai = doanhThu - tienTuThien;

// B3:
console.log("Ten phim: " + tenPhim + "\n" +"Tổng vé: " + tongVe + "\n" + "Doanh Thu: " + doanhThu + "\n" + 
"Tiền từ thiện: " + tienTuThien + "\n" + "Tiền còn lại: " + tienConLai);