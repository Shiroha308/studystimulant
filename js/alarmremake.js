const bgm1 = document.querySelector("#bgm1");
const btn = document.querySelector("#btn-play");

btn.addEventListener("click", () => {
  // pausedがtrue=>停止, false=>再生中
  //pauseでないときはストップしてねという命令
  if (!bgm1.paused) {
    btn.innerHTML = '<i class="fas fa-play"></i>'; // 「再生ボタン」に切り替え
    bgm1.pause();
  } else {
    btn.innerHTML = '<i class="fas fa-pause"></i>'; // 「一時停止ボタン」に切り替え
    bgm1.play();
  }
});


//終わったときのみ最初に戻す
bgm1.addEventListener("ended", () => {
  bgm1.currentTime = 0; // 再生位置を先頭に移動
  btn.innerHTML = '<i class="fas fa-play"></i>'; // 「再生ボタン」に変更
});

//1分タイマーの作成 concole.log();



//ボタンを押したら要素を取得//getElementByIdでやったところundefinedを返されたnodelist[]で貼っているからか？

//form1に入っている数値を取得
var timernumber = document.form1.number1.value
//1timerのボタンが押されたら発火。
document.getElementById("1timer").addEventListener("click", function launchtimer() {
  timernumber = 5;
  var id = setInterval(function () {
    timernumber--;
    if (timernumber <= 0) {
      clearInterval(id);
      bgm1.play();
    }
  }, 1000)
})


//setInterval("関数",1000)


//日付に関する練習。

//現在の時間を取得

var genzai = new Date();
var y = genzai.getYear();
var mo = genzai.getMonth();
var d = genzai.getDate();
var week = genzai.getDay();
var weeks = ["日", "月", "火", "水", "木", "金", "土"];
var w = weeks[week];
var t = genzai.getHours();
var mi = genzai.getMinutes();
var s = genzai.getSeconds();
//これで現在時刻の設定が完了した。
var nowTime = document.getElementById("currentTime");
nowTime.innerHTML = "今は" + mo + "月" + d + "日" + w + "曜日" + t + "時" + mi + "分" + s + "秒だよ！";

//関数化してしまおう

function onloadCurrentTime() {
  var genzai = new Date();
  var y = genzai.getYear();
  var mo = genzai.getMonth() + 1;
  var d = genzai.getDate();
  var week = genzai.getDay();
  var weeks = ["日", "月", "火", "水", "木", "金", "土"];
  var w = weeks[week];
  var t = genzai.getHours();
  var mi = genzai.getMinutes();
  var s = genzai.getSeconds();
  //これで現在時刻の設定が完了した。
  var nowTime = document.getElementById("currentTime");
  nowTime.innerHTML = "今は" + mo + "月" + d + "日" + w + "曜日" + t + "時" + mi + "分" + s + "秒だよ！";
}
//HTMLに組み込むことで一秒ごとにカウントが進むように
setInterval('onloadCurrentTime()', 1000);

//来年までの時間をカウントダウンする
//計算のためにミリ単位で取得する必要がある。
//console.log();
function countDown() {
  //来年の1日をミリ秒数で取得
  var mSec = Date.UTC((y + 1), 0, 1, 0, 0, 0) - Date.UTC(y, mo, d, t, mi, s);
  var sec = mSec / 1000;
  var se = sec % 60; //秒
  var min = (sec - se) / 60; //分
  var m = min % 60;
  var hou = (min - m) / 60;
  var ho = hou % 24;
  var da = (hou - ho) / 24; //日数
  document.getElementById("Ndate").value = da;
  document.getElementById("Nhour").value = ho;
  document.getElementById("Nminute").value = m;
  document.getElementById("Nseconds").value = se;
  //Intervalをこの関数に対して1秒ごとに指定
}
//最後に関数を呼び出して終了

countDown();





//時刻設定用のフォーマットを作成。入力に対応させる。
var date = document.getElementById("year");
var date = document.getElementById("date");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
