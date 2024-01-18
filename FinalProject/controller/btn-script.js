const btn_show = document.querySelector('.button-show');
const btn_sub = document.querySelector(".button-subscribe");
const btn_love = document.querySelector('.button-love');
const btn_up = document.getElementById('botton-up');
let img_up = document.getElementById('img-up');
const modal = document.getElementById('modal');
let pageNum = 1;

btn_show.addEventListener('click', function () {
    if (isShow) {
        isShow = false;
        btn_show.innerText = "Show more";
    } else {
        isShow = true;
        btn_show.innerText = "Stop";
        fetchImages(pageNum);
    }
});

btn_sub.addEventListener('click',function(){
    modal.style.display = 'block';
})

btn_love.addEventListener('click',function (){
    modal.style.display = 'none';
})


var backToTop = () =>{
    window.addEventListener('scroll',()=>{
        if(document.querySelector('html').scrollTop>10){
            btn_up.style.borderColor = '#999999';
            img_up.src = "../assets/images/arrow_can_up.svg";
        }else{
            btn_up.style.borderColor = '#D3D3D3';
            img_up.src = "../assets/images/arrow_cant_up.svg";
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