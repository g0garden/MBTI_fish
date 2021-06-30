//FB연결 Quiz페이지
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Text, Grid, Button } from "../elements/";
// import {shuffled_array as questions, dic, incrementDicElement} from "../data/questions";
import QuizFrame from "../components/QuizFrame";
import {firestore} from "../shared/firebase";

const Qna = (props) => {

//firebase 연결확인
const getQnaAFB = () => {
  let qnaList_data = [];

  const qnaList = firestore.collection("qnaList");
  qnaList
  .get()
  .then(docs => {
    docs.forEach((doc) => {
      if(doc.exists){
        qnaList_data = [...qnaList_data, {id: doc.id, ...doc.data()}]
      }
    });

    
    // console.log("롸",qnaList_data)
    // return qnaList_data;
  });
}

getQnaAFB();
console.log(qnaList_data);


function shuffleArray(arr) {
  let currentIndex = arr.length,  randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

  // Pick a remaining element...
  randomIndex = Math.floor(Math.random() * currentIndex);
  currentIndex--;

  // And swap it with the current element.
  [arr[currentIndex], arr[randomIndex]] = [
    arr[randomIndex], arr[currentIndex]];
}
return arr;
}


// const shuffled_array = shuffleArray(getQnaAFB());
// console.log(shuffled_array);


let dic = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
  7: 0
}

const incrementDicElement = (type) => {
  if (type === "E") {
      dic[0] += 1;
  }
  else if (type === "I") {
      dic[1] += 1;
  }
  else if (type === "N") {
      dic[2] += 1;
  }
  else if (type === "S") {
      dic[3] += 1;
  }
  else if (type === "T") {
      dic[4] += 1;
  }
  else if (type === "F") {
      dic[5] += 1;
  }
  else if (type === "P") {
      dic[6] += 1;
  }
  else if (type === "J") {
      dic[7] += 1;
  }
  
}


//  // 형석님 데이터
//   const data = questions.map((d, idx) => {
//       return {
//         ...d, idx: idx
//     }});

//   const [index, incrementIndex] = useState(1);
//   const goToNextPage = () => {
//     if (index === 12) {
//       window.alert("That's enough!");
//       getType(Object.values(dic));
//       return;
//     }
//     incrementIndex(index + 1);
//   }
//   // const dispatch = useDispatch();

//   const getType = (arr) => {
//     const types = ["E", "I", "N", "S", "T", "F", "P", "J"];
//     let answer = [];
    
//     for (let i = 0; i < arr.length; i+=2) {
//       if (arr[i] > arr[i+1]) {
//         answer.push(types[i]);
//         continue;
//       }
//       answer.push(types[i+1]);
//       console.log("답",answer);
//     }
//     console.log(answer.join(""));
//   }

//   console.log(dic);

  return (<>
  <button onClick={()=> props.history.replace("/")}>Home</button>
  {/* <QuizFrame data={data[index-1]} next={goToNextPage} index={index} increment={incrementDicElement}/> */}
  </>);

};

export default Qna;
