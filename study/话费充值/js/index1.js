var data = [
    {
        "cardId": "1",
        "cardName":"10M",
        "price": "3",
        "faceValue": ""
    },
    {
        "cardId": "2",
        "cardName":"30M",
        "price": "5",
        "faceValue": ""
    },
    {
        "cardId": "3",
        "cardName":"70M",
        "price": "10",
        "faceValue": ""
    },
    {
        "cardId": "4",
        "cardName":"150M",
        "price": "20",
        "faceValue": ""
    },
    {
        "cardId": "5",
        "cardName":"500M",
        "price": "30",
        "faceValue": ""
    },
    {
        "cardId": "6",
        "cardName":"1G",
        "price": "50",
        "faceValue": ""
    }
];
function next() {
    var Surface= document.getElementById("surface");
    var Inside=document.getElementById("inside");
    Surface.style.display="none";
    Inside.style.display="block";
}
function prev() {
    var Surface=document.getElementById("surface");
    var  Inside=document.getElementById("inside");
    Surface.style.display="block";
    Inside.style.display="none";
}
function error() {
    var NoInput = document.getElementById("noInput");
    var Input = document.getElementById("input");
    var Inside = document.getElementById("inside");
    if (Input.value=='请输入或选择手机号码'){
        NoInput.style.display="block";
        return;
    }else {
        NoInput.style.display = "none";
    }
    if (Inside.style.display="block"){
        var Phone=document.getElementById("input").value;
        document.getElementById("pay-phone").innerText="支付号码为："+Phone;
        document.getElementById("hidden").style.display="block";
    }
}
$(document).ready(function () {
    for(var b in data){
     var c =data[b].cardName;
     console.log(c);
        var NavList = document.getElementsByClassName("navList");
        NavList[b].innerHTML=c;
    }
    $("input").change(function () {
     if ($("input").val().length==0){
         $("#tip").hide();
     }else if($("input").val().length!=11&&$("input").val().length!=0)  {
         $("#tip").show();
     }else {
         $("#tip").hide();
         var myreg=/^[1][345678][0-9]{9}$/;
         if(!myreg.test($("input").val()) ){
             return false;
         }else {
             var NavList = document.getElementsByClassName("navList");
             for(let i=0;i<NavList.length;i++) {
                 // document.getElementsByClassName("navList").innerText=data[i].price+"元";
                 NavList[i].innerHTML=data[i].cardName + data[i].price+"元";
                 // for (var a in data) {
                 //     // $(".navList").text(data[a].cardName + data[a].price + "元");
                 //    NavList[a].innerText=data[a].cardName + data[a].price+"元";
                 // }

                 NavList[i].onclick = function () {
                     this.style.backgroundColor = "#00a4f5";
                     this.style.color = "#ededed";
                         $("#pay").html("立即支付:" +this.value+ "元");
                         $("#pay-money").html(this.value + "元");
                         for (var i = 0; i < $(this).siblings().length; i++) {
                             $(this).siblings().css("background", "");
                             $(this).siblings().css("color", "#bdbdbc");
                         }
                     }
                 }

         }
             
             
             
             
             
             
             
             
         }
    });
});