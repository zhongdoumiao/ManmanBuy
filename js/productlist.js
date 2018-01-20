/**
 * Created by 种豆苗 on 2018/1/20.
 */
//获取地址栏中需要的参数
var categoryId = getSearch("categoryId");
var category = getSearch("category");
console.log(categoryId);
console.log(category);
//var pageId = 1;
$.ajax({
   type:"get",
    url:"http://192.168.46.24:9090/api/getcategorybyid",
    data:{
        categoryid:categoryId
    },
    success:function(info){
        console.log(info);
        var data = template("tpl",info);
        $(".screen").html(data);
    }
});
render();
function render(pageId){
    $.ajax({
        type:"get",
        url:"http://192.168.46.24:9090/api/getproductlist",
        data:{
            categoryid:categoryId,
            pageid:pageId || 1
        },
        success:function(info){
            info.pages = Math.ceil(info.totalCount / info.pagesize);
            info.page= pageId;
            var data = template("li-tpl",info);
            $(".lw").html(data);
            //给Option进行事件委托
            $(".lw").on("change","select",function(){
                pageId = $("select option:selected").val();
                render(pageId);
            });
            $(".lw").on("click",".prev",function(){
                if($("select option:selected").val()>1){
                    pageId = $("select option:selected").val()-1;
                    render(pageId);
                }
            });
            $(".lw").on("click",".next",function(){
                if(pageId !=info.pages){
                    pageId = +($("select option:selected").val())+1;
                    render(pageId);
                }
            });
        }
    });
}
