/**
 * Created by exialym on 16/5/30.
 */
alert(navigator.onLine);
EventUtil.addHandler(window, "online", function(){
    alert("online");
});
EventUtil.addHandler(window, "offline", function(){
    alert("Offline");
});
