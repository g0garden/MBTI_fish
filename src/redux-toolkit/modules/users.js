import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../shared/firebase";
import firebase from "firebase/app";

const countUsers_db = firestore.collection("countUsers");

const userSlice = createSlice({
  name: "user",
  initialState: {
    total_users:"",
  },
  reducers: {
    addUserCnt : (state, action) => {
      state.total_users = action.payload;
    },
  },
});

//총 참여자수 
const getTotalUserCntFB = () => {
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
        console.log("총사용자", number_test);
      })
    }
  }

//FB통신함수
//결과로 나온 Type의 카운트를 +1 업데이트 해주는 함수
const addUserTypeFB = (resultType) => {
  
  return function (dispatch) {
    
    const increment = firebase.firestore.FieldValue.increment(1);
    countUsers_db.doc(resultType).update({count:increment});
    }
  }

export const { addUserCnt } = userSlice.actions;

export const api = {
  addUserTypeFB,
  getTotalUserCntFB,
};

export default userSlice.reducer;
