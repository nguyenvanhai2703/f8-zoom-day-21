// array.forEach(function(currentValue, index, arr) { ... }, thisValue);
// forEach2
console.log("forEach2");

Array.prototype.forEach2 = function (callback, thisValue) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      callback.call(thisValue, this[i], i, this);
    }
  }
};

// ví dụ 1 tính tổng số trong mảng
const numbers = [1, 2, 3, 4];
let total = 0;
numbers.forEach2(function (number, index, arr) {
  total += number;
});
console.log(total);

//ví dụ 2 ( xóa thuộc tính trong mảng)
const students = [
  { name: "Hai", age: 18, address: "Ha Noi" },
  { name: "Binh", age: 18, address: "Ho Chi Minh" },
  { name: "Chien", age: 18, address: "Da Nang" },
];
students.forEach2(function (student) {
  delete student.address;
  console.log(students);
});

// ví dụ 3 log index của mảng
const fruits = ["Banana", "Mango", "Cherry"];
fruits.forEach2(function (fruit, index, arr) {
  console.log(index);
});
console.log("--------------------------------");

// const foundElement = array.find(callbackFunction, thisValue);
// find2
console.log("find2");
Array.prototype.find2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return this[i];
    }
  }
};

// ví dụ 1  tìm số đầu tiên trong mảng lơn hơn 15
const nums = [1, 12, 23, 14];
const result = nums.find2((num) => num > 15);
console.log(result);

// ví dụ 2 tìm người đầu tiên có tuổi lơn hơn 19
const peoples = [
  { name: "Hai", age: 18, address: "Ha Noi" },
  { name: "Binh", age: 20, address: "Ho Chi Minh" },
  { name: "Chien", age: 22, address: "Da Nang" },
];
const result1 = peoples.find2((people) => people.age > 19);
console.log(result1);

// ví dụ 3 tìm đồ đầu tiên có giá lớn hơn 200
const products = [
  { name: "laptop", price: 150 },
  { name: "laptop", price: 200 },
  { name: "laptop", price: 250 },
];
const item = products.find2((product) => product.price > 200);
console.log(item);
console.log("--------------------------------");

//const foundIndex = array.findIndex(callbackFunction, thisValue);
// finIndex2
console.log("findIndex2");

Array.prototype.findIndex2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (callback.call(thisArg, this[i], i, this)) {
      return i;
    }
  }
  return -1;
};
// vd1 tìm index của phân tử đầu tiên > 20
const numberss = [1, 5, 7, 10, 25, 30];
const print = numberss.findIndex2((num) => num > 20);
console.log(print);

// vd2 tìm chỉ mục của bạn có điểm tb dưới 6
const frends = [
  { name: "Hai", score: 8 },
  { name: "Binh", score: 7 },
  { name: "Hung", score: 5 },
];

const reasultfrend = frends.findIndex2((frend) => frend.score < 6);
console.log(reasultfrend);

// vd3 tìm chỉ mục của sản phẩm có tồn kho dưới 15
const goods = [
  { name: "iphone", stock: 20 },
  { name: "Tabled", stock: 15 },
  { name: "Watch", stock: 25 },
];
const newgood = goods.findIndex2((product) => product.stock < 15);
console.log(newgood);

console.log("--------------------------------");
//let newArray = array.filter(callbackFunction, thisValue);
console.log("filter2");
Array.prototype.filter2 = function (callback, thisArg) {
  const length = this.length;
  const newArray = [];
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        newArray.push(this[i]);
      }
    }
  }
  return newArray;
};

// vd1 tìm tất cả các phần tử lẻ
const so = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const list = so.filter2((number) => number % 2 !== 0);
console.log(list);

// vd 2 tìm các phần tử trùng lặp

const qua = ["Banana", "Orange", "Cherry", "Banana", "Orange", "Cherry"];
const listqua = qua.filter2((item, index, array) => {
  return array.indexOf(item) === index;
});
console.log(listqua);

// vd3  tìm chỉ mục của sinh viên có điểm tb từ 6 trở lên
const sinhvien = [
  { name: "Hai", score: 8 },
  { name: "Binh", score: 7 },
  { name: "Hung", score: 5 },
];
const listpeople = sinhvien.filter2((student) => student.score >= 6);
console.log(listpeople);
console.log("--------------------------------");

// let newArray = array.map(callbackFunction(element, index, array) {
// Trả về giá trị mới cho mỗi phần tử trong mảng mới}, thisValue);

console.log("map2");
Array.prototype.map2 = function (callback, thisArg) {
  const length = this.length;
  const result = new Array(length);
  for (let i = 0; i < length; i++) {
    if (i in this) {
      result[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return result;
};

// vd1 trả về mảng mới mà các phần tử cũ x3

const listnumbers = [1, 2, 3, 4, 5, 6, 7];

const lists = listnumbers.map2((num) => num * 3);
console.log(lists);

//  vd2 trả về mảng chứa tên sinh viên
const hocsinh = [
  { name: "Hai", score: 8 },
  { name: "Binh", score: 7 },
  { name: "Hung", score: 5 },
];

const lisths = hocsinh.map2((student) => student.name);
console.log(lisths);
console.log("--------------------------------");

//const bool = array.every(callbackFunction(element, index, array) {
// Điều kiện kiểm tra}, thisValue);

console.log("every2");

Array.prototype.every2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (!callback.call(thisArg, this[i], i, this)) {
        return false;
      }
    }
  }
  return true;
};

// ví dụ 1 đảm bảo điểm tb mọi người  đều lớn hơn 6

const names = [
  { name: "Hai", score: 8 },
  { name: "Binh", score: 7 },
  { name: "Hung", score: 5 },
];

const bool = names.every2((name) => name.score > 6);
console.log(bool);

// ví dụ 2 đảm bảo các sản phẩm đều còn hàng tồn kho

const books = [
  { name: "Toan", stock: 50 },
  { name: "Van", stock: 70 },
  { name: "anh", stock: 60 },
];

const book = books.every2((item) => item.stock > 0);
console.log(book);

// ví dụ 3 tất cae các số trong mảng đều lớn hơn 5

const lootnamber = numbers.every2((num) => num > 5);
console.log(lootnamber);
console.log("--------------------------------");

// const bool = array.some(callbackFunction(element, index, array) {
// Điều kiện kiểm tra}, thisValue);

console.log("some2");
Array.prototype.some2 = function (callback, thisArg) {
  const length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(thisArg, this[i], i, this)) {
        return true;
      }
    }
  }
  return false;
};

// ví dụ 1 kiểm tra trong mảng xem có số lẻ k
const bootnumber = listnumbers.some2((num) => num / 2 !== 0);
console.log(bootnumber);

// ví dụ 2 kiểm tra trong mảng có sinh viên nào trên 19 tuổi k

const boolpeople = peoples.some2((people) => people.age > 18);
console.log(boolpeople);

// ví dụ 3 kiểm tra xem cửa hàng sách còn tồn khó trên 60 không
const boolbook = books.some2((book) => book.stock > 60);
console.log(boolbook);

console.log("--------------------------------");

//const result = array.reduce(callbackFunction(accumulator, currentValue, currentIndex, array) {
// Trả về giá trị tích lũy}, initialValue);
console.log("reduce2");

Array.prototype.reduce2 = function (callback, initialValue) {
  let length = this.length;
  for (let i = 0; i < length; i++) {
    if (i in this) {
      if (callback.call(initialValue, this[i], i, this)) {
        return this[i];
      }
    }
  }
};

// ví dụ 1 tính tổng number

const sumnumber = numbers.reduce2((total, number) => {
  return total + number;
}, 0);
console.log(sumnumber);

// ví dụ 2 tính tổng giá trị hàng hóa

const totalprice = products.reduce2((total, product) => {
  return total + product.price;
}, 0);
console.log(totalprice);
