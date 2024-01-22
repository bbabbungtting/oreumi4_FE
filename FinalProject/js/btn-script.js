//main 사진
const btn_show = document.querySelector('.btn-show');
let all_imgs = document.querySelectorAll('.btn-img');
let isShow = false;
let btn_bigImg = document.getElementById("btn-img-expan");
//subscribe
const form_sub = document.querySelector('.subscribe-main');
let email_input = document.getElementById("user-email");
//modal
const modal = document.getElementById("modal");
const btn_love = document.querySelector('.btn-love');
//위로 가기 버튼
const btn_up = document.getElementById("btn-up");
let img_up = document.getElementById("img-up");

//main 사진 부분
btn_show.addEventListener('click', function () {
    if (isShow) {
        isShow = false;
        btn_show.innerText = "Show more";
    } else {
        isShow = true;
        btn_show.innerText = "Stop";
        fetchImages();
    }
});

let addEvent = (photoList) =>{
    [].forEach.call(photoList, function (photo){
        photo.addEventListener('click',show,false);
        photo.addEventListener('mouseenter',imgEnter,false);
        photo.addEventListener('mouseleave',imgLeave,false);
    })
}

function show(){
    btn_bigImg.style.display = 'block';
    let img_source = this.querySelector('img').src;
    btn_bigImg.innerHTML = '<img src="' + img_source + '">';
}

function imgEnter(){
    let selectImg = this.querySelector('img');
    selectImg.style.width = '115%';
}

function imgLeave(){
    let selectImg = this.querySelector('img');
    selectImg.style.display = 'inline-block';
    selectImg.style.width = '100%';
}

btn_bigImg.addEventListener('click',function (){
    btn_bigImg.style.display = 'none';
});

addEvent(all_imgs);

//이메일 입력 부분
form_sub.addEventListener('submit',function(event){
    event.preventDefault();
    modal.style.display = 'block';
    email_input.value = '';
});

btn_love.addEventListener('click',function (){
    modal.style.display = 'none';
});

//위로 가기 버튼
let backToTop = () =>{
    window.addEventListener('scroll',()=>{
        if(document.querySelector('html').scrollTop>10){
            btn_up.style.borderColor = '#999999';
            img_up.src = "assets/images/arrow_can_up.svg";
            btn_up.style.cursor ='pointer';
        }else{
            btn_up.style.borderColor = '#D3D3D3';
            img_up.src = "assets/images/arrow_cant_up.svg";
            btn_up.style.cursor ='default';
        }
    })

    btn_up.addEventListener('click',()=>{
        window.scrollTo({
            top:0,
            left:0,
            behavior:'smooth'
        });
    })
};

backToTop();