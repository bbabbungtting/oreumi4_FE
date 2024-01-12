/*
const btn1 = document.querySelector('button1');

btn1.addEventListener('click', function () {
    console.log('click!!!');
});

 */

const myBtn = document.querySelector("button");

myBtn.addEventListener('click', function () {

    // blue 라는 클래스의 속성 값을 지정 할 수 있습니다.
    myBtn.classList.add("blue");
    myBtn.innerHTML = 'hello';

    // myBtn.classList.remove("blue");     클래스를 제거합니다.
    // myBtn.classList.toggle("blue");     클래스를 토글합니다. 없으면 넣어주고, 있으면 제거합니다.
    // myBtn.classList.contains("blue");   해당하는 클래스가 있는지 확인합니다.
})

const myInput = document.querySelector('input');

//input 칸에 값 입력
myInput.value = 100;

//input 란에 값 가져올 수 있다.
const inputNum = myInput.value;

