import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {axiosInstance} from "./helper";
import axios from 'axios'


import { toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  redirectTo:null,
  isToggle: false,
  users:[{}],
};



// export const register = createAsyncThunk( "/register",

//   async (formData) => {
//     try{
//     let res = await axiosInstance.post(`/register`, formData); 
//     console.log("Response Data",res)
//     let resData = res?.data;

//     return resData;
//     }catch(error){
//       console.log("Error!",error)
//       return error
//     }
//   }
// );


// export const login = createAsyncThunk(  
//   "//login",

//   async (formData) => {
//     try{
//     let res = await axiosInstance.post(`/login`, formData); 
    
//     console.log("Response Data",res)
//     let resData = res?.data;
   
//     return resData;
//     }catch(error){
//      console.log("Error",error)
//       return error
//     }
//   }
// );



export const user = createAsyncThunk(  
  "/user/dashboard",

  async (formData) => {
    try{
    let res = await axiosInstance.get(`/user/dashboard`, formData); 
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
    //  console.log("Error",error)
      return error
    }
  }
);

//updatePassword

export const updatePassword = createAsyncThunk(  
  "/update-password",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/update-password`, formData); 
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error)
      return error
    }
  }
);

//forget-password

export const forgetPassword = createAsyncThunk(  
  "/forget-password",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/forget-password`, formData); 
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error)
      return error
    }
  }
);

export const AuthSlice2 = createSlice({
  name: "Authentication",
  initialState,
  
  reducers: {

    Token_remove: (state, { payload }) => {
      // localStorage.removeItem("token");
      localStorage.clear();
      state.isToggle=false;
    },

    
    reset_redirectTo: (state, { payload }) => {
      console.log("From Payload",payload)
      state.redirectTo = payload;
    },



  },


  

  
  extraReducers: (builder) => {
    builder

      
      
      .addCase(user.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(user.fulfilled, (state, { payload }) => {
        state.status = "idle";
        // localStorage.setItem("email",payload.data.email)
        //   localStorage.setItem("first_school",payload.data.first_school)
        state.users=payload.data
        // console.log("Userrrrrrrr",state.users)
          toast(payload.message);

      })
      .addCase(user.rejected, (state, action) => {
        state.status = "idle";

      })



      .addCase(updatePassword.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(updatePassword.fulfilled, (state, { payload }) => {
        state.status = "idle";
       
          toast(payload.message);

      })
      .addCase(updatePassword.rejected, (state, action) => {
        state.status = "idle";

      })

      .addCase(forgetPassword.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(forgetPassword.fulfilled, (state, { payload }) => {
        state.status = "idle";
       
          toast(payload.message);

      })
      .addCase(forgetPassword.rejected, (state, action) => {
        state.status = "idle";

      })

  },
   
});


export const { Token_remove, reset_redirectTo, Check_Token } = AuthSlice2.actions;