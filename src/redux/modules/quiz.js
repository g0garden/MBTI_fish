import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getCookie } from "../../shared/Cookie";

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    question: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.is_loading = action.payload;
    },
  },
});

const getQuestionAX = () => {
  return function (dispatch, getState) {
    dispatch(setLoading(true));
    const options = {
      url: `/card/daily`,
      method: "GET",
    };
    axios(options)
      .then((response) => {
        dispatch(setQuestion(response.data.cards));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
  };
};

export const { setQuestion, setLoading } = quizSlice.actions;

export const api = {
  getQuestionAX,
};

export default quizSlice.reducer;
