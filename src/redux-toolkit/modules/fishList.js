import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../shared/firebase";

const fishList_db = firestore.collection("fishList");

const fishSlice = createSlice({
  name: "fish",
  initialState: {
    fishOneResult: {},
  },
  reducers: {
    setFish : (state, action) => {
      state.fishOneResult = action.payload;
    },
  },
});

//FB통신함수
//퀴즈페이지에서 받은 도출한 값(resultType)과 동일한 type의 인덱스 찾아오기
const getFishAX = (resultType) => {
  return function (dispatch) {
    
    fishList_db.get().then((docs) => {

      docs.forEach((doc, index) => {
        if (doc.exists && doc.data().type === resultType) {
          dispatch(setFish(doc.data()));
            }
        });
    })
  }
}
    
  
export const { setFish } = fishSlice.actions;

export const api = {
  getFishAX,
};

export default fishSlice.reducer;
