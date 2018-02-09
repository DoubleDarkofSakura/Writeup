a = {}
b = []
$("input[type='radio']").map((key, v) => {
    k = $(v).attr("name")
    if (!a[k]) { a[k] = v;
        b.push(v) }
    return 0;
})

b.map((v) => {
    k = $(v).attr("name")
    return $("input[name='" + k + "']").val()
})

["20_1", "0_0", "0_0", "0_0", "0_0", "0_0", "20_1", "5_1", "10_1", "0_0", "5_1", "5_1", "10_1", "20_1", "5_0.9", "0_0"]


$("#mainF").contents().find("input[type='radio']").map((...v) => console.log(...v))

$(window.frames['bottomFrame'].frames['mainFrame'].document).find("input[type='radio']").map((...v) => console.log(...v))


-- -

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

$(window.frames['bottomFrame'].frames['mainFrame'].document).find("img#submit1")[0].onclick()

window.frames['bottomFrame'].frames['mainFrame'].document.StDaForm.submit();
-- -


b.map((v) => {
    k = $(v).attr("name")
    return $("input[name='" + k + "']").val()
})

$(v).attr("checked", "checked")
b.map((v) => {
    k = $(v).attr("name")
    value = $(v).attr("value")
    $("input[name='" + k + "']").val(value)
    return $("input[name='" + k + "']").val()
})

b.map((v) => {
    k = $(v).attr("name")
    return
})

window.frames['bottomFrame'].frames['mainFrame'].document.StDaForm.submit();


$(window.frames['bottomFrame'].frames['mainFrame'].document).find("textarea[name='zgpj']")

$(window.frames['bottomFrame'].frames['mainFrame'].document).find("img#submit1")[0].onclick
window.frames['bottomFrame'].frames['mainFrame'].document.StDaForm

function check() {

    var redi = document.getElementsByTagName("input");
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



    var wbnum = document.getElementsByTagName("textarea").length;
    var xumanyzg = "zg";
    for (i = 0; i < wbnum - 1; i++) {
        xumanyzg += document.getElementsByTagName("textarea")[i].name + ",";
    }
    if (xumanyzg.length > 2) {
        xumanyzg = xumanyzg.substring(0, xumanyzg.length - 1);
    }
    document.StDaForm.xumanyzg.value = xumanyzg;
    var temp = "";
    var c = 0;
    var j = 0;
    for (i = 0; i < document.StDaForm.elements.length; i++) {


        if (document.StDaForm.elements[i].type == 'radio') {
            if (document.StDaForm.elements[i].checked) { c = 1; }
            if (document.StDaForm.elements[i].name != document.StDaForm.elements[i + 1].name) {
                j++;
                if (c == 0) { alert("请回答第" + j + "题!"); return; }
                c = 0;
            }



        }
    }
    if (true) {
        if (window.document.StDaForm.zgpj.value.length == 0) {
            alert("主观评价必须填写");
            return;
        }
    }
    if ((mm - mi) == 0) {
        alert("答案不可以一样 请重填！！");
        return;
    } else {

        window.document.StDaForm.submit();



    }


}





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

        alert("ok");
        return;



    }


}

-- -

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
