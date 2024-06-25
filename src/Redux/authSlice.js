import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance2,{axiosInstance} from "./helper";
import axios from 'axios'


import { toast } from "react-toastify";  // toast and its associated styles for displaying notifications.
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  redirectTo:null,
  isToggle: false,
  isUserLogin:false,
  isBlogLogin:false,
};


// Action ...................
export const register = createAsyncThunk(  // Creates an asynchronous thunk action named register using createAsyncThunk. It sends a POST request to the "/user/signup" endpoint with the provided formData and returns the response data (resData).
  "/user/signup",

  async (formData) => {
    try{
    let res = await axiosInstance2.post(`/user/signup`, formData); // axiosInstance for making HTTP requests.
    console.log("Response Data",res)
    let resData = res?.data;

    return resData;
    }catch(error){
      console.log("Error!",error)
      return error
    }
  }
);


export const register2 = createAsyncThunk(  // Creates an asynchronous thunk action named register using createAsyncThunk. It sends a POST request to the "/user/signup" endpoint with the provided formData and returns the response data (resData).
  "/register-userDashboard",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/register`, formData); // axiosInstance for making HTTP requests.
    console.log("Response Data",res)
    let resData = res?.data;

    return resData;
    }catch(error){
      console.log("Error!",error)
      return error
    }
  }
);


export const login = createAsyncThunk(  // Creates an asynchronous thunk action named register using createAsyncThunk. It sends a POST request to the "/user/signup" endpoint with the provided formData and returns the response data (resData).
  "/user/signin",

  async (formData) => {
    try{
    let res = await axiosInstance2.post(`/user/signin`, formData); // axiosInstance for making HTTP requests.
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error)
      return error
    }
  }
);

export const login2 = createAsyncThunk(  // Creates an asynchronous thunk action named register using createAsyncThunk. It sends a POST request to the "/user/signup" endpoint with the provided formData and returns the response data (resData).
  "/user_login",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/login`, formData); // axiosInstance for making HTTP requests.
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error.response?.data?.message)
      return error.response?.data?.message
    }
  }
);

// Slice create
export const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  // create action function()
  reducers: {

    Token_remove: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("token2");
      // localStorage.clear();
      state.isToggle=false;
    },

    // Check_Token: (state, { payload }) => {
    //   let token= localStorage.getItem("token");
    //   if(token!==null){
     
    //     state.isToggle = true;
    //   }
    
    // },
    reset_redirectTo: (state, { payload }) => {
      // console.log("From Payload",payload)
      state.redirectTo = payload;
    },
    userLogin: (state, { payload }) => {
      // console.log("from userLogin",state.isUserLogin)
      state.isUserLogin = true
      state.isBlogLogin = false
    },
    blogLogin: (state, { payload }) => {
      // console.log("from blogLogin",state.isBlogLogin)

      state.isUserLogin = false
      state.isBlogLogin = true
    },



  },


  

  // Promise 
  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        // localStorage.setItem("email",payload.data.email)
        //   localStorage.setItem("first_school",payload.data.first_school)
          toast(payload.message);

      })
      .addCase(register.rejected, (state, action) => {
        state.status = "idle";

      })
      .addCase(register2.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register2.fulfilled, (state, { payload }) => {
        state.status = "idle";
        // localStorage.setItem("email",payload.data.email)
        //   localStorage.setItem("first_school",payload.data.first_school)
          toast(payload.message);

      })
      .addCase(register2.rejected, (state, action) => {
        state.status = "idle";

      })
      .addCase(login.pending, (state, action) => {
        state.status = "loading";

      })
      .addCase(login.fulfilled, (state, {payload}) => {
        state.status = "idle";
        if (payload.status === 200) {
          localStorage.setItem("token",payload.token)
          localStorage.setItem("profile_pic", payload.data.profile_pic)
          localStorage.setItem("userId", payload.data._id)
          
          
          state.isToggle=true
          // state.isToggle=true
          localStorage.setItem("isToggle",JSON.stringify(state.isToggle))
          state.redirectTo = '/productlist'
      
        } 
        // else {
          
        //   toast(payload);
        // }
        toast(payload.message);

      })
      .addCase(login.rejected, (state, action) => {
        state.status = "idle";
        toast(action.error.message);

      })
      .addCase(login2.pending, (state, action) => {
        state.status = "loading";

      })
      .addCase(login2.fulfilled, (state, {payload}) => {
        state.status = "idle";
        if (payload.status === true) {
          localStorage.setItem("token2",payload.token)
          localStorage.setItem("profile_pic", payload.user.image)
          localStorage.setItem("userId", payload.user._id)
          
          
          state.isToggle=true
          // state.isToggle=true
          localStorage.setItem("isToggle2",JSON.stringify(state.isToggle))
          state.redirectTo = '/user'
      
        } 
        // else {
          
        //   toast(payload);
        // }
        toast(payload);

      })
      .addCase(login2.rejected, (state, action) => {
        state.status = "idle";
       

      })


  },
   
});


export const { Token_remove, reset_redirectTo, Check_Token, blogLogin, userLogin } = AuthSlice.actions;