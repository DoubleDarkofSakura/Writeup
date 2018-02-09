/**
 * Script for teaching evaluation
 * 
 * 某大学 教学评估脚本
 * 1. 去除回答必要时常限制
 * 2. 一键完成+提交
 */
a = {}
b = []
$(window.frames['bottomFrame'].frames['mainFrame'].document).find("input[type='radio']").map((key, v) => {
    k = $(v).attr("name")
    if (!a[k]) { a[k] = v;
        b.push(v) }
    return 0;
})

b[7] = b[7].nextElementSibling.nextElementSibling.nextElementSibling

b.map((v) => {
    $(v).attr("checked", "checked")
    return 0;
})


$(window.frames['bottomFrame'].frames['mainFrame'].document).find("textarea[name='zgpj']").val(" ")

function hacker() {


    var f = window.frames['bottomFrame'].frames['mainFrame'].document.StDaForm

    var redi = window.frames['bottomFrame'].frames['mainFrame'].document.getElementsByTagName("input");
    var arr = new Array();;
    for (var i = 0; i < redi.length; i++) {
        if (redi[i].type == 'radio') {
            if (redi[i].checked) {
                arr.push(redi[i].id);
            }
        }
    }

    var mm = Math.max.apply(null, arr);
    var mi = Math.min.apply(null, arr);

    var c = new Date();
    var str1 = c.getFullYear() + "" + (c.getMonth() + 1) + "" + c.getDate() + "" + c.getHours() + "" + c.getMinutes() + "" + c.getSeconds();



    var wbnum = window.frames['bottomFrame'].frames['mainFrame'].document.getElementsByTagName("textarea").length;
    var xumanyzg = "zg";
    for (i = 0; i < wbnum - 1; i++) {
        xumanyzg += window.frames['bottomFrame'].frames['mainFrame'].document.getElementsByTagName("textarea")[i].name + ",";
    }
    if (xumanyzg.length > 2) {
        xumanyzg = xumanyzg.substring(0, xumanyzg.length - 1);
    }
    f.xumanyzg.value = xumanyzg;
    var temp = "";
    var c = 0;
    var j = 0;
    for (i = 0; i < f.elements.length; i++) {


        if (f.elements[i].type == 'radio') {
            if (f.elements[i].checked) { c = 1; }
            if (f.elements[i].name != f.elements[i + 1].name) {
                j++;
                if (c == 0) { alert("请回答第" + j + "题!"); return; }
                c = 0;
            }



        }
    }
    if (true) {
        if (f.zgpj.value.length == 0) {
            alert("主观评价必须填写");
            return;
        }
    }
    if ((mm - mi) == 0) {
        alert("答案不可以一样 请重填！！");
        return;
    } else {

        f.submit();



    }


}

hacker()
