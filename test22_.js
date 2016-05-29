/**
 * Created by exialym on 16/5/29.
 */
/**********************安全的类型检测*******************/
// function isArray(value){
//     return Object.prototype.toString.call(value) == "[object Array]";
// }
// function isFunction(value){
//     return Object.prototype.toString.call(value) == "[object Function]";
// }
// function isRegExp(value){
//     return Object.prototype.toString.call(value) == "[object RegExp]";
// }
// var isNativeJSON = window.JSON && Object.prototype.toString.call(JSON) == "[object JSON]";
// alert(isNativeJSON);
/**********************作用域安全的构造函数*******************/
// function Person(name, age, job){
//     if (this instanceof Person){
//         this.name = name;
//         this.age = age;
//         this.job = job;
//     } else {
//         return new Person(name, age, job);
//     }
// }
// var person1 = Person("Nicholas", 29, "Software Engineer");
// alert(window.name);      //""
// alert(person1.name);     //"Nicholas"
// var person2 = new Person("Shelby", 34, "Ergonomist");
// alert(person2.name);     //"Shelby"
/**********************作用域安全的构造函数对继承造成的问题*******************/
// function Polygon(sides){
//     if (this instanceof Polygon) {
//         this.sides = sides;
//         this.getArea = function(){
//             return 0;
//         };
//     } else {
//         return new Polygon(sides);
//     }
// }
// function Rectangle(width, height){
//     //这里调用时,传进去的this是Rectangle类型的,没办法拓展side属性
//     Polygon.call(this, 2);
//     this.width = width;
//     this.height = height;
//     this.getArea = function(){
//         return this.width * this.height;
//     };
// }
// var rect = new Rectangle(5, 10);
// alert(rect.sides);        //undefined
// Rectangle.prototype = new Polygon();
// var rectNew = new Rectangle(5, 10);
// alert(rectNew.sides);        //2
/**********************惰性载入函数---第一次调用时指定*******************/
// function createXHR(){
//     if (typeof XMLHttpRequest != "undefined"){
//         createXHR = function(){
//             return new XMLHttpRequest();
//         };
//     } else if (typeof ActiveXObject != "undefined"){
//         createXHR = function(){
//             if (typeof arguments.callee.activeXString != "string"){
//                 var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
//                         "MSXML2.XMLHttp"],
//                         i, len;
//                 for (i=0,len=versions.length; i < len; i++){
//                     try {
//                         new ActiveXObject(versions[i]);
//                         arguments.callee.activeXString = versions[i];
//                         break;
//                     } catch (ex){
//                         //skip
//                     }
//                 }
//             }
//             return new ActiveXObject(arguments.callee.activeXString);
//         };
//     } else {
//         createXHR = function(){
//             throw new Error("No XHR object available.");
//         };
//     }
//     return createXHR();
// }
// createXHR();
// alert(createXHR);
/**********************惰性载入函数---函数声明时指定*******************/

// var createXHR = (function(){
//     if (typeof XMLHttpRequest != "undefined"){
//         return function(){
//             return new XMLHttpRequest();
//         };
//     } else if (typeof ActiveXObject != "undefined"){
//         return function(){
//             if (typeof arguments.callee.activeXString != "string"){
//                 var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
//                     "MSXML2.XMLHttp"],
//                     i, len;
//                 for (i=0,len=versions.length; i < len; i++){
//                     try {
//                         new ActiveXObject(versions[i]);
//                         arguments.callee.activeXString = versions[i];
//                         break;
//                     } catch (ex){
//                         //skip
//                     }
//                 }
//             }
//             return new ActiveXObject(arguments.callee.activeXString);
//         };
//     } else {
//         return function(){
//             throw new Error("No XHR object available.");
//         };
//     }
// })();
// alert(createXHR);
/**********************函数绑定---this被篡改*******************/
// var handler = {
//     message: "Event handled",
//     handleClick: function(event){
//         alert(this);
//         alert(this.message);
//     }
// };
// var btn = document.getElementById("myButton");
// EventUtil.addHandler(btn, "click", handler.handleClick);  //[object HTMLButtonElement]  undefined
// handler.handleClick();  //   [object Object]   Event handled
/**********************函数绑定---保护环境*******************/
// var handler = {
//     message: "Event handled",
//     handleClick: function(event){
//         alert(this); //   [object Object]
//         alert(this.message); //   Event handled
//     } };
// var btn = document.getElementById("myButton");
// EventUtil.addHandler(btn, "click", function(event){
//     alert(this);  //[object HTMLButtonElement]
//     handler.handleClick(event);
// });
/**********************函数绑定---使用工具函数*******************/
// var handler = {
//     message: "Event handled",
//     handleClick: function(event){
//         alert(this); //   [object Object]
//         alert(this.message); //   Event handled
//     } };
// var btn = document.getElementById("myButton");
// function bind(fn, context){
//     alert(arguments[0]);  //fn本身
//     return function(){
//         alert(arguments[0]); //[object MouseEvent]
//         return fn.apply(context, arguments);
//     };
// }
// //EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler));
// //原生bind
// EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler));
/**********************函数柯里化*******************/
// function curry(fn){
//     var args = Array.prototype.slice.call(arguments, 1);
//     return function(){
//         var innerArgs = Array.prototype.slice.call(arguments);
//         var finalArgs = args.concat(innerArgs);
//         return fn.apply(null, finalArgs);
//     };
// }
// function add(a,b) {
//     alert(a);
//     alert(b);
//     alert(a+b);
// }
// var curriedAdd = curry(add, 5);
// curriedAdd(3);   //8
// curriedAdd = curry(add, 3);
// curriedAdd(5);   //8
// curriedAdd = curry(add, 5,3);
// curriedAdd();   //8
/**********************函数柯里化应用*******************/
function bind(fn, context){
    var args = Array.prototype.slice.call(arguments, 2);
    return function(){
        var innerArgs = Array.prototype.slice.call(arguments);
        var finalArgs = args.concat(innerArgs);
        return fn.apply(context, finalArgs);
    };
}
var handler = {
    message: "Event handled",
    handleClick: function(name, event){
        alert(this.message + ":"+ name + ":"+ event.type);
    }
};
var btn = document.getElementById("myButton");
//EventUtil.addHandler(btn, "click", bind(handler.handleClick, handler, "myButton"));
EventUtil.addHandler(btn, "click", handler.handleClick.bind(handler, "myButton"));
