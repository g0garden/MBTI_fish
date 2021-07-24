import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebseConfig = {
    apiKey: "AIzaSyBTifnlIL1M6Sht6mKaA2W82F4VP9fXgN4",
    authDomain: "cityangler-soul-fish-test.firebaseapp.com",
    databaseURL: "https://cityangler-soul-fish-test-default-rtdb.firebaseio.com",
    projectId: "cityangler-soul-fish-test",
    storageBucket: "cityangler-soul-fish-test.appspot.com",
    messagingSenderId: "55494146139",
    appId: "1:55494146139:web:02ed9489ec8088757e677e",
    measurementId: "G-L5N3QZN7ZB"
};

firebase.initializeApp(firebseConfig);

//firestore에 있는 인스턴스를 변수 firestore에 넣어놓고 갖다쓰자
const firestore = firebase.firestore();
const storage = firebase.storage();

export {firestore, storage};