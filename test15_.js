/**
 * Created by exialym on 16/5/18.
 */
var drawing = document.getElementById("drawing");
if (drawing.getContext){
    var context = drawing.getContext("2d");
    context.fillStyle = "#ff0000";
    context.fillRect(10, 10, 50, 50);
    context.fillStyle = "rgba(0,0,255,0.5)";
    context.fillRect(30, 30, 50, 50);
    context.strokeStyle = "#ff0000";
    context.strokeRect(100, 10, 50, 50);
    context.strokeStyle = "rgba(0,0,255,0.5)";
    context.strokeRect(120, 30, 50, 50);
    context.clearRect(40, 40, 10, 10);
}
if (drawing.getContext){
    var imgURI = drawing.toDataURL("image/png");
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}
