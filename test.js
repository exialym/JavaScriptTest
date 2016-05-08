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
//navigator.registerContentHandler("application/rss+xml", "http://www.somereader.com?feed=%s", "Some Reader");
//alert(history.length);
//////////////////////////////////浏览器能力检测//////////////////////////
// function isHostMethod(object, property) {
//     var t = typeof object[property];
//     return t=='function' || (!!(t=='object' && object[property])) || t=='unknown';
// }
// alert(isHostMethod("asdf","replace"));
//////////////////////////////////////////////////////////浏览器bug检测///////////////////////////
// var hasDontEnumQuirk = function(){
//     var o = { toString : function(){} };
//     for (var prop in o) {
//         if (prop == "toString"){
//             return false;
//         }
//     }
//     return true;
// }();
////////////////////////////////////////////////用户代理字符串检测///////////////////////////
// var client = function(){
//     //识别呈现引擎
//     var engine = {
//         ie: 0,
//         gecko: 0,
//         webkit: 0,
//         khtml: 0,
//         opera: 0,
//         ver: null
//     };
//     //识别浏览器
//     var browser = {
//         ie: 0,
//         firefox: 0,
//         safari: 0,
//         konq: 0,
//         opera: 0,
//         chrome: 0,
//         ver: null
//     };
//     //识别平台
//     var system = {
//         win: false,
//         mac: false,
//         x11: false,
//         iphone: false,
//         ipod: false,
//         ipad: false,
//         ios: false,
//         android: false,
//         nokiaN: false,
//         winMobile: false,
//         wii: false,
//         ps: false
//     };
//     var ua = navigator.userAgent;
//     //Opera是会伪装的，所以先检查它
//     if (window.opera){
//         engine.ver = browser.ver = window.opera.version();
//         engine.opera = browser.opera = parseFloat(engine.ver);
//     //在WebKit中包含了Gecko和Khtml，所以应该先检查它
//     } else if (/AppleWebKit\/(\S+)/.test(ua)){
//         engine.ver = RegExp["$1"];
//         engine.webkit = parseFloat(engine.ver);
//         //chrome使用Webkit
//         if (/Chrome\/(\S+)/.test(ua)){
//             browser.ver = RegExp["$1"];
//             browser.chrome = parseFloat(browser.ver);
//         //safari使用webkit
//         } else if (/Version\/(\S+)/.test(ua)){
//             browser.ver = RegExp["$1"];
//             browser.safari = parseFloat(browser.ver);
//         } else {
//             //safari3以下不能用上面的代码检测版本，使用下面的吧
//             var safariVersion = 1;
//             if (engine.webkit < 100){
//                 safariVersion = 1;
//             } else if (engine.webkit < 312){
//                 safariVersion = 1.2;
//             } else if (engine.webkit < 412){
//                 safariVersion = 1.3;
//             } else {
//                 safariVersion = 2;
//             }
//             browser.safari = browser.ver = safariVersion;
//         }
//     //在Khtml中包含了Gecko，所以应该先检查它
//     } else if (/KHTML\/(\S+)/.test(ua) || /Konqueror\/([^;]+)/.test(ua)){
//         engine.ver = browser.ver = RegExp["$1"];
//         engine.khtml = browser.konq = parseFloat(engine.ver);
//     //最后检测Khtml
//     } else if (/rv:([^\)]+)\) Gecko\/\d{8}/.test(ua)){
//         engine.ver = RegExp["$1"];
//         engine.gecko = parseFloat(engine.ver);
//         //是不是Firefox
//         if (/Firefox\/(\S+)/.test(ua)){
//             browser.ver = RegExp["$1"];
//             browser.firefox = parseFloat(browser.ver);
//         }
//     //IE的特征比较好检测
//     } else if (/MSIE ([^;]+)/.test(ua)){
//         engine.ver = browser.ver = RegExp["$1"];
//         engine.ie = browser.ie = parseFloat(engine.ver);
//     }
//     browser.ie = engine.ie;
//     browser.opera = engine.opera;
//
//
//     //识别平台
//     var p = navigator.platform;
//     system.win = p.indexOf("Win") == 0;
//     system.mac = p.indexOf("Mac") == 0;
//     system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//     if (system.win){
//         if (/Win(?:dows )?([^do]{2})\s?(\d+\.\d+)?/.test(ua)){
//             if (RegExp["$1"] == "NT"){
//                 switch(RegExp["$2"]){
//                     case "5.0":
//                         system.win = "2000";
//                         break;
//                     case "5.1":
//                         system.win = "XP";
//                         break;
//                     case "6.0":
//                         system.win = "Vista";
//                         break;
//                     case "6.1":
//                         system.win = "7";
//                         break;
//                     default:
//                         system.win = "NT";
//                         break;
//                 }
//             } else if (RegExp["$1"] == "9x"){
//                 system.win = "ME";
//             } else {
//                 system.win = RegExp["$1"];
//             }
//         }
//     }
//     system.iphone = ua.indexOf("iPhone") > -1;
//     system.ipod = ua.indexOf("iPod") > -1;
//     system.ipad = ua.indexOf("iPad") > -1;
//     system.nokiaN = ua.indexOf("NokiaN") > -1;
//     //windows mobile
//     if (system.win == "CE"){
//         system.winMobile = system.win;
//     } else if (system.win == "Ph"){
//         if(/Windows Phone OS (\d+.\d+)/.test(ua)){
//             system.win = "Phone";
//             system.winMobile = parseFloat(RegExp["$1"]);
//         }
//     }
//     // iOS
//     if (system.mac && ua.indexOf("Mobile") > -1){
//         if (/CPU (?:iPhone )?OS (\d+_\d+)/.test(ua)){
//             system.ios = parseFloat(RegExp.$1.replace("_", "."));
//         } else {
//             system.ios = 2;
//         }
//     }
//     // Android
//     if (/Android (\d+\.\d+)/.test(ua)){
//         system.android = parseFloat(RegExp.$1);
//     }
//     system.wii = ua.indexOf("Wii") > -1;
//     system.ps = /playstation/i.test(ua);
//     return {
//         engine:engine,
//         browser:browser,
//         system:system
//     };
// }();
// alert(client.browser.firefox);
// /////////////////////////////////////////////////node节点类型///////
// var htmlNode = document.getElementsByTagName("html")[0];
// if (htmlNode.nodeType == 1){
//     alert("Node is an element.");
//     alert(htmlNode.nodeName);
//     alert(htmlNode.nodeValue);
// }
// var bodyNode = document.getElementsByTagName("body")[0];
// var childList = bodyNode.childNodes;
// var childListArray = Array.prototype.slice.call(childList,0);
// alert(childList.length);  //8
// alert(childListArray.length);  //8
// bodyNode.removeChild(bodyNode.lastChild);
// alert(childList.length);  //7
// alert(childListArray.length);  //8
// //alert($.fn.jquery);
///////////////////////////////////////////////////Document类型///////////
// alert(document.doctype.name);
// document.write("<strong>" + (new Date()).toString() + "</strong>");
// window.onload = function(){
//     document.write("Hello world!");
// };
///////////////////////////////////////////////////Element类型////////////
// alert(Element.prototype.getAttribute);
// var div = document.createElement("div");
// div.id = "myNewDiv";
// div.className = "box";
// document.body.appendChild(div);
//////////////////////////////////////Text类型////////////////////////
// var element = document.createElement("div");
// element.className = "message";
// //这里的大于小于号之类的会被转义，不会被解释为元素标签
// var textNode = document.createTextNode("<strong>Hello</strong> world!");
// element.appendChild(textNode);
// //多个相邻文本节点会被拼接
// var anotherTextNode = document.createTextNode("Yippee!");
// element.appendChild(anotherTextNode);
// document.body.appendChild(element);
// //多个相邻节点导致混乱
// alert(element.childNodes.length);    //2
// //这个方法合并相邻文本节点
// element.normalize();
// alert(element.childNodes.length);    //1
// alert(element.firstChild.nodeValue);
// //拆分节点
// var newNode = element.firstChild.splitText(5);
// alert(element.firstChild.nodeValue); //"Hello"
// alert(newNode.nodeValue); //" world!"
// alert(element.childNodes.length); //2
//////////////////////////////////////DocumentFragment类型////////////////////////
var fragment = document.createDocumentFragment();
var ul = document.getElementById("myList");
var li = null;
for (var i=0; i < 3; i++){
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i+1)));
    fragment.appendChild(li);
}
//当你将一个文档片段添加到文档中时,会把文档片段中的所有节点添加至文档的当前位置,而文档片段本身永远不会出现在文档中
ul.appendChild(fragment);