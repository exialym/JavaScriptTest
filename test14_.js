/**
 * Created by exialym on 16/5/17.
 */
/**************************获取表单元素****************/
var firstForm = document.forms[0];
var myForm = document.forms["myForm"];
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
var text = firstForm.elements[0];
var field = firstForm.elements[1];
EventUtil.addHandler(field, "focus", function(event){
    event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);
    target.select();
});
EventUtil.addHandler(field, "select", function(event){
    console.log(getSelectedText(field));
});
function getSelectedText(textbox) {
    if (typeof textbox.selectionStart == "number") {
        return textbox.value.substring(textbox.selectionStart, textbox.selectionEnd);
    } else if (document.selection) {
        return document.selection.createRange().text;
    }
}
function selectText(textbox, startIndex, stopIndex){
    if (textbox.setSelectionRange){
        textbox.setSelectionRange(startIndex, stopIndex);
    } else if (textbox.createTextRange){
        var range = textbox.createTextRange();
        range.collapse(true);
        range.moveStart("character", startIndex);
        range.moveEnd("character", stopIndex - startIndex);
        range.select();
    }
    textbox.focus();
}
selectText(text,0,3);