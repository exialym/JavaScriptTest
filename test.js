/**
 * Created by exialym on 16/4/7.
 */
///////////////////基本数据类型、函数的参数列表、全等符号、日期类型////////////////////////////////////////////
// var time = new Object();
// var arrayTest = [1,2,3,4,5,6,7];
// //alert(Infinity/2345632450);
// function doAdd(num1, num2) {
//     arguments[1] = 10;
//     alert(arguments[0] + num2);
// }
// //doAdd(1,1);
// var object1 = {name: "a"};
// var object2 = {name: "a"};
// //alert(object1===object2);
// var now = new Date();
// now = Date.now();
//alert(now);
//////////////////////////////函数名与函数对象的关系/////////////////////////////////////////////
// function sum(num1, num2){
//   return num1 + num2;
// }
// alert(sum(10,10));        //20
// var anotherSum = sum;
// alert(anotherSum(10,10)); //20
// sum = function (num1, num2){
//   return num1 - num2;
// };
// alert(anotherSum(10,10)); //20
// alert(sum(10,10)); //0
///////////////////////////对象是引用类型的值////////////////////////////////////
// var a = {
//   name:1
// };
// var b = a;
// b.name = 2;
// alert(a.name);  //2
/////////////////数组是一种内置对象////////////////////////
// var array1 = [1,2];
// var array2 = array1;
// array1.pop();
// array1 = [2,1]
// alert(array2); //1
// alert(array1); //[2,1]
/////////////////////函数可以被作为返回值，这样返回的变量就是一个可以调用的函数/////////////////////////////////
// function createComparisonFunction(m) {
//   return function(o1, o2){
//     return m+o1+o2;
//   };
// }
// var func = createComparisonFunction(1)
// alert(func(2,3));
// alert(createComparisonFunction(1)(11,0));




/////////////////////////使用for in循环循环数组时在数组被添加了额外的属性和方法时会有问题，毕竟forin是用来循环属性的///////////////////////////////////////////////
// Array.prototype.test=function(){
//
// }
// var colors = ["red", "blue", "green"];
// //colors[3] = 2;
// //var a = colors.toString();
// //var b  = colors.valueOf();
// //alert(colors.length);
// //////////不能用for-in循环Array 的原因
// for(var i in colors){
//     alert(colors[i])
// }
//////////////////////////属性的特性配置/////////////////////////////////////
// var person = {};
// Object.defineProperty(person, "name", {
//     configurable: false,
//     writable: true,
//     value: "Nicholas"
// });
// alert(person.name); //"Nicholas"
// Object.defineProperty(person, "name", {
//     enumerable: true
// });
// alert(person.name); //"Nicholas"
////////////////////////////构造函数法初始化对象////////////////////////////
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = new Function("alert(this.name)");
// }
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "Doctor");
// alert(person1.sayName == person2.sayName);  //false
//////////////////////////解决构造函数函数重用问题，但是又带来了封装的问题/////////////////////////////////////////////
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = sayName;
// }
// function sayName(){
//     alert(this.name);
// }
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "Doctor");
// alert(person1.sayName == person2.sayName);  //true
////////////////////////////使用原型使方法可重用，但是属性也共享了///////////////////////////////////////////////
// function Person(){
// }
// Person.prototype.name = "Nicholas";
// Person.prototype.age = 29;
// Person.prototype.job = "Software Engineer";
// Person.prototype.sayName = function(){
//     alert(this.name);
// };
// var person1 = new Person();
// //person1.sayName();   //"Nicholas"
// var person2 = new Person();
// //person2.sayName(); //"Nicholas"
// //alert(person1.sayName == person2.sayName);  //true
// //alert(person1.job);
// alert(Object.getOwnPropertyNames(person1));
///////////////////////////////简单的原型模式////////////////////////////////////
// function Person(){
// }
// Person.prototype = {
//     constructor: Person,
//     name : "Nicholas",
//     age : 29,
//     job : "Software Engineer",
//     friends : ["Shelby", "Court"],
//     sayName : function () {
//         alert(this.name);
//     }
// };
// var person1 = new Person();
// var person2 = new Person();
// person1.friends.push("Van");
// alert(person1.friends);    //"Shelby,Court,Van"
// alert(person2.friends);    //"Shelby,Court,Van"
// alert(person1.friends === person2.friends);  //true
// alert(Person.prototype === Object.getPrototypeOf(person1));
//////////////////////组合使用构造函数模式和原型模式//////////////////////////////////////
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     //
//     if (typeof this.sayName != "function"){
//         Person.prototype = {
//             sayName : function () {
//                 alert(this.name);
//             }
//         }
//     }
// }
// var friend = new Person("Nicholas", 29, "Software Engineer");
// var friend1 = new Person("Nicholas", 29, "Software Engineer");
// //friend.sayName();
// alert(Person.prototype === Object.getPrototypeOf(friend));
// alert(Person.prototype === Object.getPrototypeOf(friend1));

/////////////////////////稳妥构造函数////////////////////////////////////////
// function Person(name, age, job){
//     var o = new Object();
//     //这难道不是一个闭包？？？？
//     o.sayName = function(){
//         alert(name);
//     };
//     return o;
// }
// var friend = Person("Nicholas", 29, "Software Engineer");
// friend.sayName();  //"Nicholas"
///////////////////////////////原型式继承，基于已有的对象创建新对象////////////////////////////////////
// function object(o){
//     function F(){}
//     F.prototype = o;
//     return new F();
// }
// var person = {
//     name: "Nicholas",
//     friends: ["Shelby", "Court", "Van"]
// };
// var anotherPerson = object(person);
// anotherPerson.name = "Greg";
// alert(anotherPerson.name);  //Greg
// alert(Object.getPrototypeOf(anotherPerson).name); //Nicholas
// Object.getPrototypeOf(anotherPerson).name = "qwe";
// alert(Object.getPrototypeOf(anotherPerson).name); //qwe
// anotherPerson.friends=["gkhj"];
// alert(anotherPerson.friends); //qwe
// var yetAnotherPerson = object(person);
// yetAnotherPerson.name = "Linda";
// yetAnotherPerson.friends.push("Barbie");
// alert(Object.getPrototypeOf(yetAnotherPerson).name); //qwe
// alert(person.friends);   //"Shelby,Court,Van,Rob,Barbie"

/////////////////组合继承，函数可复用，实例属性还是自己的/////////////////////////////////////
// function SuperType(name){
//     this.name = name;
//     this.colors = ["red", "blue", "green"];
// }
// SuperType.prototype.sayName = function(){
//     alert(this.name);
// };
// function SubType(name, age){
//     SuperType.call(this, name);
//     this.age = age;
// }
// SubType.prototype = new SuperType();
// SubType.prototype.constructor = SubType;
// SubType.prototype.sayAge = function(){
//     alert(this.age);
// };
// var instance1 = new SubType("Nicholas", 29);
// instance1.colors.push("black");
// alert(instance1.colors);      //"red,blue,green,black"
// alert(Object.getPrototypeOf(instance1).colors);
// instance1.sayName();          //"Nicholas";
// instance1.sayAge();           //29
// var instance2 = new SubType("Greg", 27);
// alert(instance2.colors);      //"red,blue,green"
// instance2.sayName();          //"Greg";
// instance2.sayAge();           //27
///////////////////////////////没有块级作用域///////////////////////////////////
// function createFunctions(){
//     var result = new Array();
//     for (var i=0; i < 10; i++){
//         result[i] = function(){
//             return i;
//         };
//     }
//     return result;
// }
// var a = createFunctions();
// alert(a[1]());   //10
//////////////////////////窗口位置////////////////////////////////
// var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
// var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
// alert(leftPos + "" + topPos);
// window.moveTo(200,300);
////////////////////////Location对象//////////////////////////////
// location.assign("http://www.baidu.com");
// location.replace("http://www.baidu.com/");
////////////////////////////navigator对象,history对象///////////////////////////////////
//navigator.registerContentHandler("application/rss+xml",     "http://www.somereader.com?feed=%s", "Some Reader");
//alert(history.length);
//////////////////////////////////浏览器能力检测//////////////////////////
// function isHostMethod(object, property) {
//     var t = typeof object[property];
//     return t=='function' || (!!(t=='object' && object[property])) || t=='unknown';
// }
// alert(isHostMethod("asdf","replace"));
////////////////////////////////浏览器bug检测///////////////////////////
var hasDontEnumQuirk = function(){
    var o = { toString : function(){} };
    for (var prop in o) {
        if (prop == "toString"){
            return false;
        }
    }
    return true;
}();