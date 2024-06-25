import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance2 from "./helper";
import axios from 'axios'


import { toast } from "react-toastify";  

const initialState = {
  listData: [{}],
  totalRecords: [{}],
  det:{},
  det2:[{}],
  blogs:{},
  totalRecords2: [{}],
  status:"idle",
  err:true,
  err2:true,
  blogUpdateDone:false,
  

};





export const blogList = createAsyncThunk(
  "/product/list",

  async () => {
    try{
    let res = await axiosInstance2.post(`/product/list`);

    let resData = res?.data;

    return resData;
  }catch(error){
    console.log("Error",error)
     return error
   }
  }
);

export const create = createAsyncThunk(
  "/product/create",

  async (formData) => {
      let res = await axiosInstance2.post(`/product/create`, formData);

      let resData = res?.data;

      return resData;
  }
);

export const remove = createAsyncThunk(
  "/product/remove",

  async (formData) => {
      let res = await axiosInstance2.post(`/product/remove`, formData);

      let resData = res?.data;

      return resData;
  }
);







export const blogUpdate = createAsyncThunk(
  "/product/update",

  async (formData) => {
    let res = await axiosInstance2.post(`/product/update`, formData);

    let resData = res?.data;

    return resData;
  }
);


export const blogDetails = createAsyncThunk(
  "/product/detail",

  async (id)=> {
    let res = await axiosInstance2.get(`/product/detail/${id}`);

    let resData = res?.data;

    return resData;
  }
);







export const productSlice = createSlice({
  name: "product",
  initialState,
 
  reducers: {
    blogUpdated: (state, { payload }) => {
      
      
      state.blogUpdateDone=false;
    },
  },

 
  extraReducers: (builder) => {
    builder

      
        

      
     
      .addCase(create.pending, (state, action) => {
        state.status = "loading";
    })
    .addCase(create.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.status === 200) {
            
            state.err2=!state.err2
            toast(payload.message)
        }
        console.log("blogList Payload",payload)
      toast(payload.message)
    })
    .addCase(create.rejected, (state, action) => {
        state.status = "idle";
    })
    .addCase(blogList.pending, (state, action) => {
      state.status = "loading";
  })
  .addCase(blogList.fulfilled, (state, { payload }) => {
      state.status = "idle";
      if (payload.status === 200) {
          state.det2=payload.data
          state.totalRecords2 = payload.totalRecords;
          
         
      }
      console.log("blogList Payload",payload)
      toast(payload.message)
  })
  .addCase(blogList.rejected, (state, action) => {
      state.status = "idle";
  })

      .addCase(remove.pending, (state, action) => {
        state.status = "loading";
    })
    .addCase(remove.fulfilled, (state, { payload }) => {
        state.status = "idle";
        console.log("From Remove",payload)
        if (payload.status === 200) {
          state.totalRecords2 = payload.totalRecords;
        }
        toast(payload.message)
    })
    .addCase(remove.rejected, (state, action) => {
        state.status = "idle";
    })
   
    .addCase(blogUpdate.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(blogUpdate.fulfilled, (state, { payload }) => {
      state.status = "idle";
      if (payload.status === 200) {
        state.blogUpdateDone=!state.blogUpdateDone
        state.totalRecords = payload.totalRecords;
        toast(payload.message);
      }
      else{
        toast(payload.message);
      }



    })
    .addCase(blogUpdate.rejected, (state, action) => {
      state.status = "idle";
    })



    .addCase(blogDetails.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(blogDetails.fulfilled, (state, { payload }) => {
      state.status = "idle";
      if (payload.status === 200) {
        state.blogs = payload.data;
      }
    })
    .addCase(blogDetails.rejected, (state, action) => {
      state.status = "idle";
    })

  },

});





export const {blogUpdated } = productSlice.actions;