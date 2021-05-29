import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: {
    quizzes: {}
  },
  reducers: {
    addQuiz: (state, action) => {
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    },
  }
});

export const addQuizForTopicId = (quiz) => {
  const { id, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};


export const { addQuiz } = quizzesSlice.actions;
export const selectQuizzes = (state) => state.quizzes.quizzes;
export default quizzesSlice.reducer;

// quizzes: {
//     '456': {
//       id: '456',
//       topicId: '123',
//       name: 'quiz for example topic',
//       cardIds: ['789', '101', '102']
//     }
//   }