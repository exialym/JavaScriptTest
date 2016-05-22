/**
 * Created by exialym on 16/5/21.
 */
// try{
//     //可能出错的代码
//     asdfjsald
// } catch(error){
//     alert("errrrror");
//     alert(error.message);
// }
// alert("out");
// function testFinally(){
//     //return "noTry";
//     try {
//         return 2;
//     } catch (error){
//         return 1;
//     } finally {
//         return 0; }
// }
// alert(testFinally());
/**********************类型转换错误*******************/
function concat(str1, str2, str3){
    var result = str1 + str2;
    if (str3){ //   不要这样  !!!
        result += str3;
    }
    return result;
}
function concat(str1, str2, str3){
    var result = str1 + str2;
    if (typeof str3 == "string"){
        result += str3;
    }
    return result;
}
/**********************数据类型错误*******************/
function reverseSort(values){
    //if (values != null)
    //if (typeof values.sort == "function")
    //if (values){
    //上面的检测都不靠谱
    if (values instanceof Array){
        values.sort();
        values.reverse();
    }
}
/**********************通信错误*******************/
function addQueryStringArg(url, name, value){
    if (url.indexOf("?") == -1){
        url += "?";
    } else {
        url += "&";
    }
    url += encodeURIComponent(name) + "=" + encodeURIComponent(value);
    return url;
}
/**********************把错误记录到服务器*******************/
function logError(sev, msg){
    var img = new Image();
    img.src = "log.php?sev=" + encodeURIComponent(sev) + "&msg=" +
        encodeURIComponent(msg);
}