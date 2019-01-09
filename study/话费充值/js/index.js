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
// <!--输入号码事件-->
function myFunction(){
    var l = document.getElementById("input");
    var Tip=document.getElementById("tip");
    var Surface=document.getElementById("surface");
    var Inside=document.getElementById("inside");
    var L= l.value;
    var len =L.length;
    var NoInput = document.getElementById("noInput");
    var Pay = document.getElementById("pay");
    NoInput.style.display = "none";
    if(len==0){
        Tip.style.display="none";
    }else if(len!=11&&len!=0){
        Tip.style.display = "block";
    }else{
        Tip.style.display = "none";
        var myreg=/^[1][345678][0-9]{9}$/;
        if (!myreg.test(L)) {
            return false;
        }else{
            // Inside.style.display="block";
            // Surface.style.display="none";
            // $.ajax({
            //     type:'GET',
            //     url:" price.json",
            //     dataType:"json",
            //     success:function (data) {
            //         $.each(data.price,function (i,item) {
            //             var aaa = item.price;
            //             document.getElementsByClassName("navList").innerText=aaa+"元";
            //         })
            //     }
            // });
            // document.getElementsByClassName("li").style.color="blue";
            $(document).ready(function(){
                var navList=document.getElementsByClassName("navList");
                for(let i=0;i<navList.length;i++){
                    var sum=navList[i].value;
                    // $("span").show();
                    $(".navList").append(sum+"元");

                   // document.getElementsByClassName("li").style.color="blue";
                    navList[i].onclick = function(){
                        this.style.backgroundColor = "#00a4f5";
                        this.style.color="#ededed";
                        var num = this.value;
                        $("#pay").append(":" + $(".navList").value + "元");
                        $("#pay-money").text($(".navList").value + "元");
                        for (var i = 0; i < $(this).siblings().length; i++) {
                            $(this).siblings().css("background","");
                            $(this).siblings().css("color","#bdbdbc");
                        }
                    }
                }
            });
        }
    }
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
        // window.open("pay.html","支付界面","width=300,height=400,top=200,left=700 " );
        var Phone=document.getElementById("input").value;
        document.getElementById("pay-phone").innerText="支付号码为："+Phone;
        // document.getElementById("shade").classList.remove('hide');
        // document.getElementById("windows").classList.remove('hide');
        document.getElementById("hidden").style.display="block";


    }

}
// function myFun() {
//     document.getElementById("pay-main").style.display="none";
//     document.getElementById("success").style.display="block";
// }
