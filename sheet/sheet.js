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

// 表格標題
function setHeader() {
    document.write('<div id="header">');
    document.write('<table>');
    document.write('<tr>');
    document.write('<th class="col_1">測站</th>');
    document.write('<th class="col_2">時間</th>');
    document.write('<th class="col_3">風速</th>');
    document.write('<th class="col_4">風向</th>');
    document.write('<th class="col_5">陣風</th>');
    document.write('<th class="col_6">可見度</th>');
    document.write('<th class="col_7">天氣現象</th>');
    document.write('<th class="col_8">天空狀況</th>');
    document.write('<th class="col_9">溫度</th>');
    document.write('<th class="col_10">露點</th>');
    document.write('<th class="col_11">高度表撥定值</th>');
    document.write('</tr>');
    document.write('<tr>');
    document.write('<td colspan="11" id="line"></td>');
    document.write('</tr>');
    document.write('</table>');
    document.write('</div>');
}

// 表格內容
function setTable() {
    document.write('<table>');
    for (var i = 0; i < station.length; i++) {
        document.write('<tr><td colspan="11"><hr></td></tr>');
        document.write('<tr>');
        document.write('<td class="col_1 station" style="color: ' + station[i].color + ';">' + station[i].ename.toUpperCase() + '</td>');
        document.write('<td class="col_2">' + station[i].time + '</td>');
        document.write('<td class="col_3">' + station[i].speed + '</td>');
        document.write('<td class="col_4">' + station[i].direction + '</td>');
        document.write('<td class="col_5">' + station[i].gust + '</td>');
        document.write('<td class="col_6">' + station[i].visibility + '</td>');
        document.write('<td class="col_7">' + station[i].weather + '</td>');
        document.write('<td class="col_8">' + station[i].sky + '</td>');
        document.write('<td class="col_9">' + station[i].temperature + '</td>');
        document.write('<td class="col_10">' + station[i].dew + '</td>');
        document.write('<td class="col_11">' + station[i].altimeter + '</td>');
        document.write('</tr>');
    }
    document.write('</table>');
}

// 表格區塊 1
function setTable1() {
    document.write('<div id="table1">');
    setTable();
    document.write('</div>');
    var y = document.getElementById("header").scrollHeight;
    document.getElementById("table1").style.top = y + "px";
}

// 表格區塊 2
function setTable2() {
    document.write('<div id="table2">');
    setTable();
    document.write('</div>');
    var table1 = document.getElementById("table1");
    var y1 = parseInt(table1.style.top, 10);
    var h1 = table1.scrollHeight;
    document.getElementById("table2").style.top = y1 + h1 + "px";
}

// -------------------------------------------------------------------
// 捲動表單
// -------------------------------------------------------------------
var scrollSpeed = 50;

function scrollSheet() {
    var table1 = document.getElementById("table1");
    var y1 = parseInt(table1.style.top, 10);
    var h1 = table1.scrollHeight;
    var table2 = document.getElementById("table2");
    var y2 = parseInt(table2.style.top, 10);
    var h2 = table2.scrollHeight;

    y1 = (y1 + h1) < 0 ? (y2 + h2) : y1;
    y2 = (y2 + h2) < 0 ? (y1 + h1) : y2;
    table1.style.top = y1 - 1 + "px";
    table2.style.top = y2 - 1 + "px";

    setTimeout("scrollSheet()", scrollSpeed);
}
