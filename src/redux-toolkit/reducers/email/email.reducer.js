import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  objectElement: [],
  element: {}
};

const emailSlice = createSlice({
  name: 'email',
  initialState,
  reducers: {
    addElement: (state, action) => {
      console.log('action', action);
      const { element } = action.payload;
      state.element = element;
    },
  }
});

export const { addElement } = emailSlice.actions;
export default emailSlice.reducer;
