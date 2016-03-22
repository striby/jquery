/**
 * Created by Administrator on 2016/3/21.
 */

    $(".img-div").click(function () {
        var imgId = $(this).attr("id");
        var src = "./images/"+$(this).attr("id");
        var imgNum = imgId.substring(2,3);

        $(".zhezhao").css("display","block");
        console.log(src);
        $(".img-container").css({"background":"url("+src+") center no-repeat","background-size":"contain"});

        $(".lbtn").click(function () {
            if(imgNum>1){
                imgNum--;
                src = "./images/1-"+imgNum+".jpg";

                showImg(src);
                //$(".img-container").fadeIn("1000", function () {
                //    $(".img-container").css({"background":"url("+src+") center no-repeat","background-size":"contain"});
                //})
            }else{
            //    到达第一张
                $(".img-container").animate({
                    left:'30px'
                });
                $(".img-container").animate({
                    left:'-30px'
                });
                $(".img-container").animate({
                    left:'0px'
                });
            }
        });

        $(".rbtn").click(function(){
            if(imgNum<8){
                imgNum++;
                src = "./images/1-"+imgNum+".jpg";
                showImg(src);
            }else{
                //    到达第一张
                $(".img-container").animate({
                    right:'30px'
                });
                $(".img-container").animate({
                    right:'-30px'
                });
                $(".img-container").animate({
                    right:'0px'
                });
            }
        });
    });


    $(".close-div").click(function () {
        $(".zhezhao").css("display","none");
    });


function showImg(src){
    $(".img-container").animate({
        opacity: 0
    },function(){
        $(".img-container").css({"background":"url("+src+") center no-repeat","background-size":"contain"});
    });

    $(".img-container").animate({
        opacity: 1

    });
}