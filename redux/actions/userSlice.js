import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  language: null,
  device: null,
  query: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setDevice: (state, action) => {
      state.device = action.payload;
    },
    setQuery: (state, action) => {
      state.query = action.payload;
    },
  },
});

export const userReducer = userSlice.reducer;
export const { setLocation, setLanguage, setDevice, setQuery } = userSlice.actions;