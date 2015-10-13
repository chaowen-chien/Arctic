// -------------------------------------------------------------------
// 測站資料
// -------------------------------------------------------------------
var station = [];

function stationData(condition, ename, time, speed, direction, gust, visibility, weather, sky, temperature, dew, altimeter) {
    var color;
    condition = parseInt(condition, 10);
    switch (condition)    // 狀況代碼
    {
        case 0:
            color = "cyan";
            break;
        case 1:
            color = "white";
            break;
        case 2:
            color = "yellow";
            break;
        case 3:
            color = "orange";
            break;
        case 4:
            color = "red";
            break;
        case 5:
            color = "magenta";
            break;
        default:
            color = "lime";
            break;
    }
    this.color = color;                // 顏色標示
    this.ename = ename;                // 英文代號
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
// 表單設定
// -------------------------------------------------------------------

// 分隔線
function setHeader() {
    document.write('<div id="header">');
    document.write('<table>');
    document.write('<tr>');
    document.write('<td colspan="11" id="line"></td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</div>');
}

// 表格內容
function setTable() {
    document.write('<table>');
    document.write('<tr>');
    for (var i = 0; i < station.length; i++) {
        document.write('<td class="station" style="color: ' + station[i].color + ';">' + station[i].ename.toUpperCase() + '</td>');
        document.write('<td>' + station[i].time + '</td>');
        document.write('<td>' + station[i].speed + '</td>');
        document.write('<td>' + station[i].direction + '</td>');
        document.write('<td>' + station[i].gust + '</td>');
        document.write('<td>' + station[i].visibility + '</td>');
        document.write('<td>' + station[i].weather + '</td>');
        document.write('<td>' + station[i].sky + '</td>');
        document.write('<td>' + station[i].temperature + '</td>');
        document.write('<td>' + station[i].dew + '</td>');
        document.write('<td>' + station[i].altimeter + '</td>');
    }
    document.write('</tr>');
    document.write('</table>');
}

// 表格區塊 1
function setTable1() {
    document.write('<div id="table1">');
    setTable();
    document.write('</div>');
    document.getElementById("table1").style.left = "0px";
}

// 表格區塊 2
function setTable2() {
    document.write('<div id="table2">');
    setTable();
    document.write('</div>');
    var w1 = document.getElementById("table1").scrollWidth;
    document.getElementById("table2").style.left = w1 + "px";
}

// -------------------------------------------------------------------
// 捲動表單
// -------------------------------------------------------------------
var scrollSpeed = 50;

function scrollSheet() {
    var table1 = document.getElementById("table1");
    var x1 = parseInt(table1.style.left, 10);
    var w1 = table1.scrollWidth;
    var table2 = document.getElementById("table2");
    var x2 = parseInt(table2.style.left, 10);
    var w2 = table2.scrollWidth;

    x1 = (x1 + w1) < 0 ? (x2 + w2) : x1;
    x2 = (x2 + w2) < 0 ? (x1 + w1) : x2;
    table1.style.left = x1 - 1 + "px";
    table2.style.left = x2 - 1 + "px";

    setTimeout("scrollSheet()", scrollSpeed);
}
