/**
 * Tính độ dài cạnh huyền
 * 
 * Khối 1: dữ liệu được cung cấp
 * Input
 * edge1, edge2
 * 
 * Khối 2: các bước xử lý
 * b1: khai báo biến và gán giá trị
 * b2: lập công thức tính cạnh huyền
 * edge3^2 = (edge1^2 + edge2^2)
 * 
 * ==> edge3 = math.sqrt(edge1^2 + edge2^2)
 * ==> edge3 = math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2))
 * 
 * 
 * Khối 3: kết quả cần đạt được
 * Output
 * edge3
 * 
 */

// B1: tạo biến và gán giá trị
var edge1 = 3;
var edge2 = 4;
// Gán giá trị mặc định
var edge3 = 0;

// B2: tính cạnh huyền
// edge3 = Math.sqrt((edge1 * edge1) + (edge2 * edge2));
edge3 = Math.sqrt(Math.pow(edge1, 2) + Math.pow(edge2, 2));
console.log(typeof(edge3));

// B3: thông báo kết quả
console.log("Độ dài cạnh huyền là: " + edge3);
a = "Độ dài cạnh huyền là: " + edge3;
console.log(typeof(a));