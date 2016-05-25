/**
 * Created by exialym on 16/5/24.
 */
/**********************同步请求数据*******************/
// var xhr = new XMLHttpRequest();
// xhr.open("get", "16_.html", false);
// xhr.send(null);
// if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//     alert(xhr.responseText);
// } else {
//     alert("Request was unsuccessful: " + xhr.status);
// }
/**********************异步请求数据*******************/
// var xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function(){
//     //alert(xhr.readyState);
//     if (xhr.readyState == 4){
//         if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
//             //alert(xhr.responseText);
//         } else {
//             //alert("Request was unsuccessful: " + xhr.status);
//         }
//         alert(xhr.getResponseHeader("Cache-Control"));
//         alert(xhr.getAllResponseHeaders());
//     }
//
// };
// xhr.open("get", "16_.html", true);
// //自定义头部
// xhr.setRequestHeader("MyHeader", "MyValue");
// xhr.send(null);
/**********************GET请求数据*******************/
var xhr = new XMLHttpRequest();
function addURLParam(url, name, value) {
    url += (url.indexOf("?") == -1 ? "?" : "&");
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}
var url = "example.php";
url = addURLParam(url, "name", "Nicholas");
url = addURLParam(url, "book", "Professional JavaScript");

xhr.open("get", url, true);
xhr.send(null);
/**********************POST请求数据*******************/
var xhr = new XMLHttpRequest();
xhr.open("post", "postexample.php", true);
//模仿表单提交
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
var form = document.getElementById("user-info");
xhr.send(serialize(form));