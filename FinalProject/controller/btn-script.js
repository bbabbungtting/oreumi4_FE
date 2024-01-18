const btn_show = document.querySelector('.button-show');
const btn_sub = document.querySelector(".button-subscribe");
const btn_love = document.querySelector('.button-love');
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