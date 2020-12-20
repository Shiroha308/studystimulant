//まずはIDを取得してonclick.playに結びつける。
var audio = document.getElementById("Audio");
//onclickとfunctionの名前を合わせる
//これだと最近のブラウザでは動かないらしい
//何かしらアクションを入れよう
/*function playAudio() {
  audio.play();
  console.log("play");
}

function stopAudio() {
  audio.pause();
  console.log("hello");
}
*/
//ボタンを取得
var btn=document.getElementsByClassName("btn-dark");
console.log(btn);







//クイズを作成してみる

const question1 = "次のうち、ツンデレではない子を選びなさい";
const answers = ["涼宮ハルヒ", "牧瀬栗栖", "更科瑠香"];
const correct = "更科瑠香";
const $button = document.getElementsByTagName("button");
document.getElementById("question").textContent = question1;
$button[2].textContent = answers[0];
$button[3].textContent = answers[1];
$button[4].textContent = answers[2];
//正解のボタンにだけaddEventListenerを足す

//関数を省略化している。
function　ifomitting(){
  if (document.getElementsByTagName("button")[2].textContent === correct) {
    window.alert("正解！")
  } else {
    window.alert("不正解だよ")
  }}


$button[2].addEventListener("click", function () {
  //answers[2]=correctではだめだった
  if (document.getElementsByTagName("button")[2].textContent === correct) {
    window.alert("正解！")
  } else {
    window.alert("不正解だよ")
  }
})
//次に他のボタンにもアクション対応する。
$button[3].addEventListener("click", function () {
  if (document.getElementsByTagName("button")[3].textContent === correct) {
    window.alert("正解！")
  } else {
    window.alert("不正解だよ")
  }
})
$button[4].addEventListener("click", function () {
  //answers[2]=correctではだめだった
  if (document.getElementsByTagName("button")[4].textContent === correct) {
    window.alert("正解！！！")
  } else {
    window.alert("不正解だよ")
  }
})
//ここまでで取り合えず完了






//ちょっと路線変更、分からないから取り合えずyoutubeにあるjavascriptの英語コースを全て受講する

var mycontent = [];
var i = 0
while (i < 10) {
  //pushを入れることで[]の中にどんどん加算していくという式が完成
  mycontent.push(i);
  i++
}
//もっとも使うのはforループ

var mynumber = [];
for (var i = 0; i < 13; i++) {
  mynumber.push(i);
}

//arrayに対して使うforの文
//配列の中の足し算が可能！
var firstarray = [1, 2, 3, ]
var kekka = 0;

for (var i = 0; i < firstarray.length; i++) {
  kekka += firstarray[i];
}

//配列の中身同士を足し算してみる

var anime = ["clannad", "steinsgate", "Fate"]
var anime2 = ["littlebusters", "Lovelive"]
//これで配列同時の足し算が出来た。
var animeunited = anime.concat(anime2);
console.log(animeunited);

//ランダムな小数点の数字を作り出す関数を生成

function randomFraction() {

  return Math.random();
}
console.log(randomFraction());

//ランダムな数値生成Math.floorを使う

var randomwhole = Math.floor(Math.random() * 20);

//関数でランダム数値を作成

function randombet0and9() {
  return Math.floor(Math.random() * 10);
}

console.log(randombet0and9());

//parseInt関数を使う

function tonumber(int) {
  return parseInt(int);
}
//数値を入れてあげることで番号を返してくれる
console.log(tonumber("50"));


//conditon ? statement if-ture : statement if-false;

//ternary operatorでif elseを一文にまとめた感じ。

/*
function checkEqual(a,b){
  if(a===b){
    return true;
  }else{
    return false;
  }
}
*/
//一文で収まった
function checkEqual(a, b) {
  return a === b ? true : false;
}
console.log(checkEqual(4, 5));

//複合してみる/:の後にもう一回組み込んでいる感じ。

function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
}

console.log(checkSign(0));
