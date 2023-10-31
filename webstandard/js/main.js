

//menu
$('.tit .btn').click(function () {
    // $('.nav').toggle();
    // $('.nav').fadeToggle();
    $('.nav').slideToggle();
    $(this).toggleClass("on");
});

//slide
$('.ban').slick({
    infinite: true,
    slidesToShow: 3,   //=>화면에 보이는 갯수
    slidesToScroll: 1,  //=>버튼을 클릭하면 넘어가는 갯수
    dots: true,
});

//tab_menu영역 - col5

//.next() => 바로밑 요소(바로아래동생)
//parent() => 부모요소
//siblings() => 나를 제외한 형제요소
//find() => 하위요소 (나 안에 있는요소들)

let tab_list=$('.tab_menu')

tab_list.find('ul ul').hide();
tab_list.find('li.active ul').show();


$('.tab_menu>ul>li>a').click(function(ev){
    ev.preventDefault();

    let $this = $(this); //변수를 만들때 사용할수있는 특수문자 $, _
    //console.log($this)

    $this.next().show()
    $this.parent('li').siblings('li').find('ul').hide()

    $this.parent('li').addClass('active');
    $this.parent('li').siblings('li').removeClass('active');
})


//gallery - col6

$('.gallery_img').slick({
    arrows: false,

  });


  $('.gallery_Btn .play').click(function(){
    $('.gallery_img').slick('slickPlay');

  });

  $('.gallery_Btn .pause').click(function(){
    $('.gallery_img').slick('slickPause');

  });

  $('.gallery_Btn .prev').click(function(){
    $('.gallery_img').slick('slickPrev');

  });

  $('.gallery_Btn .next').click(function(){
    $('.gallery_img').slick('slickNext');

  });