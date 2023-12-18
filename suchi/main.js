//header
let scrollHeader = () => {
    let header = document.querySelector('#header');

    //조건문이 참이면 A가 실행되고 거짓이면 B가 실행
    // pageYOffset >= 50? A:B ;
    pageYOffset >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header');
}
window.addEventListener('scroll', scrollHeader)


//배경색 테마변경
let thememBtn = document.getElementById("theme_button");
let iconTheme = "ri-sun-line";
let darkTheme = "dark-theme";

let getCurrentTheme = () => {
    //body가 class명 dark-Theme를 가지고 있는가? true : false
    let result = document.body.classList.contains(darkTheme) ? "dark" : "light";
    return result;
};

let getCurrentIcon = () => {
    let result = thememBtn.classList.contains(iconTheme) ? "ri-moon-clear-line" : "ri-sun-line";
    return result;
};

//웹의 스토어에 값셋팅
// localStorage.setItem()  --> 웹스토어에 값을 입력
// localStorage.getItem()  --> 값을 웹스토어에서 출력 

thememBtn.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme);
    thememBtn.classList.toggle(iconTheme);
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
})

//getCurrentTheme()의 결과값을 selected-theme라는 변수이름으로 localStorage에 입력
//localStorage.setItem("selected-theme".getCurrentTheme());

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

if (selectedTheme) {

    if (selectedTheme == "dark") {
        document.body.classList.add(darkTheme);
    } else {
        document.body.classList.remove(darkTheme);
    }

    if (selectedIcon == "ri-moon-clear-line") {
        thememBtn.classList.add(iconTheme);
    } else {
        thememBtn.classList.remove(iconTheme);
    }
}


//모바일 nav영역
let navToggle = document.getElementById('nav_toggle');
let navMenu = document.getElementById('nav_menu');
let navClose = document.getElementById('nav_close');

navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
})

navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
})


//전체화면 애니메이션

ScrollReveal().reveal('.home_img,.home_data,.recently-data,.recently_img,.footer_card,.footer .footer_container>div', {
    delay: 0,
    duration: 2500,
    origin:'top',
    distance:'60px',
    reset: true,
});

ScrollReveal().reveal('.home_data,.recently_img,.footer .fm_logo', {
    origin:'left',
});

ScrollReveal().reveal('.about_img,.about_data', {
    delay: 0,
    duration: 2500,
    origin:'bottom',
    distance:'60px',
    reset: true,  //반복실행 기본값 --> false 1번실행
});

ScrollReveal().reveal('.about_data,.recently-data,.footer_card', {
    origin:'right',
});

ScrollReveal().reveal('.popular_card', {
    delay: 0,
    duration: 2000,
    origin:'top',
    distance:'100px',
    reset: true,
    interval:100,
});


//scroll-up
let scrollup = () =>{
    let scrollup = document.getElementById('scroll-up')
    pageYOffset >= 350? scrollup.classList.add('show-scroll')
    :scrollup.classList.remove('show-scroll')
}

window.addEventListener('scroll',scrollup)

//menu
let scrollActive = () =>{
    let scrollY = pageYOffset;

    let sections = document.querySelectorAll('section[id]');
    //section 태그들 속성중 id가 있는 section들을 가져와라
    sections.forEach((current) => {
        let sectionHeight = current.offsetHeight;
        //현재 불러온 item인 section의 놆이값
        let sectionTop = current.offsetTop - 60;
        //현재 불러온 item의 머리의 top 화면의 top인 위치
        
        let sectionId = current.getAttribute('id');
        //console.log(sectionId)

        let sectionClass = document.querySelector(`.nav_menu a[href*="${sectionId}"]`);
        //a[href* ='home'] -> home이 포함되어있나
        //console.log(sectionClass)


        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }

    })
}

window.addEventListener('scroll', scrollActive)