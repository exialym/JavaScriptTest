/**
 * Created by exialym on 16/5/18.
 */
var drawing = document.getElementById("drawing");
var img = document.getElementById("canvasImg");
/**************************绘制矩形***************/
// if (drawing.getContext){
//     var context = drawing.getContext("2d");
//     context.fillStyle = "#ff0000";
//     context.fillRect(10, 10, 50, 50);
//     context.fillStyle = "rgba(0,0,255,0.5)";
//     context.fillRect(30, 30, 50, 50);
//     context.strokeStyle = "#ff0000";
//     context.strokeRect(100, 10, 50, 50);
//     context.strokeStyle = "rgba(0,0,255,0.5)";
//     context.strokeRect(120, 30, 50, 50);
//     context.clearRect(40, 40, 10, 10);
// }

/**************************绘制路径***************/
// if (drawing.getContext){
//     var context = drawing.getContext("2d");
//     context.beginPath();
//     context.arc(100, 100, 99, 0, 2 * Math.PI, false);
//     context.moveTo(194, 100);
//     context.arc(100, 100, 94, 0, 2 * Math.PI, false);
//     context.moveTo(100, 100);
//     context.lineTo(100, 15);
//     context.moveTo(100, 100);
//     context.lineTo(35, 100);
//     context.stroke();
// }
/**************************arcTo***************/
// if (drawing.getContext) {
//     var context = drawing.getContext("2d");
//     //指定绘制路径的起始点
//     context.moveTo(50, 50);
//     //注释掉lineTo()，不再先绘制直线
//     //ctx.lineTo(150, 50);
//
//     //此时，坐标点(50,50)就是绘制弧线时的当前端点
//
//     //端点1
//     var p1 = {
//         x: 200,
//         y: 50
//     };
//     //端点2
//     var p2 = {
//         x: 200,
//         y: 100
//     };
//     //绘制与当前端点、端点1、端点2三个点所形成的夹角的两边相切并且半径为50px的圆的一段弧线
//     context.arcTo(p1.x, p1.y, p2.x, p2.y, 50);
//
//     //设置线条颜色为蓝色
//     context.strokeStyle = "blue";
//     //按照上述绘制路径绘制弧线
//     context.stroke();
// }
/**************************绘制文字***************/
// if (drawing.getContext) {
//     var context = drawing.getContext("2d");
//     context.font = "bold 14px Arial";
//     context.textAlign = "center";
//     context.textBaseline = "middle";
//     context.fillText("12", 100, 20);
// }
/**************************保存上下文，变换，渐变，模式***************/
if (drawing.getContext) {
    var context = drawing.getContext("2d");
    var gradient = context.createLinearGradient(0, 0, 100, 200);
    gradient.addColorStop(0, "red");
    gradient.addColorStop(0.165, "orange");
    gradient.addColorStop(0.33, "yellow");
    gradient.addColorStop(0.495, "green");
    gradient.addColorStop(0.66, "#2aabd2");
    gradient.addColorStop(0.825, "blue");
    gradient.addColorStop(1, "#e4b9b9");
    context.fillStyle = gradient;
    context.save();
    pattern = context.createPattern(img, "repeat");
    context.fillStyle = pattern;
    context.translate(100, 100);
    context.rotate(1);
    context.save();
    var gradient2 = context.createRadialGradient(170, 250, 0, 170, 250, 50);
    gradient2.addColorStop(0, "red");
    gradient2.addColorStop(0.165, "orange");
    gradient2.addColorStop(0.33, "yellow");
    gradient2.addColorStop(0.495, "green");
    gradient2.addColorStop(0.66, "#2aabd2");
    gradient2.addColorStop(0.825, "blue");
    gradient2.addColorStop(1, "#e4b9b9");
    context.fillStyle = gradient2;
    context.rotate(-1);
    context.fillRect(120, 100, 100, 300); //(100,100)
    context.restore();
    context.fillRect(100, 0, 100, 200); //(110,110)
    context.restore();
    context.fillRect(0, 0, 100, 200);
}
/**************************绘制图片,阴影，全局透明度***************/
if (drawing.getContext) {
    var context = drawing.getContext("2d");

    context.shadowOffsetX = 5;
    context.shadowOffsetY = 5;
    context.shadowBlur    = 4;
    context.shadowColor   = "rgba(0, 0, 0, 0.5)";
    context.drawImage(img,300,0);
    context.drawImage(img,400,0,500,400);
    context.globalAlpha = 0.5;
    context.drawImage(img, 10, 10, 50, 70, 100, 40, 200, 500);
    context.globalAlpha = 0;
}
/**************************获取图像元数据，灰阶过滤***************/
// if (drawing.getContext){
//     var context = drawing.getContext("2d"),
//         imageData, data,
//         i, len, average,
//         red, green, blue, alpha;
//     imageData = context.getImageData(0, 0, drawing.width, drawing.height);
//     data = imageData.data;
//     for (i=0, len=data.length; i < len; i+=4){
//         red = data[i];
//         green = data[i+1];
//         blue = data[i+2];
//         alpha = data[i+3];
//         // rgb
//         average = Math.floor((red + green + blue) / 3);
//         data[i] = average;
//         data[i+1] = average;
//         data[i+2] = average;
//     }        //
//     imageData.data = data;
//     context.putImageData(imageData, 0, 0);
// }
/**************************将canvas画布导出为图片***************/
if (drawing.getContext){
    var imgURI = drawing.toDataURL("image/png");
    var image = document.createElement("img");
    image.src = imgURI;
    document.body.appendChild(image);
}
/**************************测试内嵌页面跨域***************/
alert(window.parentVar);//失败
alert(window.parent.parentVar);
EventUtil.addHandler(window, "message", function(event){
    alert(event.origin);
    alert(event.data);
    alert(event.source.parentVar);
    event.source.postMessage("Received!", "http://p2p.wrox.com");
});