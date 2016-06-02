/**
 * Created by exialym on 16/5/30.
 */
/**********************离线检测******************/
// alert(navigator.onLine);
// EventUtil.addHandler(window, "online", function(){
//     alert("online");
// });
// EventUtil.addHandler(window, "offline", function(){
//     alert("Offline");
// });
/**********************离线数据存储******************/
//alert(applicationCache.status);
/**********************Cookie******************/
// alert(document.cookie);
// document.cookie = encodeURIComponent("name") + "=" + encodeURIComponent("Nicholas");

/**********************Cookie工具类******************/
// var CookieUtil = {
//     get: function (name){
//         var cookieName = encodeURIComponent(name) + "=",
//             cookieStart = document.cookie.indexOf(cookieName),
//             cookieValue = null;
//         if (cookieStart > -1){
//             var cookieEnd = document.cookie.indexOf(";", cookieStart);
//             if (cookieEnd == -1){
//                 cookieEnd = document.cookie.length;
//
//             }
//             cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
//         }
//         return cookieValue;
//     },
//     set: function (name, value, expires, path, domain, secure) {
//         var cookieText = encodeURIComponent(name) + "=" +
//             encodeURIComponent(value);
//         if (expires instanceof Date) {
//             cookieText += "; expires=" + expires.toGMTString();
//         }
//         if (path) {
//             cookieText += "; path=" + path;
//         }
//         if (domain) {
//             cookieText += "; domain=" + domain;
//         }
//         if (secure) {
//             cookieText += "; secure";
//         }
//         document.cookie = cookieText;
//     },
//     unset: function (name, path, domain, secure){
//         this.set(name, "", new Date(0), path, domain, secure);
//     }
// };
// CookieUtil.set("book", "Professional JavaScript");
// alert(CookieUtil.get("book"));
// CookieUtil.unset("book");
// alert(CookieUtil.get("book"));

/**********************子Cookie工具类******************/
// var SubCookieUtil = {
//
//     //获取这个name的cookie中所有的子cookie并放入一个对象中
//     getAll: function(name){
//         var cookieName = encodeURIComponent(name) + "=",
//             cookieStart = document.cookie.indexOf(cookieName),
//             cookieValue = null,
//             cookieEnd,
//             subCookies,
//             len,
//             i,
//             parts,
//             result = {};
//         if (cookieStart > -1){
//             cookieEnd = document.cookie.indexOf(";", cookieStart);
//             if (cookieEnd == -1){
//                 cookieEnd = document.cookie.length;
//             }
//             cookieValue = document.cookie.substring(cookieStart +
//                 cookieName.length, cookieEnd);
//             if (cookieValue.length > 0){
//                 subCookies = cookieValue.split("&");
//                 for (i=0, len=subCookies.length; i < len; i++){
//                     parts = subCookies[i].split("=");
//                     result[decodeURIComponent(parts[0])] =
//                         decodeURIComponent(parts[1]);
//                 }
//                 return result;
//             }
//         }
//         return null;
//     },
//     //使用getAll方法返回的子cookie的对象,找到想要的子cookie
//     get: function (name, subName){
//         var subCookies = this.getAll(name);
//         if (subCookies){
//             return subCookies[subName];
//         } else {
//             return null;
//         }
//     },
//     //将所有子cookie和相应参数序列化存进cookie里
//     setAll: function(name, subcookies, expires, path, domain, secure){
//         var cookieText = encodeURIComponent(name) + "=",
//             subcookieParts = new Array(),
//             subName;
//         for (subName in subcookies){
//             //这里使用hasOwnProperty来确定不会循环到原型链中其实不是子cookie的属性
//             if (subName.length > 0 && subcookies.hasOwnProperty(subName)){
//                 subcookieParts.push(encodeURIComponent(subName) + "=" +
//                     encodeURIComponent(subcookies[subName]));
//             }
//         }
//         if (subcookieParts.length > 0){
//             cookieText += subcookieParts.join("&");
//             if (expires instanceof Date) {
//                 cookieText += "; expires=" + expires.toGMTString();
//             }
//             if (path) {
//                 cookieText += "; path=" + path;
//             }
//             if (domain) {
//                 cookieText += "; domain=" + domain;
//             }
//             if (secure) {
//                 cookieText += "; secure";
//             }
//         } else {
//             cookieText += "; expires=" + (new Date(0)).toGMTString();
//         }
//             document.cookie = cookieText;
//     },
//     //更改一个子cookie,这个方法会先找到这个子cookie所在的cookie中所有的子cookie,将这个新子cookie放到存着所有子cookie的对象中
//     //再调用setAll方法保存
//     set: function (name, subName, value, expires, path, domain, secure) {
//         var subcookies = this.getAll(name) || {};
//         subcookies[subName] = value;
//         this.setAll(name,subcookies,expires, path, domain, secure);
//     },
//     unset: function (name, subName, path, domain, secure){
//         var subcookies = this.getAll(name);
//         if (subcookies){
//             delete subcookies[subName];
//             this.setAll(name, subcookies, null, path, domain, secure);
//         }
//     },
//     unsetAll: function(name, path, domain, secure){
//         this.setAll(name, null, new Date(0), path, domain, secure);
//     }
// };
// document.cookie="data=name=Nicholas&book=Professional%20JavaScript";
// var data = SubCookieUtil.getAll("data");
// alert(data);
// alert(data.name); //"Nicholas"
// alert(data.book); //"Professional JavaScript"
// alert(SubCookieUtil.get("data", "name")); //"Nicholas"
// alert(SubCookieUtil.get("data", "book"));
// alert(SubCookieUtil.get("data", "class"));
// SubCookieUtil.set("data", "class", "how to kill people");
// alert(SubCookieUtil.get("data", "class"));
/**********************sessionStorage对象******************/
// sessionStorage.setItem("name", "Nicholas");
// sessionStorage.book = "Professional JavaScript";
// for (var i=0, len = sessionStorage.length; i < len; i++){
//     var key = sessionStorage.key(i);
//     var value = sessionStorage.getItem(key);
//     alert(key + "=" + value);
// }
// sessionStorage.removeItem("book");
/**********************globalStorage对象******************/
// globalStorage[location.host ].name = "Nicholas";
// globalStorage[location.host ].book = "Professional JavaScript";
// globalStorage[location.host ].removeItem("name");
// var book = globalStorage[location.host ].getItem("book");
// alert(book);
/**********************localStorage对象******************/
// localStorage.setItem("name", "Nicholas");
// localStorage.book = "Professional JavaScript";
// var name = localStorage.getItem("name");
// var book = localStorage.book;
// alert(name);
// EventUtil.addHandler(document, "storage", function(event){
//     alert("Storage changed for " + event.domain);
// });
/**********************IndexedDB******************/
// var indexedDB = window.indexedDB || window.msIndexedDB || window.mozIndexedDB || window.webkitIndexedDB;
// const customerData = [
//     { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
//     { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
// ];
// var request, database;
// request = indexedDB.open("my1",4);
// request.onerror = function(event){
//     alert("Something bad happened while trying to open: " +
//         event.target.errorCode);
// };
// request.onsuccess = function(event){
//     database = event.target.result;
//     //setVersion();
// };
// request.onupgradeneeded = function (event) {
//     var db = event.target.result;
//
//     // Create an objectStore to hold information about our customers. We're
//     // going to use "ssn" as our key path because it's guaranteed to be
//     // unique - or at least that's what I was told during the kickoff meeting.
//     var objectStore = db.createObjectStore("customers", { keyPath: "ssn" });
//
//     // Create an index to search customers by name. We may have duplicates
//     // so we can't use a unique index.
//     objectStore.createIndex("name", "name", { unique: false });
//
//     // Create an index to search customers by email. We want to ensure that
//     // no two customers have the same email, so use a unique index.
//     objectStore.createIndex("email", "email", { unique: true });
//
//     // Use transaction oncomplete to make sure the objectStore creation is
//     // finished before adding data into it.
//     objectStore.transaction.oncomplete = function(event) {
//         // Store values in the newly created objectStore.
//         var customerObjectStore = db.transaction("customers", "readwrite").objectStore("customers");
//         for (var i in customerData) {
//             customerObjectStore.add(customerData[i]);
//         }
//     };
// };
// function setVersion() {
//     if (database.version != "1.0"){
//         request = database.setVersion("1.0");
//         request.onerror = function(event){
//             alert("Something bad happened while trying to set version: " +
//                 event.target.errorCode);
//         };
//         request.onsuccess = function(event){
//             alert("Database initialization complete. Database name: " + database.name + ", Version: " + database.version);
//         };
//     } else {
//         alert("Database already initialized. Database name: " + database.name + ", Version: " + database.version);
//     }
// }
