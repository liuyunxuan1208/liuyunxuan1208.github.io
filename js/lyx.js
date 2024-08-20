// 动态心跳
// $(document).ready(function(e){
//     $('.copyright').html('©2021 - 2022 <i class="fa-fw fas fa-heartbeat fa-beat" style="color: #f92672;"></i> By 花猪');
// })

$(document).ready(function(e){
    show_date_time();
})

//本站运行时间
// function show_date_time(){
//     $('.framework-info').html('本站已运行<span id="span_dt_dt" style="color: #131212;"></span>');
//     window.setTimeout("show_date_time()", 1000);
//     BirthDay=new Date("1/20/2021 0:0:0");
//     today=new Date();
//     timeold=(today.getTime()-BirthDay.getTime());
//     sectimeold=timeold/1000
//     secondsold=Math.floor(sectimeold);
//     msPerDay=24*60*60*1000
//     e_daysold=timeold/msPerDay
//     daysold=Math.floor(e_daysold);
//     e_hrsold=(e_daysold-daysold)*24;
//     hrsold=Math.floor(e_hrsold);
//     e_minsold=(e_hrsold-hrsold)*60;
//     minsold=Math.floor((e_hrsold-hrsold)*60);
//     seconds=Math.floor((e_minsold-minsold)*60);
//     span_dt_dt.innerHTML='<font style=color:#afb4db>'+daysold+'</font> 天 <font style=color:#f391a9>'+hrsold+'</font> 时 <font style=color:#fdb933>'+minsold+'</font> 分 <font style=color:#a3cf62>'+seconds+'</font> 秒';
// }

function show_date_time() {
    var BirthDay = new Date("1/20/2021 0:0:0");
    var today = new Date();
    var timeold = (today.getTime() - BirthDay.getTime());
    var sectimeold = timeold / 1000;
    var secondsold = Math.floor(sectimeold);
    var msPerDay = 24 * 60 * 60 * 1000;
    var e_daysold = timeold / msPerDay;
    var daysold = Math.floor(e_daysold);
    var e_hrsold = (e_daysold - daysold) * 24;
    var hrsold = Math.floor(e_hrsold);
    var e_minsold = (e_hrsold - hrsold) * 60;
    var minsold = Math.floor((e_hrsold - hrsold) * 60);
    var seconds = Math.floor((e_minsold - minsold) * 60);

    // 更新HTML
    $('#runtime').html('<span id="span_dt_dt" style="color: #131212;">' +
        '<font style="color:#afb4db;">' + daysold + '</font> 天 ' +
        '<font style="color:#f391a9;">' + hrsold + '</font> 时 ' +
        '<font style="color:#fdb933;">' + minsold + '</font> 分 ' +
        '<font style="color:#a3cf62;">' + seconds + '</font> 秒'
    );

    // 每秒更新一次
    window.setTimeout(show_date_time, 1000);
}