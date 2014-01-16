$(function(){
  var remain = $('#remaining');
  var erapsed = $('#erapsed');

  function elapsedToString(diff) {
    var day = Math.floor(diff / 86400);
    var hour = Math.floor(diff / 3600 % 24);
    var min = Math.floor(diff / 60 % 60);
    var sec = Math.floor(diff % 60);

    var str = [
      day, '日',
      hour, '時間',
      min, '分',
      sec, '秒'
    ].join(' ');

    return str;
  }

  function update(){
    var now  = new Date().getTime();
    var deadlineMsec = new Date(deadline).getTime();
    var startlineMsec = new Date(startline).getTime();
    var remainingTime = Math.floor((deadlineMsec - now) / 1000);
    var timeIsMoney = Math.floor((now - startlineMsec) / 1000);
    remain.text(elapsedToString(remainingTime));
    erapsed.text(elapsedToString(timeIsMoney));
  }

  setInterval(update, 1000);
  update();

  $('.name').text(name);
  $('.progress-per').text(progress);
  $('.progress-bar')
    .attr('aria-valuenow', progress)
    .css('width', progress+'%');
});
