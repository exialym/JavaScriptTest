/**
 * Created by exialym on 2016/5/9 0009.
 */
/***************************看看浏览器支不支持咯*********************************/
// var supportsDOM2Core = document.implementation.hasFeature("Core", "2.0");
// var supportsDOM3Core = document.implementation.hasFeature("Core", "3.0");
// var supportsDOM2HTML = document.implementation.hasFeature("HTML", "2.0");
// var supportsDOM2Views = document.implementation.hasFeature("Views", "2.0");
// var supportsDOM2XML = document.implementation.hasFeature("XML", "2.0");
// alert(supportsDOM2Core);
// alert(supportsDOM3Core);
// alert(supportsDOM2HTML);
// alert(supportsDOM2Views);
// alert(supportsDOM2XML);
/*********************************与XHTML命名空间有关的属性************/
// //DOM2
// var html = document.documentElement;
// alert(html.localName);
// alert(html.namespaceURI);
// alert(html.prefix);
// var svg = document.getElementsByTagName("svg")[0];
// alert(html.isDefaultNamespace("http://www.w3.org/1999/xhtml"));
// alert(document.body.isDefaultNamespace("http://www.w3.org/1999/xhtml"));
// alert(svg.localName);
// alert(svg.namespaceURI);
// alert(svg.prefix);
// //这里比较有趣，svg节点的defaultNameSpace不是我们给他设置的那个而是上一级的。
// alert(svg.isDefaultNamespace("http://www.w3.org/1999/xhtml")); //true
// alert(svg.isDefaultNamespace("http://www.w3.org/2000/svg")); //false
// alert(svg.lookupNamespaceURI("s"));
// alert(svg.lookupPrefix("http://www.w3.org/2000/svg"));
/*********************************defaultView属性,代表拥有此文档的窗口或框架***/
//alert(document.defaultView || document.parentWindow);
/*************************Node类型的新方法:isSameNode()、isEqualNode()****/
// var div1 = document.createElement("div");
// div1.setAttribute("class", "box");
// var div2 = document.createElement("div");
// div2.setAttribute("class", "box");
// alert(div1.isSameNode(div1)); //true
// alert(div1.isEqualNode(div2)); //true
// alert(div1.isSameNode(div2)); //false
/***********************Node类型的新方法:setUserData(),不过Safari和chrome都不支持貌似********/
// var div = document.createElement("div");
// div.setUserData("name", "Nicholas", function(operation, key, value, src, dest){
//     if (operation == 1){
//         dest.setUserData(key, value, function(){});
//     }
// });
// var newDiv = div.cloneNode(true);
// alert(newDiv.getUserData("name"));      //"Nicholas"
/******************************JS访问style************/
//style属性。它是CSSStyleDeclaration的实例，这里包含通过HTML的style特性指定的所有样式信息，**但不包含外部与内嵌样式表的样式。**样式通过属性访问，驼峰命名。
// var myDiv = document.getElementById("myDiv");
// myDiv.style.backgroundColor = "red";
// myDiv.style.width = "100px";
// myDiv.style.height = "200px";
// myDiv.style.border = "1px solid black";
// var prop, value, i, len;  
// for (i=0, len=myDiv.style.length; i < len; i++){     
//     prop = myDiv.style[i];  //myDiv.style.item(i)
//     value = myDiv.style.getPropertyValue(prop);     
//     alert(prop + " : " + value); 
// }
/******************************JS访问所有计算后的CSS************/
// var myDiv = document.getElementById("myDiv");
// var computedStyle = document.defaultView.getComputedStyle(myDiv, null);
// //IE不支持，使用currentStyle
// //var computedStyle = myDiv.currentStyle;
// alert(computedStyle.height);    // "200px"
/******************************JS访问样式表************/
var sheet = null;
for (var i=0, len=document.styleSheets.length; i < len; i++){
    sheet = document.styleSheets[i];
    alert(sheet.href);
}
function getStyleSheet(element){
    return element.sheet || element.styleSheet;
}
var link = document.getElementsByTagName("link")[0]; 
var sheet = getStyleSheet(link);
alert(sheet.href);