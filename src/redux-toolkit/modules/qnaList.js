import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../shared/firebase";

const qnaList_db = firestore.collection("qnaList");

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    is_loading: true,
    qna_list: [],
  },
  reducers: {
    setLoading: (state, action) => {
      state.is_loading = action.payload;
    },
    setQnaList : (state, action) => {
      state.qna_list = action.payload;
      state.is_loading = false;
    },
  },
});

let qnaList_data = [];

//FB통신함수
const getQnaListFB = () => {
  return function (dispatch) {
    
    dispatch(setLoading(true));

    qnaList_db.get().then((docs) => {
      let qna_data = [];
      docs.forEach((doc) => {
        if (doc.exists) {
            qna_data = [...qna_data, { id: doc.id, ...doc.data()}];
          }
        });
        // console.log("랜덤으로 섞이기 전 배열", qna_data);
        shuffleArray(qna_data);
        // console.log("랜덤으로 섞인 배열", qna_data);
        dispatch(setQnaList(qna_data));
      });
  }
}

//qnaList_data -> 랜덤배열로
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

export const { setQnaList, setLoading } = quizSlice.actions;

export const api = {
  getQnaListFB,
};

export default quizSlice.reducer;
