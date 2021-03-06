import { createSlice } from "@reduxjs/toolkit";
import { firestore } from "../../shared/firebase";
import { history } from "../configureStore";

const fishList_db = firestore.collection("fishList");

const fishSlice = createSlice({
  name: "fish",
  initialState: {
    is_loaded: false,
    onefish_result: {},
  },
  reducers: {
    setLoaded: (state, action) => {
      state.is_loaded = action.payload;
    },
    setFishResult: (state, action) => {
      state.onefish_result = action.payload;
      state.is_loaded = false;
    },
  },
});

//FB통신함수
//퀴즈페이지에서 받은 도출한 값(resultType)과 동일한 type의 인덱스 찾아오기
const getOneFishFB = (resultType) => {
  return function (dispatch) {
    dispatch(setLoaded(true));

    if (!resultType) {
      dispatch(setLoaded(false));
      return;
    }

    fishList_db.get().then((docs) => {
      docs.forEach((doc, index) => {
        if ((doc.exists && doc.data().type === resultType) || (doc.exists && doc.data().name === resultType)) {
          dispatch(setFishResult(doc.data()));
          const _name = doc.data().name;
          history.push(`/result/${_name}`);
        }
      });
    });
  };
};

export const { setFishResult, setLoaded } = fishSlice.actions;

export const api = {
  getOneFishFB,
};

export default fishSlice.reducer;
