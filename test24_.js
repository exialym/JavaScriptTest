/**
 * Created by exialym on 2016/6/2 0002.
 */
/**********************避免全局变量******************/
//这样并不合适
// var name = "Nicholas";
// function sayName(){
//     alert(name);
// }
// //改成这样就不会有问题啦
// var MyApplication = {
//     name: "Nicholas",
//     sayName: function(){
//         alert(this.name);
//     }
// };
// MyApplication.sayName();
//
// var Exia = {};
// Exia.ProJS = {};
// Exia.ProJS.EventUtil = {};
// Exia.ProJS.CookieUtil = {};
/**********************避免与null作比较******************/
// function sortArray(values){
//     if (values != null){
//         values.sort(comparator);
//     }
// }
//
// function sortArray(values){
//     if (values instanceof Array){
//         values.sort(comparator);
//     }
// }
/**********************使用常量******************/
// var Constants = {
//     INVALID_VALUE_MSG: "Invalid value!",
//     INVALID_VALUE_URL: "/errors/invalid.php"
// };
/**********************把全局变量先存起来******************/
// function updateUI(){
//     var doc = document;
//     var imgs = doc.getElementsByTagName("img");
//     for (var i=0, len=imgs.length; i < len; i++){
//         imgs[i].title = doc.title + " image " + i;
//     }
//     var msg = doc.getElementById("mydiv");
//     msg.innerHTML = "Update complete.";
// }
/**********************避免使用with******************/
// function updateBody(){
//     alert(document.body.tagName);
//     document.body.innerHTML = "Hello world!";
// }
// function updateBody(){
//     with(document.body){
//         alert(tagName);
//         innerHTML = "Hello world!";
//     }
// }
// function updateBody(){
//     var body = document.body;
//     alert(body.tagName);
//     body.innerHTML = "Hello world!";
// }
/**********************Duff装置******************/
// var iterations = Math.floor(values.length / 8);
// var leftover = values.length % 8;
// var i = 0;
// if (leftover > 0){
//     do {
//         process(values[i++]);
//     } while (--leftover > 0);
// }
// do {
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
//     process(values[i++]);
// } while (--iterations > 0);
/**********************使用HTMLCollection时要小心******************/
// var images = document.getElementsByTagName("img"),
//     image,
//     i,
//     len;
// for (i=0, len=images.length; i < len; i++){
//     image = images[i];
//     //其他操作
// }