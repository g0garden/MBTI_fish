// 쿠기에 값을 저장, 삭제, 조회

// 쿠키 저장
const setCookie = (name, value) => {
  let date = new Date();
  date.setTime(date.getTime() + 1 * 1000 * 60 * 60 * 24 * 30);
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

// 쿠키 삭제
const deleteCookie = (name) => {
  let date = new Date("2020-01-01").toUTCString();
  document.cookie = name + "=; expires=" + date + ";path=/";
};

// document.cookie = name + '=; expires=Thu, 01 Jan 1999 00:00:10 GMT;path=/;
// 쿠키 조회
const getCookie = (name) => {
  let value = "; " + document.cookie;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop().split(";").shift();
  }
};

export { setCookie, deleteCookie, getCookie };
