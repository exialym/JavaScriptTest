/**
 * Created by exialym on 16/5/19.
 */
function send() {
    var iframeWindow = document.getElementById("frame").contentWindow;
    iframeWindow.postMessage("A secret", "*");
}

var parentVar = 1;
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

