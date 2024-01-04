// counter plugin start

$(function(){
    $("#countdown").countdown360({
        radius      : 60.5,
        seconds     : 100,
        strokeWidth : 15,
        fillStyle   : '#0276FD',
        strokeStyle : '#003F87',
        fontSize    : 50,
        fontColor   : '#FFFFFF',
        autostart: false,
        onComplete  : function () { console.log('completed') }
      }).start(2000)
})