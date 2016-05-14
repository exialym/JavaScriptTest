/**
 * Created by exialym on 2016/5/13 0013.
 */
/***********************HTML特性添加事件处理*********************/
function clickButton(element) {
    alert(element.value);
    alert(event.type);
}
function clickBody() {
    alert("Body");
}
/***********************DOM0级添加事件处理*********************/
// var btn = document.getElementById("myButton");
// btn.onclick = function(){
//     alert(this.id);    //"myBtn"
// };
/***********************DOM2级添加事件处理*********************/
// var btn = document.getElementById("myButton");
// var body = document.body;
//
// //冒泡阶段
// body.addEventListener("click", function(){
//     alert("Hello world!");
// }, false);
// //捕获阶段
// body.addEventListener("click", function(){
//     alert("Hello world!");
// }, true);
// //如果是使用匿名函数注册的
// btn.addEventListener("click", function(){
//     alert(this.id + "匿名");
// }, false);
// //注销不掉
// btn.removeEventListener("click", function(){
//     alert(this.id);
// }, false);
// //这样就能注销掉了
// var handler = function(){
//     alert(this.id + "非匿名");
// };
// btn.addEventListener("click", handler, false);
// btn.removeEventListener("click", handler, false);
/***************************跨浏览器的事件处理****************/
// var EventUtil = {
//     addHandler: function(element, type, handler){
//         if (element.addEventListener){
//             element.addEventListener(type, handler, false);
//         } else if (element.attachEvent){
//             element.attachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = handler;
//         }
//     },
//     removeHandler: function(element, type, handler){
//         if (element.removeEventListener){
//             element.removeEventListener(type, handler, false);
//         } else if (element.detachEvent){
//             element.detachEvent("on" + type, handler);
//         } else {
//             element["on" + type] = null;
//         }
//     }
// };
// var btn = document.getElementById("myButton");
// var handler = function(event){
//     alert(event.currentTarget);
// };
// EventUtil.addHandler(btn, "click", handler);
// //EventUtil.removeHandler(btn, "click", handler);
/***************************事件对象****************/
// var btn = document.getElementById("myButton");
// var body = document.body;
// var handler = function(event){
//     alert(this.id);
//     alert(event.currentTarget);
//     alert(event.bubbles);
//     alert(event.cancelable);
//     alert(event.detail);
//     alert(event.defaultPrevented);
//     alert(event.eventPhase);
//     alert(event.target);
//     alert(event.type);
//     alert(event.view);
//     event.stopPropagation();
// };
// btn.addEventListener("click", handler, false);
// body.addEventListener("click", handler, false);
/***************************跨浏览器的事件处理和事件对象工具****************/
var EventUtil = {
    addHandler: function(element, type, handler){
        if (element.addEventListener){
            element.addEventListener(type, handler, false);
        } else if (element.attachEvent){
            element.attachEvent("on" + type, handler);
        } else {
            element["on" + type] = handler;
        }
    },
    removeHandler: function(element, type, handler){
        if (element.removeEventListener){
            element.removeEventListener(type, handler, false);
        } else if (element.detachEvent){
            element.detachEvent("on" + type, handler);
        } else {
            element["on" + type] = null;
        }
    },
    getEvent: function(event){
        return event ? event : window.event;
    },
    getTarget: function(event){
        return event.target || event.srcElement;
    },
    preventDefault: function(event){
        if (event.preventDefault){
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }
};
var link = document.getElementById("link");
var body = document.body;
var handler = function (event) {
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    EventUtil.preventDefault(event);
    EventUtil.stopPropagation(event);
    alert(target);
    alert(event.target);
}
link.addEventListener("click", handler, false);
body.addEventListener("click", handler, false);
