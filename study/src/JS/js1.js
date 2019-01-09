$('input').click(function () {
   $('#box').load(jq1.html)
});
function (response,status,xhr) {
    alert('返回值为:'+response+',状态为:'+status+',状态是:'+xhr.statusText);
}