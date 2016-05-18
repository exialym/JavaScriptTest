/**
 * Created by exialym on 16/5/17.
 */
/**************************获取表单元素****************/
var firstForm = document.forms[0];
var myForm = document.forms["myForm"];
var text = firstForm.elements[0];
var field = firstForm.elements[1];
//alert(firstForm.name);
/**************************表单的提交与重置****************/
EventUtil.addHandler(firstForm, "submit", function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
});
EventUtil.addHandler(firstForm, "reset", function(event){
    event = EventUtil.getEvent(event);
    EventUtil.preventDefault(event);
});
/**************************获取表单元素****************/
// alert(firstForm.elements[0].name);
// alert(firstForm.elements["password"].name);
// alert(firstForm.elements.length);
/**************************修改表单元素属性****************/
// var field = firstForm.elements[0];
// field.value = "Another value";
// alert(field.form === firstForm);
// field.focus();
// field.disabled = true;
// field.type = "checkbox";
/**************************选择文本相关****************/
//
// //聚焦到文本框自动选择全部文本内容
// EventUtil.addHandler(field, "focus", function(event){
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     target.select();
// });
// EventUtil.addHandler(field, "select", function(event){
//     console.log(getSelectedText(field));
// });
// //利用HTML5的新特性，IE8及以下的DOM范围来确切的选择鼠标选中的内容
// function getSelectedText(textbox) {
//     if (typeof textbox.selectionStart == "number") {
//         return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
//     } else if (document.selection) {
//         return document.selection.createRange().text;
//     }
// }
// //这个是用代码来选中规定范围的文本，和上面的原理一样，就是不会触发select事件
// function selectText(textbox, startIndex, stopIndex){
//     if (textbox.setSelectionRange){
//         textbox.setSelectionRange(startIndex, stopIndex);
//     } else if (textbox.createTextRange){
//         var range = textbox.createTextRange();
//         range.collapse(true);
//         range.moveStart("character", startIndex);
//         range.moveEnd("character", stopIndex - startIndex);
//         range.select();
//     }
//     textbox.focus();
// }
// selectText(text,0,3);
/**************************屏蔽输入字符****************/
// EventUtil.addHandler(field, "keydown", function(event){
//     event = EventUtil.getEvent(event);
//     EventUtil.preventDefault(event);
// });
// EventUtil.addHandler(text, "keypress", function(event){
//     event = EventUtil.getEvent(event);
//     var target = EventUtil.getTarget(event);
//     var charCode = EventUtil.getCharCode(event);
//     if (!/\d/.test(String.fromCharCode(charCode)) && charCode > 9){
//         EventUtil.preventDefault(event);
//     }
// });
/**************************操作剪贴板****************/
// EventUtil.addHandler(text, "paste", function(event){
//     event = EventUtil.getEvent(event);
//     var text = EventUtil.getClipboardText(event);
//     if (!/^\d*$/.test(text)){
//         EventUtil.preventDefault(event);
//     }
// });
/**************************自动切换焦点****************/
// (function(){
//     function tabForward(event){
//         event = EventUtil.getEvent(event);
//         var target = EventUtil.getTarget(event);
//         if (target.value.length == target.maxLength){
//             var form = target.form;
//             for (var i=0, len=form.elements.length; i < len; i++) {
//                 if (form.elements[i] == target) {
//                     if (form.elements[i+1]){
//                         form.elements[i+1].focus();
//                     }
//                     return;
//                 }
//             }
//         }
//     }
//     var textbox1 = document.getElementById("txtTel1");
//     var textbox2 = document.getElementById("txtTel2");
//     var textbox3 = document.getElementById("txtTel3");
//     EventUtil.addHandler(textbox1, "keyup", tabForward);
//     EventUtil.addHandler(textbox2, "keyup", tabForward);
//     EventUtil.addHandler(textbox3, "keyup", tabForward);
// })();
/**************************HTML5验证表单****************/
if (input.validity && !input.validity.valid){
    if (input.validity.valueMissing){
        alert("Please specify a value.")
    } else if (input.validity.typeMismatch){
        alert("Please enter an email address.");
    } else {
        alert("Value is invalid.");
    }
}