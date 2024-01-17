# FE-Project : HODU 렌딩 페이지 만들기 

## [목표&요구사항](https://www.notion.so/HTML-CSS-JS-97997e2842a54cb08f127420e48be512?pvs=21)

## **적용 디자인 패턴 : MVC 모델**

### 📦 Model

ajax 를 통해 받은 데이터와 그 데이터를 통해서 변경될 수 있는 상태

### 💻 View

HTML, CSS 파일들

### 🕹 Controller

Js 파일이 View 에서 호출되는 이벤트를 통해서 데이터를 전달하고, 전달받은 데이터로 Model을 변경

- 참고 : [https://velog.io/@luna238/프론트엔드의-MVC](https://velog.io/@luna238/%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C%EC%9D%98-MVC)

## **명명 규칙**

### Camel Case

- 참고 : https://k1005.github.io/2021/07/31/naming-rules/#camelcase--pascalcase

# **🛠 기능 목록**

## 📦 Model `model`

- modal
- 무한 스크롤용 사진
    - API 사용
- 카카오맵 API

## 💻 View `view`

- HODU-mainPage.html
- HODU-mainPage.css

## 🕹 Controller `controller`

- [ ] 버튼 입력시 무한 스크롤 생성
- [ ] 카카오맵 API 사용
- [ ] 버튼 입력시 modal 생성
- [ ] 맨위로 가기 버튼
- [ ] 애니매이션 적용

## 🗃 Assets `assets`

- **`images`** : 이미지
- **`fonts`** : 글씨 폰트

# 🎯 프로그래밍 요구 사항

1. 최대한 학습한 내용을 바탕으로 최대한 구현을 목표로 한다.
   1. `ajax`, `dom` 등 적극적으로 활용
2. TIL 페이지에 프로젝트 진행 내용 매일 기록한다.
3. **최대한 의미있게, simantic 하게 코드를 작성한다.**
4. github에 올리고 코드를 지속적으로 관리한다.
5. API 연동해서 결과물을 UI로 출력한다.
   1. 지도 API, 사진 API
6. 불필요한 html 태그, css 사용을 지양한다

## 📮 결과물 제출
- 프로젝트 결과물은 gitHub 주소로 공유
- 시연 링크 공유
- git commit 메시지는 단위 작업과 관련된 내용을 요약하여 작성

## 📝 나의 요구 사항

1. 파일들을 분리해서 가독성 좋게, 기능별로 나누기
2. 의미없는 `div` 사용 최대한 줄이기
3. 의미 있는 변수명, 클래스명, 함수명 사용하기
4. 범용성 있는 분할 하기
   1. mobile용 만들기 도전
   2. 반응형으로 만들어 보기
