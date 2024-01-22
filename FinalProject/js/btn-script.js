const btn_show = document.querySelector('.btn-show');
const form_sub = document.getElementById("sub-form");
let email_input = document.getElementById("user-email");
const btn_love = document.querySelector('.btn-love');
const btn_up = document.getElementById("btn-up");
let img_up = document.getElementById("img-up");
const modal = document.getElementById("modal");
let btn_bigImg = document.getElementById("btn-img-expan");
let cols = document.querySelectorAll('.btn-img');
let isShow = false;

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

form_sub.addEventListener('submit',function(event){
    event.preventDefault();
    modal.style.display = 'block';
    email_input.value = '';
});

btn_love.addEventListener('click',function (){
    modal.style.display = 'none';
});

btn_bigImg.addEventListener('click',function (){
    btn_bigImg.style.display = 'none';
});

[].forEach.call(cols, function (col){
    col.addEventListener('click',show,false);
    col.addEventListener('mouseenter',imgEnter,false);
    col.addEventListener('mouseleave',imgLeave,false);
})

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