

// 메뉴
$('.nav>ul>li').mouseover(function(){
    $(this).find('.submenu').stop().slideDown();
}).mouseout(function(){
    $(this).find('.submenu').stop().slideUp();
});


//슬라이드
let currentIndex=0;

setInterval(function(){
    if(currentIndex<2){  
        currentIndex++;   //조건문이 성립할때 실행
    }else{  
        currentIndex=0;   //조건문이 성립하지 않을때 실행
    }
    
    let slidePosition=currentIndex * (-1000)+"px"
    console.log(slidePosition)

    $('.slidelist').animate({
        left:slidePosition
    },1000)
},3000);  //3초마다 어떤일이 일어난다



//팝업
$('#content1 .right').click(function(){
    $('.layer_bg').fadeIn();
});

$('.layer_bg .layer .close').click(function(){
    $('.layer_bg').hide();
});

//window창 열기
$('.contact').click(function(){
    window.open("contact.html", "_child","top=0,left=0,width=400,height=400");
})



//탭메뉴
let tabBtn=$('.tab_menu ul li');
let tabCont=$('.tab_cont>div');

//.eq => equivalent(동등)
tabCont.hide().eq(0).show();

tabBtn.click(function(e){
    e.preventDefault();
    
    let index=$(this).index();
    tabCont.hide()
    tabCont.eq(index).show();

    tabBtn.removeClass('active')
    $(this).addClass('active')
});


