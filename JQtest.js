/**
 * Created by exialym on 2016/6/22 0022.
 */
/****************************JQ的总体结构**********************/
(function (a, fn) {
    if (typeof window !== "undefined") {
        fn(window,"hahahaasdfah");
    }

}(1,function (window,a) {
    var ha = {
        first:a
    }
    window.ha = ha;
    return ha;
}));
alert(ha.first);