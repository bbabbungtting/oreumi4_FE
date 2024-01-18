const btn_show = document.querySelector('.button-show');
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