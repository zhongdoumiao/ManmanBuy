/**
 * Created by 种豆苗 on 2018/1/19.
 */
$.ajax({
    type:"get",
    url:"http://192.168.46.24:9090/api/getcategorytitle",
    success:function(info){
        console.log(info);
        var data = template("tpl",info);
        $(".row .mui-table-view").html(data);
    }
});
//console.log($(".row .mui-table-view"));
$(".row .mui-table-view").on("tap","li",function() {
    var titleId = $(this).data("titleid");
    console.log(titleId);
    $.ajax({
        type: "get",
        url: "http://192.168.46.24:9090/api/getcategory",
        dataType:"json",
        data: {
            titleid: titleId
        },
        success: function (info) {
            console.log(info);
            var data = template("li-tpl",info);
            $(".row .mui-collapse-content").html(data);
        }
    })
})
