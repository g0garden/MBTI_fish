import { createSlice } from "@reduxjs/toolkit";
import { qnaList_data } from "../../data/questionsFB";
import { firestore } from "../../shared/firebase";

const qnaList_db = firestore.collection("qnaList");

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    question: [],
  },
  reducers: {
    setList : (state, action) => {
      state.question = action.payload;
    },
  },
});

//FB통신함수
const getQuestionAX = () => {
  return function (dispatch) {

    qnaList_db.get().then((docs) => {
      let qnaList_data = [];
      
      docs.forEach((doc, index) => {
        if (doc.exists) {
            qnaList_data = [...qnaList_data, { index: index, id: doc.id, ...doc.data()}];
            }
        });
    })
    //console.log("quiz툴킷",qnaList_data);
    dispatch(setList(qnaList_data));
  }
}

export const { setList } = quizSlice.actions;

export const api = {
  getQuestionAX,
  
};

export default quizSlice.reducer;
