
/* Browser Object Information */

window.onload = function(){

  document.getElementById('windowInfo').innerHTML =
        ' <strong>Window Info</strong><br> '
       +' InnerWidth : ' + window.innerWidth + '<br>'
       +' InnerHeight : ' + window.innerHeight + '<br>'

  document.getElementById('locationInfo').innerHTML =
        ' <strong>Location Info</strong><br> '
       +' URL : ' + location.href + '<br>'
       +' Protocol : ' + location.protocol + '<br>'
       +' Host : ' + location.host + '<br>'

  document.getElementById('navigatorInfo').innerHTML =
        ' <strong>Navigator Info</strong><br> '
       +' AppricationName : ' + navigator.appName + '<br>'
       +' UserAgent : ' + navigator.userAgent + '<br>'

  document.getElementById('screenInfo').innerHTML =
        ' <strong>Screen Info</strong><br> '
       +' ScreenWidth : ' + screen.width + '<br>'
       +' ScreenHeight : ' + screen.height + '<br>'
       +' ColorlDepth : ' + screen.colorDepth + '<br>'

}

/* Document Object */

/* Example 01 */
function ChangeTitle() {
  document.title = document.getElementById('DocumentTitle').value;
}


/* Example 02 */
function ChangeContent(){
    var header_h1 = document.querySelector('header h1'); // ターゲット要素
    var txt = document.getElementById('TEXT'); // 入力
    header_h1.innerHTML = txt.value
}

/* Example 03 */
function ChangeBGColor() {
  var obj = document.getElementById('HeaderBlock'); // ターゲット要素
  var col = document.getElementById('HeaderCOL'); // 入力
  obj.style.backgroundColor = col.value;
}

/* Example 04 */
function ChangeBGColor2() {
  var obj = document.getElementById('HeaderBlock'); // ターゲット要素
  var col = document.getElementById('PickColor'); // 入力
  obj.style.backgroundColor = col.value;
}

/* Example 05 */
var sw = true; //外部変数

function ToggleTheme(){
    var col, bgcol;
    var articles = document.getElementsByTagName('article'); // ターゲット要素

    if( sw ){
      col = '#FFF';
      bgcol = '#333';
    }else {
      col = '#222';
      bgcol = '#FFF';
    }

    for( var i=0; i<articles.length; i++ ){
      articles[i].style.color = col;
      articles[i].style.backgroundColor = bgcol;
    }

    sw = !sw;
}

/* Example 06 */
function CalcData() {
    var ans = document.getElementById('ANS'); // ターゲット要素
    var x = document.getElementById('X'); // 入力１
    var y = document.getElementById('Y'); // 入力２
    ans.value =Number( x.value ) * Number( y.value );
}
