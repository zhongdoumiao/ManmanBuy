/**
 * Created by 种豆苗 on 2018/1/19.
 */
$(function(){
    $.ajax({
        type:"get",
        url:"http://192.168.46.71:9090/api/getindexmenu",
        success:function(info){
            console.log(info);
            var data = template("tpl",info);
            $(".nav ul").html(data);
        }
    });
    //点击更多，切换最后一行
    $(".nav").on("click","li",function(){
        if($(this).data('index')== 7){
            $(this).nextAll().toggleClass('now');
        }
    });
    //查看
    $.ajax({
        type:"get",
        url:"http://192.168.46.71:9090/api/getmoneyctrl",
        success:function(info){
            console.log(info);
            var data = template("list-tpl",info);
            $(".content ul").html(data)
        }
    })
});