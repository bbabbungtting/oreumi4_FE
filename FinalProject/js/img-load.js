const imageList = document.querySelector(".list-photos");
const photos_list = document.querySelector('.main-photos');

const url = `https://api.thecatapi.com/v1/images/search?limit=6`;
const api_key = 'live_3ECLcENjnPHFksrsiwNvVgz6DcIpOatLNm4yx2GyvTnmFjrdOxsYXT8enqoWbDJ0';

let timer;
let newImgList;

function fetchImages() {
    fetch(url, {
        headers: {
            'x-api-key': api_key
        }
    }).then((response) => {
        return response.json();
    })
        .then((data) => {
            let imagesData = data;
            imagesData.map(function (imageData) {
                imageList.innerHTML += "<li><button class='btn-img'><img src=" + imageData.url + " alt=''></button></li>"
            });
            newImgList = document.querySelectorAll('.btn-img');
            addEvent(newImgList);
        })
        .catch(function (error) {
            console.log(error);
        });
}

window.addEventListener('scroll', () => {
    if (isShow) {
        if (window.innerHeight + document.documentElement.scrollTop >=
            photos_list.offsetTop + photos_list.offsetHeight + 150) {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null;
                    fetchImages();
                }, 500);
            }
        }
    }
})