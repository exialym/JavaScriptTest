/**
 * Created by exialym on 16/5/19.
 */
function send() {
    var iframeWindow = document.getElementById("frame").contentWindow;
    iframeWindow.postMessage("A secret", "*");
}

var parentVar = 1;

