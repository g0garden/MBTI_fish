import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../shared/firebase";
import firebase from "firebase/app";

const countUsers_db = firestore.collection("countUsers_test");

const userSlice = createSlice({
  name: "user",
  initialState: {
    TotalUsers:"",
  },
  reducers: {
    addUserCnt : (state, action) => {
      state.TotalUsers = action.payload;
    },
  },
});


//총 타입별 유저를 받아와서 몇 명인지 계산한 값을 가지고 있으면?
const getUserTypeCnt = () => {
  return function (dispatch) {

    countUsers_db.get()
    .then((docs) => {
      let userTypeCnt_data = [];
      
      docs.forEach((doc) => {
        if (doc.exists) {
          userTypeCnt_data = [...userTypeCnt_data, { id: doc.id, ...doc.data()}];
            }
        });
        const number_test = userTypeCnt_data.reduce((acc,cur) => {
          return acc+cur.count;
        },0);
        console.log("Totaluser",number_test)
        // dispatch(addUserCnt(number_test));
      })
    }
  }

//FB통신함수
//결과로 나온 Type의 카운트를 +1 업데이트 해주는 함수
const addUserType = (resultType) => {
  
  return function (dispatch) {
    
    const increment = firebase.firestore.FieldValue.increment(1);
    countUsers_db.doc(resultType).update({count:increment});
    }
  }

export const { addUserCnt } = userSlice.actions;

export const api = {
  addUserType,
  getUserTypeCnt,
};

export default userSlice.reducer;
