import { createSlice } from "@reduxjs/toolkit";




export const filterSlice = createSlice({
    name:'filter',
    initialState:'',
    reducers:{
        filterContact: (state, {payload})=> {
            return state = payload
        }
    }
})

export const {filterContact} = filterSlice.actions;

export const filterReducer = filterSlice.reducer;