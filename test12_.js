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
// var sheet = null;
// for (var i=0, len=document.styleSheets.length; i < len; i++){
//     sheet = document.styleSheets[i];
//     alert(sheet.href);
// }
// function getStyleSheet(element){
//     return element.sheet || element.styleSheet;
// }
// var link = document.getElementsByTagName("link")[0]; 
// var sheet = getStyleSheet(link);
// alert(sheet.href);
/*******************************样式表中的规则***************************/
// var sheet = document.styleSheets[0]; //取得样式表
// var rules = sheet.cssRules || sheet.rules;   //为兼容IE
// var rule = rules[0];
// alert(rule.selectorText);
// alert(rule.cssText);
// alert(rule.style.cssText);
// alert(rule.style.height);
// //这里的修改并不成功？？？？
// rule.style.height = "2000ps";
// alert(rule.style.height);
// //添加规则
// function insertRule(sheet, selectorText, cssText, position){
//     if (sheet.insertRule){
//         sheet.insertRule(selectorText + "{" + cssText + "}", position);
//     } else if (sheet.addRule){
//         sheet.addRule(selectorText, cssText, position);
//     }
// }
// //删除规则
// function deleteRule(sheet, index){
//     if (sheet.deleteRule){
//         sheet.deleteRule(index);
//     } else if (sheet.removeRule){
//         sheet.removeRule(index);
//     }
// }
/*************************元素位置及尺寸***************************/
// //获得元素绝对上偏移
// function getElementTop(element){
//     var actualTop = element.offsetTop;
//     var current = element.offsetParent;
//     //迭代所有父级元素，把他们的偏移都加上
//     while (current !== null){
//         actualTop += current. offsetTop;
//         current = current.offsetParent;
//     }
//     return actualTop;
// }
// //获得元素绝对左偏移
// function getElementLeft(element){
//     var actualLeft = element.offsetLeft;
//     var current = element.offsetParent;
//     while (current !== null){
//         actualLeft += current.offsetLeft;
//         current = current.offsetParent;
//     }
//     return actualLeft;
// }
// function getBoundingClientRect(element){
//     var scrollTop = document.documentElement.scrollTop;
//     var scrollLeft = document.documentElement.scrollLeft;
//     //在支持getBoundingClientRect方法的情况下
//     if (element.getBoundingClientRect){
//         //这里利用了函数自身的属性，如果这个函数刚才已经执行过了。arguments.callee.offset就已经存在了
//         //就说明这个浏览器的调整量已经设置过了，直接使用就好了。就不必执行下面这个开销比较大的代码块了
//         if (typeof arguments.callee.offset != "number"){
//             //利用一个新元素，将他设置在浏览器的左上角，再获取它的top值
//             //看看这个浏览器的偏差是多少，反向减掉
//             var temp = document.createElement("div");
//             temp.style.cssText = "position:absolute;left:0;top:0;";
//             document.body.appendChild(temp);
//             arguments.callee.offset = -temp.getBoundingClientRect().top - scrollTop;
//             document.body.removeChild(temp);
//             temp = null;
//         }
//         var rect = element.getBoundingClientRect();
//         var offset = arguments.callee.offset;
//         return {
//             left: rect.left + offset,
//             right: rect.right + offset,
//             top: rect.top + offset,
//             bottom: rect.bottom + offset
//         };
//     //在支持getBoundingClientRect方法的情况下，使用之前的getElementLeft()函数得到left，再加加offsetWidth得到right
//     //这个方法可能不太准确，不过谁叫你不支持getBoundingClientRect的
//     } else {
//         var actualLeft = getElementLeft(element);
//         var actualTop = getElementTop(element);
//         return {
//             left: actualLeft - scrollLeft,
//             right: actualLeft + element.offsetWidth - scrollLeft,
//             top: actualTop - scrollTop,
//             bottom: actualTop + element.offsetHeight - scrollTop
//         }
//     }
// }
// var rect = getBoundingClientRect(document.getElementById("myDiv"));
// alert(rect.bottom);
// alert(rect.top);
// alert(rect.left);
// alert(rect.right);
/**********************************遍历DOM节点*************************/
// var filter = {
//     acceptNode: function(node){
//         return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
//     }
// };
// //直接定义函数也行
// // var filter = function(node){
// //     return node.tagName.toLowerCase() == "p" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
// // };
// var iterator = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ELEMENT, filter, false);
// //或者遍历所有节点
// iterator = document.createNodeIterator(document, NodeFilter.SHOW_ALL, null, false);
// var node = iterator.nextNode();
// while (node !== null) {
//     alert(node.tagName);
//     node = iterator.nextNode();
// }
// //更强大的遍历类型
// var walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_ELEMENT, null, false);
// walker.firstChild();
// walker.nextSibling();
// var node = walker.firstChild();
// while (node !== null) {
//     alert(node.tagName);
//     node = walker.nextSibling();
// }
/************************DOM范围selectNode()、selectNodeContents()****************/
// var range1 = document.createRange();
// var range2 = document.createRange();
// var div = document.getElementById("myDiv");
// range1.selectNode(div);
// range2.selectNodeContents(div);
// alert(range1.startContainer.tagName); //body
// alert(range1.endContainer.tagName); //body
// alert(range1.commonAncestorContainer.tagName); //body
// alert(range1.startOffset); //这个div在body中的索引哦,1
// alert(range1.endOffset); //startOffset+1,因为只选择了一个节点
// alert(range2.startContainer.tagName); //div
// alert(range2.endContainer.tagName); //div
// alert(range2.commonAncestorContainer.tagName); //div
// alert(range2.startOffset); //永远都是0
// alert(range2.endOffset); //子节点数目
/************************DOM范围setStart()、setEnd()****************/
var div = document.getElementById("myDiv");
var textNode = div.childNodes[1].firstChild;
var worldNode = div.lastChild;
var range = document.createRange();
range.setStart(textNode, 4);
range.setEnd(worldNode, 0);
alert(range);  //an /n 我是一个a标签~~~~~