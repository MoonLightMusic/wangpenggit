//封装一个代替BYID的数字;
function byId{
    return  typeof (id)==="string"?document.getElementById(id):id;
}
