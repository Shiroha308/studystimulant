//setInterval,clearIntervalの練習

function reset() {
  location.reload();
}

//音楽格納庫を作成
var bgmno = document.getElementsByClassName("audiolist")
var bgmNo = Math.floor(Math.random() * bgmno.length);
console.log(bgmno[bgmNo]); //これで番号で返すことが出来た。

//ランダムに音楽を鳴らす関数を作成。
function playaudio() {
  bgmno[bgmNo].play();
}

//おまけ用格納庫を作成
var bgmnoomake = document.getElementsByClassName("audiolistomake")
var bgmNoomake = Math.floor(Math.random() * bgmnoomake.length);

//ランダムに音楽を鳴らす関数を作成。
function playaudioomake() {
  bgmnoomake[bgmNoomake].play();
}


//音楽を止める
function stopaudio() {
  bgmno[bgmNo].pause();
}

//windowに対する通知の練習
//window.location.hrefでリンクを追加して飛ばす。
/*
function showNotification() {
  const notification = new Notification("勉強お疲れ様！", {
    body: "英語たるんでるんじゃない？",
    icon: "images/miku.png"
  })
  notification.onclick = (e) => {
    window.location.href = "https://www.youtube.com/watch?v=Jncoj-Gvh9o";
  }
}
//通知をクリックしたときのアクションを設定。
console.log(Notification.permission);
if (Notification.permission === "granted") {
  showNotification();
} else if (Notification.permission !== "denied") {
  Notification.requestPermission().then(permission => {
    showNotification();
  });
}
*/

//現在時間を取得

function updateClock() {
  var now = new Date();
  var dayName = now.getDay();
  var mo = now.getMonth();
  var daynum = now.getDate();
  var year = now.getFullYear();
  var hou = now.getHours();
  var min = now.getMinutes();
  var sec = now.getSeconds();
  var pe = "AM";
  //12超えたらPMにする処理
  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    pe = "PM"
  }
  if (sec < 10) {
    sec = "0" + sec
  }
  if (hou < 10) {
    hou = "0" + hou
  }
  if (min < 10) {
    min = "0" + min
  }
  var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  var ids = ["dayname", "month", "daynum", "Year", "hours", "minutes", "seconds", "AMPM"];
  var values = [week[dayName], month[mo], daynum, year, hou, min, sec, pe];
  for (var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i]; //iが増えるごとに上のget???が格納されていく
}
//HTML側で呼び出す関数を作成
function intervalClock() {
  updateClock();
  window.setInterval("updateClock()", 1);
}
//アラーム開始が推されたら入力された値を取得する。
function alarmset() {
  //フォームのセレクトまでを取得
  var selecthour = document.getElementById("selecthour").value;
  var selectmin = document.getElementById("selectmin").value;
  document.getElementById("output").innerHTML = "アラームを" + selecthour + "時" + selectmin + "分に設定したよ♪" + "<p>" + "終わったら呼び出してあげる！"; //clickされたらテキスト表示
}

//ここから先は現在時刻＝設定時間を作り、音を鳴らす。
//if(設定した時間===現在時刻){音を鳴らす}

var timercheck;



function firealarm() {
  document.getElementById("alarmstart").style.visibility = "hidden";
  alarmset();
  setInterval(
    function timercheck() {
      var now = new Date();
      var dayName = now.getDay();
      var mo = now.getMonth();
      var daynum = now.getDate();
      var year = now.getFullYear();
      var hou = now.getHours();
      if (hou < 10) {
        hou = "0" + now.getHours();
      }
      var min = now.getMinutes();
      if (min < 10) {
        min = "0" + now.getMinutes();
      }
      var sec = now.getSeconds();
      if (sec < 10) {
        sec = "0" + now.getSeconds();
      }
      var selecthour = document.getElementById("selecthour").value;
      var selectmin = document.getElementById("selectmin").value;
      if (selecthour == hou && selectmin == min && sec== 0) {
        playaudio();
      }
    }, 1000)
}

//アラーム停止の関数を入力
function stopalarm() {
  //リセットする
  reset();
  document.getElementById("output").innerHTML = ""; //テキストを隠す
  document.getElementById("alarmstart").style.visibility = "visible";
  //更にストップ機能を果たす必要がある。
}
//console.log();

//タイマーの記述はここから

//bargroupのtimerクラスを取得
var time = document.getElementsByClassName('time');
var time_display = document.getElementsByClassName("time_display");

function rangeValue(time, target, target2) {
  return function () {
    if (time.value >= 10) {
      target.innerHTML = time.value;
      target2.innerHTML = time.value;
    } else {
      target.innerHTML = "0" + time.value;
      target2.innerHTML = "0" + time.value;
    }
  }
}
for (var i = 0; i < time.length; i++) {
  bar = time[i].getElementsByTagName("input")[0];
  target = time[i].getElementsByTagName("span")[0];
  target2 = time_display[i].getElementsByTagName("span")[0];
  bar.addEventListener("input", rangeValue(bar, target, target2));
}
//入力された全部の時間を取得。
function timeAll() {
  var hour_all = document.getElementById("hour").value;
  var minute_all = document.getElementById("minute").value;
  var second_all = document.getElementById("second").value;
  var all = Number(hour_all * 3600) + Number(minute_all * 60) + Number(second_all);
  return all;
}

//console.log(timeAll());




var ontheway = false;
console.log(ontheway);
var onthewayallsec = 0;

function start() {
  document.getElementById("bargroup").style.visibility = "hidden";
  document.getElementById("start_button").disabled = true;
  document.getElementById("reset_button").disabled = true;
  document.getElementById("stop_button").disabled = false;
  if (ontheway == false) {
    var allsec = timeAll();
  } else {
    var allsec = onthewayallsec;
  }
  ontheway = false;
  var dt = new Date();
  var endDt = new Date(dt.getTime() + allsec * 1000);
  hour = Math.floor(allsec / 3600);
  if (hour < 10) {
    largehour.innerHTML = "0" + hour;
  } else {
    largehour.innerHTML = hour;
  }
  hour_remainder = Math.floor(allsec % 3600);
  minute = Math.floor(hour_remainder / 60);
  if (minute < 10) {
    largeminute.innerHTML = "0" + minute;
  } else {
    largeminute.innerHTML = minute;
  }
  sec = Math.floor(hour_remainder % 60);
  if (sec < 10) {
    largesecond.innerHTML = "0" + sec;
  } else {
    largesecond.innerHTML = sec;
  }
  var count_down = setInterval(function () {
    allsec = allsec - 1;
    dt = new Date();
    hour = Math.floor(allsec / 3600);
    if (hour < 10) {
      largehour.innerHTML = "0" + hour;
    } else {
      largehour.innerHTML = hour;
    }
    hour_remainder = Math.floor(allsec % 3600);
    minute = Math.floor(hour_remainder / 60);
    if (minute < 10) {
      largeminute.innerHTML = "0" + minute;
    } else {
      largeminute.innerHTML = minute;
    }
    sec = Math.floor(hour_remainder % 60);
    if (sec < 10) {
      largesecond.innerHTML = "0" + sec;
    } else {
      largesecond.innerHTML = sec;
    }
    if (dt.getTime() >= endDt.getTime()) {
      clearInterval(count_down);
      playaudio(1); //音を鳴らす
      largeminute.innerHTML = minute;
      largesecond.innerHTML = "00";
      largeminute.innerHTML = "00";
      largehour.innerHTML = "00";
    }
    if (ontheway == true) {
      clearInterval(count_down);
      onthewayallsec = allsec;
    }
  }, 1000);
}

function stop() {
  stopaudio();
  ontheway = true;
  document.getElementById("start_button").disabled = false;
  document.getElementById("reset_button").disabled = false;
  document.getElementById("stop_button").disabled = true;
}


//おまけコンテンツを作ろう

//30分を取得

var thirtymin = 30 * 60 * 60;
console.log(thirtymin);

function encouragestudy() {
  setInterval(function () {
    var bgmnoomake = document.getElementsByClassName("audiolistomake")
    var bgmNoomake = Math.floor(Math.random() * bgmnoomake.length);
    bgmnoomake[bgmNoomake].play();
  }, thirtymin);
  document.getElementById("encourage").disabled = true;
}
