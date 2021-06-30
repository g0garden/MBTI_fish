import firebase from "firebase/app";
import "firebase/firestore";

const firebseConfig = {
    apiKey: "AIzaSyDtw-bguzY71ypg6qqozSmZvs-LJG0yuy8",
    authDomain: "mbtifish.firebaseapp.com",
    projectId: "mbtifish",
    storageBucket: "mbtifish.appspot.com",
    messagingSenderId: "625933522614",
    appId: "1:625933522614:web:7e57535c575d175994f817",
    measurementId: "G-Q81GZL6THG"
};

firebase.initializeApp(firebseConfig);

//firestore에 있는 인스턴스를 변수 firestore에 넣어놓고 갖다쓰자
const firestore = firebase.firestore();

export {firestore};