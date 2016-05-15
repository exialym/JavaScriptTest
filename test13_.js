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
    getRelatedTarget: function(event){
        if (event.relatedTarget){
            return event.relatedTarget;
        } else if (event.toElement){
            return event.toElement;
        } else if (event.fromElement){
            return event.fromElement;
        } else {
            return null;
        }
    },
    stopPropagation: function(event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    },
    getButton: function(event){
        if (document.implementation.hasFeature("MouseEvents", "2.0")){
            return event.button;
        } else {
            switch(event.button){
                case 0:
                case 1:
                case 3:
                case 5:
                case 7:
                    return 0;
                case 2:
                case 6:
                    return 2;
                case 4:
                    return 1;
            }
        }
    },
    getCharCode: function(event){
        if (typeof event.charCode == "number"){
            return event.charCode;
        } else {
            return event.keyCode;
        }
    },
    getWheelDelta: function(event) {
        if (event.wheelDelta) {
            return (client.engine.opera && client.engine.opera < 9.5 ?
                -event.wheelDelta : event.wheelDelta);
        } else {
            return -event.detail * 40;
        }
    }
};
// var link = document.getElementById("link");
// var body = document.body;
// var handler = function (event) {
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     EventUtil.preventDefault(event);
//     EventUtil.stopPropagation(event);
//     alert(target);
//     alert(event.target);
// }
// link.addEventListener("click", handler, false);
// body.addEventListener("click", handler, false);

/***************************onLoad事件***************/
// EventUtil.addHandler(window, "load", function(){
//     var image = document.createElement("img");
//     EventUtil.addHandler(image, "load", function(event){
//         event = EventUtil.getEvent(event);
//         alert(EventUtil.getTarget(event).src);
//     });
//     //就算不吧img添加到文档,只要设置了SRC就会开始下载
//     //document.body.appendChild(image);
//     image.src = "http://www.feng.com/images/icon_01.png";
// });
/***************************unLoad事件***************/
// EventUtil.addHandler(window, "unload", function(event){
//     alert("Unloaded");
// });
/***************************resize事件***************/
// EventUtil.addHandler(window, "resize", function(event){
//     alert("Resized");
// });
/***************************scroll事件***************/
// EventUtil.addHandler(document.getElementById("scrollTest"), "scroll", function(event){
//     alert("div Scrolled");
// });
// EventUtil.addHandler(window, "scroll", function(event){
//     alert("window Scrolled");
// });
/************************焦点事件**************/
// var btn = document.getElementById("textField");
// btn.addEventListener("focus",function () {
//     console.log("qqq");
// },false);
// btn.addEventListener("focusin",function () {
//     console.log("q");
// },false);
/*********************鼠标事件视口坐标*****************/
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "click", function(event){
//     event = EventUtil.getEvent(event);
//     alert("Client coordinates: " + event.clientX + "," + event.clientY);
// });
/*********************鼠标事件页面坐标*****************/
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "click", function(event){
//     event = EventUtil.getEvent(event);
//     alert("Page coordinates: " + event.pageX + "," + event.pageY);
// });
/*********************鼠标事件修改键*****************/
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "click", function(event){
//     event = EventUtil.getEvent(event);
//     var keys = new Array();
//     if (event.shiftKey){
//         keys.push("shift");
//     }
//     if (event.ctrlKey){
//         keys.push("ctrl");
//     }
//     if (event.altKey){
//         keys.push("alt");
//     }
//     if (event.metaKey){
//         keys.push("meta");
//     }
//     alert("Keys: " + keys.join(","));
// });
/*********************鼠标事件相关元素*****************/
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "mouseout", function(event){
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     var relatedTarget = EventUtil.getRelatedTarget(event);
//     alert("Moused out of " + target.tagName + " to " + relatedTarget.tagName);
// });
/*********************鼠标事件按键检测*****************/
// var div = document.getElementById("myDiv");
// EventUtil.addHandler(div, "mousedown", function(event){
//     event = EventUtil.getEvent(event);
//     alert(EventUtil.getButton(event));
// });
/*********************鼠标事件滚轮*****************/
// EventUtil.addHandler(document, "mousewheel", function(event){
//     event = EventUtil.getEvent(event);
//     var delta = (client.engine.opera && client.engine.opera < 9.5 ?
//         -event.wheelDelta : event.wheelDelta);
//     alert(delta);
// });
// EventUtil.addHandler(window, "DOMMouseScroll", function(event){
//     event = EventUtil.getEvent(event);
//     alert(event.detail);
// });
/*********************键盘事件*****************/
// var textbox = document.getElementById("textField");
// EventUtil.addHandler(textbox, "keyup", function(event){
//     event = EventUtil.getEvent(event);
//     alert(event.keyCode);
// });
// EventUtil.addHandler(textbox, "keypress", function(event) {
//     event = EventUtil.getEvent(event);
//     alert(String.fromCharCode(EventUtil.getCharCode(event)));
// });
/*********************文本事件*****************/
// var textbox = document.getElementById("textField");
// EventUtil.addHandler(textbox, "textInput", function(event){
//     event = EventUtil.getEvent(event);
//     alert(event.data);
// });
/*********************contextmenu事件****************/
EventUtil.addHandler(document, "contextmenu", function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
    var menu = document.getElementById("myMenu");
    menu.style.left = event.pageX + "px";
    menu.style.top = event.pageY + "px";
    menu.style.visibility = "visible";
});
/*********************beforeunload事件****************/
// EventUtil.addHandler(window, "beforeunload", function(event){
//     event = EventUtil.getEvent(event);
//     var message = "I'm really going to miss you if you go.";
//     event.returnValue = message;
//     return message;
// });
/*********************DOMContentLoaded事件****************/
// EventUtil.addHandler(document, "DOMContentLoaded", function(event){
//     alert("Content loaded");
//     alert(event.target);//[object HTMLDocument]
// });
/*********************readystatechange事件****************/
// EventUtil.addHandler(document, "readystatechange", function(event){
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     if (target.readyState == "loaded" || target.readyState == "complete"){
//         EventUtil.removeHandler(target, "readystatechange", arguments. callee);
//         alert("Content Loaded");
//     }
// });
// (function(){
//     var showCount = 0;
//     EventUtil.addHandler(window, "load", function(){
//         alert("Load fired");
//     });
//     EventUtil.addHandler(window, "pageshow", function(){
//         showCount++;
//         alert("Show has been fired " + showCount +
//             " times. Persisted? " + event.persisted);
//     });
// })();
/*********************移动Safari的屏幕旋转事件****************/
// EventUtil.addHandler(window, "orientationchange", function(event){
//     alert("Current orientation is " + window.orientation);
// });
/*********************火狐的屏幕旋转事件,有加速计的设备就可以用****************/
// EventUtil.addHandler(window, "MozOrientation", function(event){
//     alert("X=" + event.x + ", Y=" + event.y + ", Z=" + event.z);
// });
/*********************规范旋转事件deviceorientation,大多数移动浏览器实现了****************/
// EventUtil.addHandler(window, "deviceorientation", function(event){
//     alert("Alpha=" + event.alpha + ", Beta=" + event.beta + ", Gamma=" + event.gamma);
// });
/*********************规范设备运动事件devicemotion,大多数移动浏览器实现了****************/
// EventUtil.addHandler(window, "devicemotion", function(event){
//     var output = document.getElementById("output");
//     if (event.rotationRate !== null){
//         output.innerHTML += "Alpha=" + event.rotationRate.alpha + ", Beta=" +
//             event.rotationRate.beta + ", Gamma=" +
//             event.rotationRate.gamma;
//     }
// });
/*********************移动设备触摸事件****************/
// function handleTouchEvent(event){
//     if (event.touches.length == 1){
//         var output = document.getElementById("output");
//         switch(event.type){
//             case "touchstart":
//                 output.innerHTML = "Touch started (" +
//                     event.touches[0].clientX +
//                     "," + event.touches[0].clientY + ")";
//                 break;
//             case "touchend":
//                 output.innerHTML += "<br>Touch ended (" +
//                     event.changedTouches[0].clientX + "," +
//                     event.changedTouches[0].clientY + ")";
//                 break;
//             case "touchmove":
//                 event.preventDefault(); //
//                 output.innerHTML += "<br>Touch moved (" +
//                     event.changedTouches[0].clientX + "," +
//                     event.changedTouches[0].clientY + ")";
//                 break;
//         }
//     }
// }
// EventUtil.addHandler(document, "touchstart", handleTouchEvent);
// EventUtil.addHandler(document, "touchend", handleTouchEvent);
// EventUtil.addHandler(document, "touchmove", handleTouchEvent);
/*********************移动设备手势事件(iOS)****************/
// function handleGestureEvent(event) {
//     var output = document.getElementById("output");
//     switch (event.type) {
//         case "gesturestart":
//             output.innerHTML = "Gesture started (rotation=" + event.rotation +
//                 ",scale=" + event.scale + ")";
//             break;
//         case "gestureend":
//             output.innerHTML += "<br>Gesture ended (rotation=" + event.rotation +
//                 ",scale=" + event.scale + ")";
//             break;
//         case "gesturechange":
//             output.innerHTML += "<br>Gesture changed (rotation=" + event.rotation +
//                 ",scale=" + event.scale + ")";
//             break;
//     }
// }
//
// document.addEventListener("gesturestart", handleGestureEvent, false);
// document.addEventListener("gestureend", handleGestureEvent, false);
// document.addEventListener("gesturechange", handleGestureEvent, false);
/*********************事件代理****************/
EventUtil.addHandler(document, "click", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    switch(target.id){
        case "myButton":
            document.title = "I changed the document's title";
            break;
        case "highDiv":
            location.href = "http://www.wrox.com";
            break;
        case "myDiv":
            alert("hi");
            break;
    }
});