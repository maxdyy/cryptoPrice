$(document).ready(function() {
  $('select').material_select();
});

var coinAPI = [];
var crypt = 0;
var cur = 0;

var priceBTN = $('.quickPrice');
var convBTN = $('.converter');
var popUpCard = $('.popUpCard');

var submitBTN = $('.submit');
var cryptoPrice = $('#cryptoCurPri');
var curPrice = $('#curPri');

function hidePopup() {
  popUpCard.fadeTo(400, 0, function(){
    popUpCard.hide();
  });
}

function getCoinPrice(crypt, cur) {
  $.ajax({
      url: 'https://bravenewcoin-v1.p.mashape.com/ticker?coin='+ crypt +'&show='+ cur +'',
      type: 'POST',
      data: {},
      datatype: 'json',
      success: function(data) { coinAPI = data },
      error: function(err) { alert(err); },
      beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", "7eZ7NbbmF6mshfvBhQuXUdqgaAclp17w3hsjsnX2QSB8J7M6Pi");
      }
  });
}

function getConvertion() {

}

priceBTN.click(function(e) {
  hidePopup();
})

submitBTN.click(function(e) {
  crypt = cryptoPrice.val();
  cur = curPrice.val();
  getCoinPrice(crypt, cur);
})

