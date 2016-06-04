/**
 * Created by exialym on 2016/6/3 0003.
 */
/**********************关于早期的动画******************/
// (function(){
//     function updateAnimations(){
//         doAnimation1();
//         doAnimation2();
//     }
//     setInterval(updateAnimations, 100);
// })()
/**********************先进的动画******************/
// (function() {
//     var lastTime = 0;
//     var vendors = ['ms', 'moz', 'webkit', 'o'];
//     for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
//         window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
//         window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
//     }
//     if (!window.requestAnimationFrame)
//         window.requestAnimationFrame = function(callback, element) {
//         var currTime = new Date().getTime();
//         var timeToCall = Math.max(0, 16 - (currTime - lastTime));
//         var id = window.setTimeout(function() {
//             callback(currTime + timeToCall);
//         }, timeToCall);
//         lastTime = currTime + timeToCall;
//         return id;
//     };
//     if (!window.cancelAnimationFrame)
//         window.cancelAnimationFrame = function(id) {
//         clearTimeout(id);
//     };
// }());
// function updateProgress(){
//     $("#status").width($("#status").width()+1);
//     if ($("#status").width() != "1000"){
//         requestAnimationFrame(updateProgress);
//     }
// }
// requestAnimationFrame(updateProgress);
/**********************Page Visibility API ******************/
// function handleVisibilityChange(){
//     var output = document.getElementById("myDiv"),
//         msg;
//     if (document.hidden || document.msHidden || document.webkitHidden){
//         msg = "Page is now hidden. " + (new Date()) + "<br>";
//     } else {
//         msg = "Page is now visible. " + (new Date()) + "<br>";
//     }
//     output.innerHTML += msg;
// }
// EventUtil.addHandler(document, "msvisibilitychange", handleVisibilityChange);
// EventUtil.addHandler(document, "webkitvisibilitychange", handleVisibilityChange);

/**********************位置 API ******************/
// navigator.geolocation.getCurrentPosition(
//     function(position){
//         alert(position.coords.latitude+"####"+positions.coords.longitude);
//     },
//     function(error){
//         console.log("Error code: " + error.code);
//         console.log("Error message: " + error.message); },
//     {
//         enableHighAccuracy: false,
//         timeout: 5000,
//         maximumAge: 25000
//     });
// var watchId = navigator.geolocation.watchPosition(
//     function(position){
//         alert(position.coords.latitude+"####"+positions.coords.longitude);
//     },
//     function(error){
//         console.log("Error code: " + error.code);
//         console.log("Error message: " + error.message);
//     });
// navigator.geolocation.clearWatch(watchId);
/**********************文件 API ******************/
var filesList = document.getElementById("files-list");
EventUtil.addHandler(filesList, "change", function(event){
    var info = "",
        output = document.getElementById("myDiv"),
        progress = document.getElementById("progress"),
        files = EventUtil.getTarget(event).files,
        type = "default",
        reader = new FileReader();
        var blob = blobSlice(files[0], 0, 100);
    if (/image/.test(files[0].type)){
        reader.readAsDataURL(files[0]);

        type = "image";
    } else {
        reader.readAsText(blob);
        type = "text";
    }
    reader.onerror = function(){
        output.innerHTML = "Could not read file, error code is " +
            reader.error.code;
    };
    reader.onprogress = function(event){
        if (event.lengthComputable){
            progress.innerHTML = event.loaded + "/" + event.total;
        }
    };
    reader.onload = function(){
        var html = "";
        switch(type){
            case "image":
                html = "<img src=\"" + reader.result + "\">";
                break;
            case "text":
                html = reader.result;
                break;
        }
        output.innerHTML = html;
    };
});
/**********************部分读取文件数据，上面已经使用了 ******************/
function blobSlice(blob, startByte, length){
    if (blob.slice){
        return blob.slice(startByte, length);
    } else if (blob.webkitSlice){
        return blob.webkitSlice(startByte, length);
    } else if (blob.mozSlice){
        return blob.mozSlice(startByte, length);
    } else {
        return null;
    }
}
/**********************创建和释放对象URL ******************/
// function createObjectURL(blob){
//     if (window.URL){
//         return window.URL.createObjectURL(blob);
//     } else if (window.webkitURL){
//         return window.webkitURL.createObjectURL(blob);
//     } else {
//         return null;
//     }
// }
// function revokeObjectURL(url){
//     if (window.URL){
//         window.URL.revokeObjectURL(url);
//     } else if (window.webkitURL){
//         window.webkitURL.revokeObjectURL(url);
//     }
// }

/**********************拖放读取文件 ******************/
var droptarget = document.getElementById( "droptarget");
function handleEvent(event){
    var info = "",
        output = document.getElementById("myDiv"),
        files,
        i,
        len;
    EventUtil.preventDefault(event);
    if (event.type == "drop"){
        files = event.dataTransfer.files;
        i = 0;
        len = files.length;
        while (i < len){

            reader = new FileReader();
            if (/image/.test(files[i].type)){
                reader.readAsDataURL(files[i]);

                type = "image";
            } else {
                reader.readAsText(files[i]);
                type = "text";
            }
            reader.onerror = function(){
                output.innerHTML = "Could not read file, error code is " +
                    reader.error.code;
            };
            reader.onprogress = function(event){
                if (event.lengthComputable){
                    progress.innerHTML = event.loaded + "/" + event.total;
                }
            };
            reader.onload = function(){
                var html = "";
                switch(type){
                    case "image":
                        html = "<img src=\"" + reader.result + "\">";
                        break;
                    case "text":
                        html = reader.result;
                        break;
                }
                output.innerHTML = html;
            };
            i++;
        }
    }
}
EventUtil.addHandler(droptarget, "dragenter", handleEvent);
EventUtil.addHandler(droptarget, "dragover", handleEvent);
EventUtil.addHandler(droptarget, "drop", handleEvent);

/**********************拖放上传文件 ******************/
// var droptarget = document.getElementById( "droptarget");
// function handleEvent(event){
//     var info = "",
//         output = document.getElementById("myDiv"),
//         files,
//         i,
//         len;
//     EventUtil.preventDefault(event);
//     if (event.type == "drop"){
//         data = new FormData();
//         files = event.dataTransfer.files;
//         i = 0;
//         len = files.length;
//         while (i < len){
//             data.append("file" + i, files[i]);
//             i++;
//         }
//         xhr = new XMLHttpRequest();
//         xhr.open("post", "hahaha.jsp", true);
//         xhr.onreadystatechange = function(){
//             if (xhr.readyState == 4){
//                 alert(xhr.responseText);
//             }
//         };
//         xhr.send(data);
//     }
// }
// EventUtil.addHandler(droptarget, "dragenter", handleEvent);
// EventUtil.addHandler(droptarget, "dragover", handleEvent);
// EventUtil.addHandler(droptarget, "drop", handleEvent);
/**********************Web Timing ******************/
//alert(window.performance.timing.domainLookupStart);
/**********************Worker ******************/
var worker = new Worker("Web_Worker.js");
worker.postMessage({
    type: "command",
    message: "start! "
});
worker.onmessage = function(event){
    var data = event.data;
    alert(data);
}
worker.onerror = function(event){
    console.log("ERROR: " + event.filename + " (" + event.lineno + "): " +
        event.message);
};
//worker.terminate();