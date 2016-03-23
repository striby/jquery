/**
 * Created by Administrator on 2016/3/22.
 */

var num = 0;
var setIntervalId = 0;
/*input 输入*/
$("#email").bind({"click": function () {
    $("#email").val("");
},"blur":function () {
    if(""==this.val()){
        this.val("Enter Your Email");
    }
}
});

$(function () {
    /*轮播*/
    lunboRbtn(2);
    $(".next").bind("click", function () {
         lunboRbtn(num);
        console.log("num=="+num);

    });
    $(".prev").bind("click", function () {
        lunboLbtn(num);
        console.log("num=="+num);
    });
    setIntervalId = setInterval(settimeout,4000);
/*轮播结束*/
    $(".img-list").append("<div class='img-list-words'><h2 class='img-list-words-h2'>Laset Fvrnshed</h2><p class='img-list-words-p'>Lorem ipsum dolor sit amet,consectetur<br>adipiscing elit,sed do eiusmood tempor<br>incididunt ut labore et dolore magna aliqua.<br>ut enim ad minim veniam,quis nost.</p></div>");




});

function lunboRbtn(i){
    clearInterval(setIntervalId);
   var count = i;

    if(count<2){
        count++;
    }else{
        count = 0;
    }
    clickbtn(count);
    num = count;
}

function lunboLbtn(i){
    clearInterval(setIntervalId);
    var count = i;
    if(count>0){
        count--;
    }else{
        count = 2;
    }
    num = count;
    console.log("count=="+count);
    clickbtn(count);
}
function clickbtn(count){
    $(".banner li").css({
        "display": "block",
        "float":"none",
        "position":" absolute",
        "opacity": "0",
        "z-index": "1",
        "-webkit-transition": "opacity 500ms ease-in-out",
        "transition": "opacity 500ms ease-in-out"

    });
    $("#callbacks1_s"+count+"").css({
        "display": "block",
        "float":"left",
        "position":" relative",
        "opacity": "1",
        "z-index": "2",
        "-webkit-transition": "opacity 500ms ease-in-out",
        "transition": "opacity 500ms ease-in-out"
    });
}

function settimeout(){
    setTimeout(function () {
        lunboLbtn(num);
    },1000);
}

//放大镜
$(".mengban").click(function () {
    $(".zhezhao").css("display","block");

    $(".close-div").click(function () {
        $(".zhezhao").css("display","none");
    });
});

