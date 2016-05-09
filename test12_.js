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
alert(document.defaultView || document.parentWindow);
