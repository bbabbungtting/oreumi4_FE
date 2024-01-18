const imageList = document.querySelector(".list-photos");
const photos_list = document.querySelector('.main-photos');

let timer;
let isShow = false;

async function fetchImages(pNum) {
    try {
        const response = await fetch('https://picsum.photos/v2/list?page=' + pNum + '&limit=6');
        if (!response.ok) {
            throw new Error('네트워크 응답에 문제가 있습니다.');
        }

        const datas = await response.json();
        makeImageList(datas);
        pageNum++;

    } catch (error) {
        console.error('데이터를 가져오는데 문제가 발생했습니다 :', error);
    }
}

function makeImageList(datas) {
    datas.forEach((item) => {
        imageList.innerHTML += "<li><img src=" + item.download_url + " alt=''></li>";
    })
}

window.addEventListener('scroll', () => {
    if (isShow) {
        if (window.innerHeight + document.documentElement.scrollTop >=
            photos_list.offsetTop + photos_list.offsetHeight + 100) {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;
                    fetchImages(pageNum);
                }, 200);
            }
        }
    }
})




