/**
 * Created by exialym on 16/4/7.
 */
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
///////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////
// function Person(name, age, job){
//     this.name = name;
//     this.age = age;
//     this.job = job;
//     this.sayName = new Function("alert(this.name)");
// }
// var person1 = new Person("Nicholas", 29, "Software Engineer");
// var person2 = new Person("Greg", 27, "Doctor");
// alert(person1.sayName == person2.sayName);  //false
///////////////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////////////
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
////////////////////////////////////////////////////////////
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
///////////////////////////////////////////////////////////////////
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
/////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////////////
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
//////////////////////////////////////////////////////////
var leftPos = (typeof window.screenLeft == "number") ? window.screenLeft : window.screenX;
var topPos = (typeof window.screenTop == "number") ? window.screenTop : window.screenY;
alert(leftPos + "" + topPos);
window.moveTo(200,300);