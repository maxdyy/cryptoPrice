  $('.button-collapse').sideNav({
      menuWidth: 200,
      edge: 'left',
      closeOnClick: true,
      draggable: true
  });

var coin = [];

$.getJSON("https://coinmarketcap-nexuist.rhcloud.com/api/all", function callbackData(data) {
  coin = data;
});

setInterval(function(){ 
  $.getJSON("https://coinmarketcap-nexuist.rhcloud.com/api/all", function callbackData(data) {
  coin = data;
});
}, 300000);

$('.pulseMenu').on('click', function(){
  $('.pulseMenu').removeClass('pulse');
})

function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}
$('.superCoolButton').on('click', function() {
      openURL('https://twitter.com/intent/tweet?text=Super%20Cool%20Cryptocurrency%20Prices%20Mobile%20Friendly%20App&url=https://codepen.io/maxdyy/full/gREKKG&via=CodePen');
    });

$(".name").html("cryptoPrice");
 

$('.btc').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.btc.name + "");
  $(".priceUSD").html("$ " + coin.btc.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.btc.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.btc.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.btc.change + "%");
  if (coin.btc.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.eth').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.eth.name + "");
  $(".priceUSD").html("$ " + coin.eth.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.eth.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.eth.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.eth.change + "%");
  if (coin.eth.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.xrp').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.xrp.name + "");
  $(".priceUSD").html("$ " + coin.xrp.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.xrp.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.xrp.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.xrp.change + "%");
  if (coin.xrp.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.ltc').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.ltc.name + "");
  $(".priceUSD").html("$ " + coin.ltc.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.ltc.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.ltc.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.ltc.change + "%");
  if (coin.ltc.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.etc').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.etc.name + "");
  $(".priceUSD").html("$ " + coin.etc.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.etc.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.etc.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.etc.change + "%");
  if (coin.etc.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.dash').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.dash.name + "");
  $(".priceUSD").html("$ " + coin.dash.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.dash.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.dash.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.dash.change + "%");
  if (coin.dash.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.xem').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.xem.name + "");
  $(".priceUSD").html("$ " + coin.xem.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.xem.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.xem.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.xem.change + "%");
  if (coin.xem.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.xmr').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.xmr.name + "");
  $(".priceUSD").html("$ " + coin.xmr.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.xmr.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.xmr.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.xmr.change + "%");
  if (coin.xmr.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})

$('.iot').on('click', function(){
  $(".popUpCard").hide();
  $(".name").html("" + coin.miota.name + "");
  $(".priceUSD").html("$ " + coin.miota.price.usd.toFixed(2) + "");
  $(".priceEUR").html("€ " + coin.miota.price.eur.toFixed(2) + "");
  $(".priceGBP").html("£ " + coin.miota.price.gbp.toFixed(2) + "");
  $(".change").html("" + coin.miota.change + "%");
  if (coin.miota.change[0]==="-"){
      $(".change").css("color", "#b71c1c");
      } else {
        $(".change").css("color", "green");
      }
})
