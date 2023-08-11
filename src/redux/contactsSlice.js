import {  createSlice } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import storage from 'reduxjs-toolkit-persist/lib/storage';


export const contactsSlice = createSlice({
    name: 'contacts',
    
    initialState: {
        contacts: []
    },
    reducers: { 
    addContact: (state, {payload})=>{
        state.contacts.push(payload)   
    },

    removeContact: (state, {payload})=>{
         state.contacts = state.contacts.filter(contact=> contact.id !== payload)
    },
    }
})


export const {addContact, removeContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;


const persistConfig = {
    key: 'root',
    storage,
  }
   
export  const persistedContactsReducer = persistReducer(persistConfig, contactsReducer)
  