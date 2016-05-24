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
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    alert(xhr.readyState);
    if (xhr.readyState == 4){
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304){
            alert(xhr.responseText);
        } else {
            alert("Request was unsuccessful: " + xhr.status);
        }
    }
};
xhr.open("get", "16_.html", true);
xhr.send(null);