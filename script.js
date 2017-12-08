$(document).ready(function() {
  $('select').material_select();
});

var coinAPI = [];
var crypt = "bitcoin";
var cur = "USD";

var priceBTN = $('.quickPrice');
var convBTN = $('.converter');
var popUpCard = $('.popUpCard');

var submitBTN = $('.submit');
var cryptoPrice = $('#cryptoCurPri');
var curPrice = $('#curPri');

var preloader = $('.preloader-wrapper');
var value = $('.value');
var percent = $('.percent');
var dataWrap = $('.dataWrap');

var loading = false;

function hidePopup() {
  popUpCard.fadeTo(400, 0, function(){
    popUpCard.hide();
  });
}

function getCoinPrice(crypt, cur) {
  // $.ajax({
  //     url: 'https://bravenewcoin-v1.p.mashape.com/ticker?coin='+ crypt +'&show='+ cur +'',
  //     type: 'POST',
  //     data: {},
  //     datatype: 'json',
  //     success: function(data) { 
  //       coinAPI = JSON.parse(data);
  //       displayResult(coinAPI);
  //     },
  //     error: function(err) { alert(err); },
  //     beforeSend: function(xhr) {
  //     xhr.setRequestHeader("X-Mashape-Authorization", "7eZ7NbbmF6mshfvBhQuXUdqgaAclp17w3hsjsnX2QSB8J7M6Pi");
  //     }
  // });

  $.getJSON('https://api.coinmarketcap.com/v1/ticker/' + crypt + '/?convert=' + cur + '', function callbackData(data) {
    coinAPI = data;
    displayResult(coinAPI[0], cur);
  });
}


function displayResult(coinAPI) {
  internalCur = cur.toLowerCase();
  price = 'price_' + internalCur + '';
  valueText = Number(coinAPI[price]).toFixed(3);
  percentVal = coinAPI.percent_change_24h;
  percentState = 0;
  if (percentVal.charAt(0) != '-') {
    percentState = '+ ';
  } else {
    percentState = '';
    };
  value.text(cur + ' ' + valueText);
  percent.text(percentState + ' ' +percentVal + '%');
  loading = false;
  preloader.fadeTo(300, 0, function(){
    preloader.hide();
    dataWrap.show;
    dataWrap.fadeTo(500, 1);
  });
}

priceBTN.click(function(e) {
  hidePopup();
})

submitBTN.click(function(e) {
    if (!loading && crypt !== cryptoPrice.val() || cur !== curPrice.val()) {
      crypt = cryptoPrice.val();
      cur = curPrice.val();
      getCoinPrice(crypt, cur);
      dataWrap.fadeTo(500, 0, function() {
        dataWrap.hide();
        preloader.show();
        preloader.fadeTo(500, 1);
      })
      loading = true;
    }
})

window.setTimeout(function() {
  getCoinPrice(crypt, cur);
  preloader.show();
  preloader.fadeTo(500, 1);
}, 500);
