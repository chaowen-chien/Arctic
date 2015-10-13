// -------------------------------------------------------------------
// 測站資料
// -------------------------------------------------------------------
var station = [];

function stationData(condition, ename, cname, time, speed, direction, gust, visibility, weather, sky, temperature, dew, altimeter) {
    var sign;
    condition = parseInt(condition, 10);
    switch (condition)    // 狀況代碼
    {
        case 0:
            sign = "sign_cyan.gif";
            break;
        case 1:
            sign = "sign_white.gif";
            break;
        case 2:
            sign = "sign_yellow.gif";
            break;
        case 3:
            sign = "sign_orange.gif";
            break;
        case 4:
            sign = "sign_red.gif";
            break;
        case 5:
            sign = "sign_magenta.gif";
            break;
        default:
            sign = "sign_lime.gif";
            break;
    }
    this.sign = sign;                  // 地圖標誌
    this.ename = ename;                // 英文代號
    this.cname = cname;                // 中文名稱
    this.time = time;                  // 時間
    this.speed = speed;                // 風速
    this.direction = direction;        // 風向
    this.gust = gust;                  // 陣風
    this.visibility = visibility;      // 可見度
    this.weather = weather;            // 天氣現象
    this.sky = sky;                    // 天空狀況
    this.temperature = temperature;    // 溫度
    this.dew = dew;                    // 露點
    this.altimeter = altimeter;        // 高度表撥定值
    station.push(this);
}

// -------------------------------------------------------------------
// 地圖標誌
// -------------------------------------------------------------------
function setSign() {
    document.write('<div>');
    for (var i = 0; i < station.length; i++) {
        var uname = station[i].ename.toUpperCase();
        var lname = station[i].ename.toLowerCase();
        var cname = station[i].cname;
        var sign = station[i].sign;
        document.write('<div class="station" id="sign_' + lname + '">'
            + '<a href="../marquee/' + lname + '.html"><img class="sign" src="' + sign + '" title="' + cname + '"></a>' + uname
            + '</div>');
    }
    document.write('</div>');
}

// -------------------------------------------------------------------
// 資料區塊
// -------------------------------------------------------------------
function setData() {
    // 時間
    document.write('<div class="hidden" id="data1">');
    document.write('<div class="title">時間</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var time = station[i].time;
        document.write('<div class="data" id="data_' + lname + '">' + time + '</div>');
    }
    document.write('</div>');

    // 風速
    document.write('<div class="hidden" id="data2">');
    document.write('<div class="title">風速</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var speed = station[i].speed;
        document.write('<div class="data" id="data_' + lname + '">' + speed + '</div>');
    }
    document.write('</div>');

    // 風向
    document.write('<div class="hidden" id="data3">');
    document.write('<div class="title">風向</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var direction = station[i].direction;
        document.write('<div class="data" id="data_' + lname + '">' + direction + '</div>');
    }
    document.write('</div>');

    // 陣風
    document.write('<div class="hidden" id="data4">');
    document.write('<div class="title">陣風</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var gust = station[i].gust;
        document.write('<div class="data" id="data_' + lname + '">' + gust + '</div>');
    }
    document.write('</div>');

    // 可見度
    document.write('<div class="hidden" id="data5">');
    document.write('<div class="title">可見度</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var visibility = station[i].visibility;
        document.write('<div class="data" id="data_' + lname + '">' + visibility + '</div>');
    }
    document.write('</div>');

    // 天氣現象
    document.write('<div class="hidden" id="data6">');
    document.write('<div class="title">天氣現象</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var weather = station[i].weather;
        document.write('<div class="data" id="data_' + lname + '">' + weather + '</div>');
    }
    document.write('</div>');

    // 天空狀況
    document.write('<div class="hidden" id="data7">');
    document.write('<div class="title">天空狀況</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var sky = station[i].sky;
        document.write('<div class="data" id="data_' + lname + '">' + sky + '</div>');
    }
    document.write('</div>');

    // 溫度
    document.write('<div class="hidden" id="data8">');
    document.write('<div class="title">溫度</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var temperature = station[i].temperature;
        document.write('<div class="data" id="data_' + lname + '">' + temperature + '</div>');
    }
    document.write('</div>');

    // 露點
    document.write('<div class="hidden" id="data9">');
    document.write('<div class="title">露點</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var dew = station[i].dew;
        document.write('<div class="data" id="data_' + lname + '">' + dew + '</div>');
    }
    document.write('</div>');

    // 高度表撥定值
    document.write('<div class="hidden" id="data10">');
    document.write('<div class="title">高度表撥定值</div>');
    for (var i = 0; i < station.length; i++) {
        var lname = station[i].ename.toLowerCase();
        var altimeter = station[i].altimeter;
        document.write('<div class="data" id="data_' + lname + '">' + altimeter + '</div>');
    }
    document.write('</div>');
}

// -------------------------------------------------------------------
// 循環顯示
// -------------------------------------------------------------------
var dataNow = 0;
var dataMax = 10;
var showTime = 5000;

function showData() {
    dataNow++;
    if (dataNow == 1) {
        document.getElementById("data" + dataMax).style.visibility = "hidden";
    } else {
        document.getElementById("data" + (dataNow - 1)).style.visibility = "hidden";
    }
    document.getElementById("data" + dataNow).style.visibility = "visible";
    dataNow %= dataMax;
    setTimeout("showData()", showTime);
}
