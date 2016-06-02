/**
 * Created by exialym on 2016/6/2 0002.
 */
/**********************避免全局变量******************/
//这样并不合适
var name = "Nicholas";
function sayName(){
    alert(name);
}
//改成这样就不会有问题啦
var MyApplication = {     
    name: "Nicholas",     
    sayName: function(){         
        alert(this.name);     
    } 
}; 
MyApplication.sayName();

var Exia = {};
Exia.ProJS = {};
Exia.ProJS.EventUtil = {};
Exia.ProJS.CookieUtil = {};
/**********************避免与null作比较******************/
function sortArray(values){
    if (values != null){
        values.sort(comparator);
    }
}

function sortArray(values){
    if (values instanceof Array){
        values.sort(comparator);
    }
}
var Constants = {
    INVALID_VALUE_MSG: "Invalid value!",
    INVALID_VALUE_URL: "/errors/invalid.php"
};
