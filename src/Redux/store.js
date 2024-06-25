import { configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from "./authSlice";
import { AuthSlice2 } from "./authSlice2";
import { productSlice } from "./crudSlice"



export const store = configureStore({
  reducer: {
    
    Auth: AuthSlice.reducer,
    Auth2: AuthSlice2.reducer,
    Crud:productSlice.reducer,
    
 
  },
  
})