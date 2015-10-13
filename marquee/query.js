// -------------------------------------------------------------------
// 測站資料
// -------------------------------------------------------------------
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
    document.write('<td class="station" style="color: ' + station.color + ';">' + station.ename.toUpperCase() + '</td>');
    document.write('<td>' + station.time + '</td>');
    document.write('<td>' + station.speed + '</td>');
    document.write('<td>' + station.direction + '</td>');
    document.write('<td>' + station.gust + '</td>');
    document.write('<td>' + station.visibility + '</td>');
    document.write('<td>' + station.weather + '</td>');
    document.write('<td>' + station.sky + '</td>');
    document.write('<td>' + station.temperature + '</td>');
    document.write('<td>' + station.dew + '</td>');
    document.write('<td>' + station.altimeter + '</td>');
    document.write('</tr>');
    document.write('</table>');
}

// 表格區塊 1
function setTable1() {
    document.write('<div id="table1">');
    setTable();
    document.write('</div>');
}

// -------------------------------------------------------------------
// 重新載入
// -------------------------------------------------------------------
var reloadTime = 5;

function reloadMarquee()
{
    reloadTime--;
    if (reloadTime <= 0) {
        location.href = "index.html";
    }
    setTimeout("reloadMarquee()", 1000);
}
