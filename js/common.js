/**
 * Created by 种豆苗 on 2018/1/19.
 */
//封装获取地址栏参数的函数
    function getSearchObj(){
        var search = location.search;
        //对地址进行解码
        search = decodeURI(search);
        //截取问号以后的数据
        search=search.slice(1);
        //将字符串截取成为数组
        var arr = search.split("&");
        //将数组转化成为对象
        var obj = {};
        for(var i = 0; i < arr.length; i++){
            var key = arr[i].split("=")[0];
            var value = arr[i].split("=")[1];
            obj[key]=value;
        }
        return obj;
    }
    /*获取地址栏指定的参数，返回值*/
    function getSearch(key) {
        return getSearchObj()[key];
    }
//mui('.mui-scroll-wrapper').scroll({
//    deceleration: 0.0005 ,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
//    scrollY: true, //是否竖向滚动
//    scrollX: false, //是否横向滚动
//    startX: 0, //初始化时滚动至x
//    startY: 0, //初始化时滚动至y
//    indicators: false, //是否显示滚动条
//    bounce: true //是否启用回弹
//});