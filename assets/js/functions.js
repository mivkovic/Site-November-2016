$(document).ready(function(){

      //Menu
     $('.menu').on('click',function () {
       $('#menu').toggleClass('menuact');
     })

    //Smooth scrolling and active menu
     $('.click').on('click',function (e) {
      e.preventDefault();
      var x = e.target.id;
      $('html,body').animate({
        scrollTop: $("#"+x+"_target").offset().top
      },1000);
       $(this).siblings().removeClass('active').end().addClass('active');
     })

     //Scroll event
     $(window).on('scroll',function () {

       var wScroll = $(window).scrollTop();

       // About pictures
       if( wScroll > $('.about-pic .pic').offset().top - $(window).height() / 1.3){
         $('.about-pic .pic').each(function (i) {
            setTimeout(function () {
              $('.about-pic .pic').eq(i).addClass('pic-isShow');
            },i * 400);
         })
       }

       //Box content
      if(wScroll > $('.box').offset().top - $(window).height() / 1.4){
        $('.box').each(function (i) {
            setTimeout(function () {
              $('.box').eq(i).addClass('box-isShow');
            },i * 300);
        })
      }

      //Team pictures
      if(wScroll > $('.team-pic .pic').offset().top - $(window).height() / 1.8){
        $('.team-pic .pic').each(function (i) {
          setTimeout(function () {
            $('.team-pic .pic').eq(i).addClass('pic-isShowTeam');
          },i * 500);
        })
      }


      //Arrow Visible and Hidden
      if(wScroll > $(window).height() / 3.5){
        $('.arrow').addClass('arrow-isShow');
      }else{
        $('.arrow').removeClass('arrow-isShow');
      }
     })

     //Arrow return back
     $('.arrow').on('click',function (e) {
        $('html,body').animate({
          scrollTop: 0
        },1000);
        e.preventDefault();
      })

     // Numbers
     $(window).one('scroll',function () {

      var wScroll1 = $(window).scrollTop();

      if(wScroll1 >= 0){
        for (let i=1; i<=42; i++) {
        var x = setTimeout( function timer(){
            $('.number1').text(i);
          }, i*140 );
        }
        for (let i=1; i<=123; i++) {
          setTimeout( function timer(){
            $('.number2').text(i);
          }, i*45 );
        }

        for (let i=1; i<=15; i++) {
          setTimeout( function timer(){
            $('.number3').text(i);
          }, i*380 );
        }

        for (let i=1; i<=99; i++) {
          setTimeout( function timer(){
            $('.number4').text(i);
          }, i*60 );
        }

        for (let i=1; i<=24; i++) {
          setTimeout( function timer(){
            $('.number5').text(i);
          }, i*250 );
        }
      }
    })

});
