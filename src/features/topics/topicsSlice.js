import { createSlice } from "@reduxjs/toolkit";

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: {
    topics: {}
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      }
    },
  }
})


export const { addTopic } = topicsSlice.actions;
export const selectTopics = (state) => state.topics.topics;
export default topicsSlice.reducer;

// topics: {
//   '123': {
//     id: '123',
//     name: 'example topic',
//     icon: 'icon url',
//     quizIds: ['456']
//   }
// }