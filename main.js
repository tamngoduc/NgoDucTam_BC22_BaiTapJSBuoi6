/*
Bài 1: Tìm số nguyên dương nhỏ nhất sao cho 1 + 3 + ... + n > 10000

* Đầu vào:
* Xử lí:
- Khai báo biến tổng và biên số nguyên
- Sử dụng vòng lặp while với điều kiện tổng < 1000
- Khi điều kiện còn đúng thì tăng số nguyên lên 1 đơn vị
- Cộng dồn tổng số nguyên
* Đầu ra:
- Xuất ra màn hình số nguyên 
*/

var tong = 0;
var n = 0;

while (tong <= 10000) {
  n++;
  tong += n;
}

document.getElementById("bai1").innerHTML = "Số nguyên dương nhỏ nhất là: " + n;

/*
Bài 2: Nhập vào 2 số x, n tính tổng: S(n) = x + x^2+ x^3 + ... + x^n

* Đầu vào:
- Sỗ nguyên x và số nguyên ng
* Xử lí:
- Khai báo biến sô nguyên x và n
- Tạo hàm tính tổng
- Khởi tạo biến tổng và biến tích
- Sử dụng vòng lặp for
* Đầu ra:
- Xuất ra màn hình kết quả tổng 
*/

document.getElementById("btnTong").onclick = function () {
  var x = document.getElementById("numx").value;
  var n = document.getElementById("numn").value;
  var tong = tinhTong(x, n);
  document.getElementById("footerCard2").innerHTML = tong;
};

function tinhTong(x, n) {
  var tong = 0;
  var tich = 1;
  for (var i = 1; i <= n; i++) {
    tich *= x;
    tong += tich;
  }
  return tong;
}

/*
Bài 3: Tính giai thừa n

* Đầu vào:
- Số nguyên n
* Xử lí:
- Khai báo biến số nguyên n
- Tạo hàm tính giai thừa với tham só là số nguyên n
- Sử dụng vòng lặp for
- Khởi tạo biến tích với giá trị bắng 1
- Dùng vòng lặp for, với mỗi i bé hơn bằng n thì nhân dồn biến tích với i
* Đầu ra:
- Giai thừa của n
*/

document.getElementById("btnGiaiThua").onclick = function () {
  var n = document.getElementById("numn3").value;
  var giaithua = tinhGiaiThua(n);
  document.getElementById("footerCard3").innerHTML = giaithua;
};

function tinhGiaiThua(n) {
  var tich = 1;
  for (var i = 1; i <= n; i++) {
    tich *= i;
  }
  return tich;
}

/*
Bài 4: In ra màn hình 10 thẻ div  

* Đầu vào:
* Xử lí:
- Tạo biến mảng div
- Sử dụng vòng lặp for và câu điều kiện if
- Nếu chỉ số của phần tử mảng chia hết cho 2 thì div có màu xanh, ngược lại div có màu đỏ
* Đầu ra:
- 10 thẻ div
*/

var div = document.getElementsByClassName("div-element");
for (var i = 0; i < div.length; i++) {
  div[i].style.display = "none";
}

document.getElementById("btnTaoDiv").onclick = function () {
  for (var i = 0; i < div.length; i++) {
    div[i].style.display = "block";
    div[i].style.color = "white";
    if (i % 2 == 0) {
      div[i].style.background = "blue";
    } else {
      div[i].style.background = "red";
    }
  }
};
