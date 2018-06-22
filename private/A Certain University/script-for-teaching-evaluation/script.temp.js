/**
 * Script for teaching evaluation
 * 
 * 补丁（内层表单自动完成部分）
 */
a = {}
b = []
$("input[type='radio']").map((key, v) => {
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


$("textarea[name='zgpj']").val(" ")