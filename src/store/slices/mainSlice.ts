import {createSlice /* , PayloadAction*/} from "@reduxjs/toolkit";

const initialState = {};

const mainSlice = createSlice({
    "name": "main",
    initialState,
    "reducers": {},
});

// Export all state in one object to have only to imports : Action and State.
export const mainState = {};
export const mainActions = mainSlice.actions;
export default mainSlice.reducer;
