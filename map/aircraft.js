// -------------------------------------------------------------------
// 戰機設定
// -------------------------------------------------------------------
var flying = 0;
var course = 0;
var sourceX;
var sourceY;
var targetX;
var targetY;
var nowX;
var nowY;
var position;
var distance;

function setAircraft() {
    document.write('<img id="aircraft" src="aircraft_4.gif">');
    takeoff();
}
// -------------------------------------------------------------------
// 測站座標
// -------------------------------------------------------------------
var airline = [];
var point_ss = new stationCoord(274,  29);
var point_tp = new stationCoord(234,  29);
var point_po = new stationCoord(205,  59);
var point_mq = new stationCoord(164, 128);
var point_lg = new stationCoord(172, 137);
var point_ku = new stationCoord(139, 222);
var point_bm = new stationCoord( 54, 214);
var point_ws = new stationCoord(119, 293);
var point_ay = new stationCoord(127, 314);
var point_dc = new stationCoord(145, 340);
var point_zn = new stationCoord(232, 308);
var point_yu = new stationCoord(280, 157);

function stationCoord(x, y) {
    this.x = x;
    this.y = y;
    airline.push(this);
}

// -------------------------------------------------------------------
// 航線設定
// -------------------------------------------------------------------
function setAirline() {
    var i = course;
    var j = (course + 1) % (airline.length);
    sourceX = airline[i].x;
    sourceY = airline[i].y;
    targetX = airline[j].x;
    targetY = airline[j].y;
    var a = sourceX - targetX;
    var b = sourceY - targetY;
    distance = Math.max(Math.abs(a), Math.abs(b));
}

// -------------------------------------------------------------------
// 航向設定
// -------------------------------------------------------------------
function setDirection() {
    var x = targetX - sourceX;
    var y = sourceY - targetY;
    var degree = Math.round(Math.atan2(y, x) / Math.PI * 180);
    var direction = 0;
    if (degree >= -22 && degree <= 22) {
        direction = 6;    // 東方
    } else if (degree > 22 && degree < 68) {
        direction = 9;    // 東北方
    } else if (degree >= 68 && degree <= 112) {
        direction = 8;    // 北方
    } else if (degree > 112 && degree < 158) {
        direction = 7;    // 西北方
    } else if (degree >= 158 || degree <= -158) {
        direction = 4;    // 西方
    } else if (degree > -158 && degree < -112) {
        direction = 1;    // 西南方
    } else if (degree >= -112 && degree <= -68) {
        direction = 2;    // 南方
    } else if (degree > -68 && degree < -22) {
        direction = 3;    // 東南方
    }
    document.getElementById("aircraft").src = "aircraft_" + direction + ".gif";
}

// -------------------------------------------------------------------
// 戰機啟航
// -------------------------------------------------------------------
function takeoff() {
    if (flying == 0) {
        flying = 1;
        position = 0;
        setAirline();
        setDirection();
    }
    nowX = Math.floor(sourceX - (sourceX - targetX) * position / distance);
    nowY = Math.floor(sourceY - (sourceY - targetY) * position / distance);
    var aircraft = document.getElementById("aircraft");
    aircraft.style.left = nowX + "px";
    aircraft.style.top = nowY + "px";
    position++;
    if (position >= distance) {
        course++;
        course %= airline.length;
        flying = 0;
    }
    setTimeout("takeoff()", 100);
}
