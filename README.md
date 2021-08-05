
# <img style='width:25px' src="https://user-images.githubusercontent.com/58612140/127746692-e018b545-4913-4128-a173-659cea257a11.png"/> 바다 속 나의 모습은? | 도시어부 

> 바다 속 나의 모습은 어떨지 지금 바로 확인해보세요!  👉🏻  <a href="https://cityangler.co.kr/">테스트하러 GO!</a>
</br>

## 🐟 개요
  + 개발기간: 2021.06.29 ~ 2021.07.30
  + 개발 인원: FrontEnd(최경민, 조형석, 고정원) 
  + 내용: MBTI 테스트 사이트 개발
  + 클라이언트: 도시어부팀(채널A)
  </br>

📢 도시어부 유튜브 채널, <a href="https://www.youtube.com/channel/UCGrAnVVgQY66l9XHIzPxQEw">도시어부 Grrr</a>에서도 확인 가능해요! 

## 🎮 Tools

```
- ReactJS, React-Router, Styled-components(view)
- Redux-toolkit (State Management)
- Create React App (Build Tool)
- ESLint, Prettier (Code Quality Tool)
- Firebase (DB, Hosting, Storage)
- Other Tools (Git, Github, notion, Slack etc.)
```

## 👽 기능
### 1. 사용자의 답안 선택에 따른 MBTI 유형 결과출력

### 2. 공유하기
+ 공유하기 시 특이사항 : react는 결과물 공유(SEO)에 적합하지 않음
```
- react helmet으로 동적 라우팅(?)은 가능
- 결과별 SEO 대안: helmet + snap 또는 loadable-component
```
+ 카카오톡 공유
```
- kakao developers의 API 중 메시지 > 카카오링크 JS 이용
- API alt 1) 'sendScrap'은 검색엔진과 같은 원리, SEO가 필요
- API alt 2) 'createDefaultButoon': 공유할 때 정보를 실어 보냄. SEO 필요 X. 그러나 버튼을 클릭할 때 버튼을 생성 => 한번 더 클릭해야 전송이 가능하므로 두번 클릭해야하는 문제가 있었음
- API alt 3) 'sendDefault': 눌렀을때 동적으로 버튼을 생성하는게 아니라, 렌더링시 만들어지므로, 공유 O & 한번클릭 O
```
+ 페이스북 공유
+ 일반 공유
```
- 버튼 클릭시 가상의 input 객체를 만들어 text를 넣고, 복사 후 만들었던 input 객체를 지워준다.
```

### 3. 반응형처리
<!-- <div style='display:flex; width:500px;'>
  <img style='margin:10px;' src="https://user-images.githubusercontent.com/58612140/127746601-7199efd0-c040-41e7-8fd6-6dff5f9c5c0e.png"/>
  <img style='margin:10px;' src="https://user-images.githubusercontent.com/58612140/127746649-6ab66ff1-3a6c-4127-81de-d23878437288.png"/>
  <img style='margin:10px;' src="https://user-images.githubusercontent.com/58612140/127746657-300cd8cc-aeea-4920-8886-1d12ef04c182.png"/>
</div> -->
  </br>

## 🏄🏻‍♂️바다 속 나는 어떤 모습일까요? 지금 바로 확인 해보세요!  👉🏻 <a href="https://cityangler.co.kr/">테스트하러 GO!</a>
