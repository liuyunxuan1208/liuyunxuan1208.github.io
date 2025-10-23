function show_date_time() {
    var t = new Date("1/20/2021 0:0:0");
    var o = (new Date()).getTime() - t.getTime();
    var seconds = Math.floor(o / 1000);
    var days = Math.floor(seconds / (3600 * 24));
    var hours = Math.floor((seconds % (3600 * 24)) / 3600);
    var minutes = Math.floor((seconds % 3600) / 60);
    var secs = seconds % 60;
    $("#runtime").html('<span id="span_dt_dt" style="color: #131212;"><font style="color:#afb4db;">' + days + '</font> 天 <font style="color:#f391a9;">' + hours + '</font> 时 <font style="color:#fdb933;">' + minutes + '</font> 分 <font style="color:#a3cf62;">' + secs + "</font> 秒");
    window.setTimeout(show_date_time, 1000);
}
$(document).ready(function() {
    show_date_time();
});