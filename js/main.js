//dòng code đầu tiên
console.log("Goodbye World");

// tên biến: ten sp
// giá tiền: price
// giá trị (giữ liệu được lưu trong biến)
// Khai báo biến (tạo biến)
// var: từ khóa khai báo biến

//camel case - tên biến: cú pháp lưng lạc đà
// = : gán giá trị cho biến
// Kiểu dữ liệu: string, number, boolean(true.false)
// array, object

//string (chuỗi chữ)
var fullName = "Nguyễn Văn A";
console.log(fullName);

//number
var age = 20;
console.log(age);

//boolean
var isLogIn = true;
console.log(isLogIn);

//Hạn chế của ES5: cho phép đặt tên biến trùng
//Hạn chế khai báo biến trên 1 dòng ==> khó đọc khi cần sửa lỗi

var num1 = 5;
var num2 = 8;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num2 % num1);

var x = 0;
//gán lại giá trị
x = x + 1;
//rút gọn
x += 1;
//siêu rút gọn 
x++;
console.log("giá trị của x: "+ x);

var a = 0;
var b = 0;
// dấu ++ ở sau : gán giá trị rồi mới tăng biến sau
// a = b++;
// console.log(a);
// console.log(b);

// dấu ++ ở sau : gán giá trị rồi mới tăng biến sau
a = ++b;
console.log(a);
console.log(b);


/**
 * Hằng số (constant)
 * tên biến hằng số nên đặt chữ in hoa hết
 */
//3.14: số thực (float)
//3: số nguyên (int)
//declared: đã được khai báo
const PI = 3.14; // dùng khi giá trị biến được sử dụng ở nhiều chức năng
// PI = 3.1414141414; (lỗi assignment: ko được gán lại)
console.log(PI);