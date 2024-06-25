import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance2,{axiosInstance} from "./helper";
import axios from 'axios'


import { toast } from "react-toastify";  
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  redirectTo:null,
  isToggle: false,
  isUserLogin:false,
  isBlogLogin:false,
};



export const register = createAsyncThunk(  
  "/user/signup",

  async (formData) => {
    try{
    let res = await axiosInstance2.post(`/user/signup`, formData); 
    console.log("Response Data",res)
    let resData = res?.data;

    return resData;
    }catch(error){
      console.log("Error!",error)
      return error
    }
  }
);


export const register2 = createAsyncThunk( 
  "/register-userDashboard",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/register`, formData); 
    console.log("Response Data",res)
    let resData = res?.data;

    return resData;
    }catch(error){
      console.log("Error!",error)
      return error
    }
  }
);


export const login = createAsyncThunk(  
  "/user/signin",

  async (formData) => {
    try{
    let res = await axiosInstance2.post(`/user/signin`, formData); 
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error)
      return error
    }
  }
);

export const login2 = createAsyncThunk(  
  "/user_login",

  async (formData) => {
    try{
    let res = await axiosInstance.post(`/login`, formData); 
    
    console.log("Response Data",res)
    let resData = res?.data;
   
    return resData;
    }catch(error){
     console.log("Error",error.response?.data?.message)
      return error.response?.data?.message
    }
  }
);


export const AuthSlice = createSlice({
  name: "Authentication",
  initialState,
  
  reducers: {

    Token_remove: (state, { payload }) => {
      localStorage.removeItem("token");
      localStorage.removeItem("token2");
      
      state.isToggle=false;
    },

    
    reset_redirectTo: (state, { payload }) => {
      
      state.redirectTo = payload;
    },
    userLogin: (state, { payload }) => {
     
      state.isUserLogin = true
      state.isBlogLogin = false
    },
    blogLogin: (state, { payload }) => {
      

      state.isUserLogin = false
      state.isBlogLogin = true
    },



  },


  

   
  extraReducers: (builder) => {
    builder

      .addCase(register.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.status = "idle";
        
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
          
          localStorage.setItem("isToggle",JSON.stringify(state.isToggle))
          state.redirectTo = '/productlist'
      
        } 
        
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
          
          localStorage.setItem("isToggle2",JSON.stringify(state.isToggle))
          state.redirectTo = '/user'
      
        } 
        
        toast(payload);

      })
      .addCase(login2.rejected, (state, action) => {
        state.status = "idle";
       

      })


  },
   
});


export const { Token_remove, reset_redirectTo, Check_Token, blogLogin, userLogin } = AuthSlice.actions;