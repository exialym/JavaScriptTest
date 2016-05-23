/**
 * Created by exialym on 16/5/22.
 */
/**********************stringify和parse*******************/
// var book = {
//     title: "Professional JavaScript",
//     authors: [
//         "Nicholas C. Zakas"
//     ],
//     edition: 3,
//     year: 2011,
//     book:{
//         title:"insertBook",
//         edition:"insertBookEdtion",
//         year:2001
//     }
// };
// var jsonText = JSON.stringify(book,null,"###");
// alert(jsonText);
// //var bookData = JSON.parse(jsonText);
// //alert(bookData.title);
// //数组过滤器貌似只过滤一层,里面的对象不会检测
// jsonText = JSON.stringify(book, ["title", "edition"],4);//{"title":"Professional JavaScript","edition":3}
// alert(jsonText);
// jsonText = JSON.stringify(book, function(key, value){
//     switch(key){
//         case "authors":
//             return value.join(",");
//         case "year":
//             return undefined;
//         case "edition":
//             return value+"hahahahaha";
//         // case "book":
//         //     return value.year;
//         // default:
//         //     return value;
//         case "":
//             return value;
//     }
// },"@@@@");
// alert(jsonText);
/**********************toJSON*******************/
// var testObject = {
//     hahaha:2013,
//     heiheihei:2014,
//     toJSON:function () {
//         return this.hahaha + "" + this.heiheihei;
//     }
// }
// alert(JSON.stringify(testObject));
/**********************parse解析选项*******************/
var book = {
    year: 2011,
    releaseDate: new Date(2011, 11, 1)
};
var jsonText = JSON.stringify(book);
alert(jsonText);
var bookCopy = JSON.parse(jsonText, function(key, value){
    if (key == "releaseDate"){
        return new Date(value);
    } else {
        return value;
    }
});
alert(bookCopy.releaseDate.getFullYear());