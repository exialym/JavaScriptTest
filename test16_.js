/**
 * Created by exialym on 16/5/19.
 */
/**************************跨文档传递消息***************/
function send() {
    var iframeWindow = document.getElementById("frame").contentWindow;
    iframeWindow.postMessage("A secret", "*");
}

var parentVar = 1;
/**************************原生拖拽***************/
var dropDiv = document.getElementById("dropDiv");
var moveText = document.getElementById("moveText");
EventUtil.addHandler(moveText, "dragstart", function(event){
    var event = EventUtil.getEvent(event);
    var dataTransfer = event.dataTransfer;
    dataTransfer.setData("text","hahahaha");
    dataTransfer.dropEffect = "move";
    dataTransfer.effectAllowed = "all";
});
EventUtil.addHandler(dropDiv, "dragover", function(event){
    EventUtil.preventDefault(event);
});
EventUtil.addHandler(dropDiv, "dragenter", function(event){
    EventUtil.preventDefault(event);
});
EventUtil.addHandler(dropDiv, "drop", function(event){
    EventUtil.preventDefault(event);
    alert("droped");
    var dataTransfer = event.dataTransfer;
    alert(dataTransfer.getData("text"));
});
/**************************视频元素***************/
// var player = document.getElementById("player"),
//     btn = document.getElementById("video-btn"),
//     curtime = document.getElementById("curtime"),
//     duration = document.getElementById("duration");
// //
// duration.innerHTML = player.duration;
// //
// EventUtil.addHandler(btn, "click", function(event){
//     if (player.paused){
//         player.play();
//         btn.value = "Pause";
//     } else {
//         player.pause();
//         btn.value = "Play";
//     }
// });
// setInterval(function(){
// curtime.innerHTML = player.currentTime;
// }, 250);
// //只传入格式，并不知道编码的情况下，真返回的是maybe，假返回“”
// alert(player.canPlayType("audio/mpeg"));
//
// //都传入时可能性增加了，真就返回"probably"
// alert(player.canPlayType("audio/mp4; codecs=\"mp4a.40.2\""));
/**************************历史状态管理***************/

history.pushState({name:"myIndexData"}, "Nicholas' page", "index.html");
history.pushState({name:"Nicholas1"}, "Nicholas' page", "index1.html");
history.pushState({name:"Nicholas2"}, "Nicholas' page", "index2.html");
history.pushState({name:"Nicholas3"}, "Nicholas' page", "index3.html");
history.pushState({name:"Nicholas4"}, "Nicholas' page", "index4.html");
history.replaceState({name:"Greg"}, "Greg's page");
history.pushState({name:"Nicholas5"}, "Nicholas' page", "index5.html");
history.pushState({name:"Nicholas6"}, "Nicholas' page", "index6.html");
EventUtil.addHandler(window, "popstate", function(event){
    var state = event.state;
    alert(state.name);
});

