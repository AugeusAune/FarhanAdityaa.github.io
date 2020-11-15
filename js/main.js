$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
            $('goTop').fadeIn();
        }
        else{
            $('.navbar').removeClass('sticky');
            $('.goTop').fadeOut();
        }
    });

    // gotop
    $('.goTop').click(function(){
        scroll(0,0);
    });

    $('.menu-toggler').click(function(){
        $(this).toggleClass('active');
        $('.navbar-menu').toggleClass('active');
    }); 

    // magnific popup

    $('.works').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
      });


    
});