/**
 * Created by exialym on 16/6/4.
 */
self.onmessage = function(event){
    var data = event.data;
    self.postMessage("Data from Worker:"+data.type+"&"+data.message);
};