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

export const product = createAsyncThunk( 
  "/student/create",

  async (formData) => {
    try{
    let res = await axios.post(`https://tureappservar.onrender.com/student/create`, formData); 
console.log("Response Data",res)
    let resData = res?.data;
    


    return resData;
  } catch(error){

console.log("error",error)


return error.response.data

  }
});


export const list = createAsyncThunk(
  "/student/show",

  async (formData) => {
    let res = await axios.get(`https://tureappservar.onrender.com/student/show`, formData);

    let resData = res?.data;

    return resData;
  }
);



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

export const update = createAsyncThunk(
  "/student/",

  async (slug) => {
    let res = await axios.get(`/student/${slug}`, slug);

    let resData = res?.data;

    return resData;
  }
);


export const productDetails = createAsyncThunk(
  "/student/{slug/id}",

  async (slug) => {
    let res = await axios.get(`https://tureappservar.onrender.com/student/${slug}`, slug);

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

      .addCase(product.pending, (state, action) => {
        state.status = "loading";
        console.log("Pending State")
      })
      .addCase(product.fulfilled, (state, action) => {
        state.status = "idle";
        
        
          if (action.payload?.data?._id) {
          state.err=!state.err
          console.log("updated state",state.err)
        toast("Success, Student added successfully!!",action.payload?.message);
        }
        else{
          action.payload?.error?.name && toast(action.payload?.error?.name?.message);
          action.payload?.error?.email && toast(action.payload?.error?.email?.message);
          action.payload?.error?.phone && toast(action.payload?.error?.phone?.message);
          action.payload?.error?.city && toast(action.payload?.error?.city?.message);
          action.payload?.error?.state && toast(action.payload?.error?.state?.message);
          action.payload?.error?.address && toast(action.payload?.error?.address?.message);
          action.payload?.error?.section && toast(action.payload?.error?.section?.message);
          action.payload?.error?.classes && toast(action.payload?.error?.classes?.message);

          toast(action.payload?.message);
          
          
        }
        

      })
      .addCase(product.rejected, (state, action) => {
        state.status = "idle";
        

        toast(action.error);
        

      }).addCase(list.pending, (state, action) => {
        state.status = "loading";
      }).addCase(list.fulfilled, (state, { payload }) => {
        state.status = "idle";
        if (payload.success === 200) {
          state.listData = payload.data
          state.totalRecords = payload.totalRecords;
          console.log("LiatData",state.listData)
          console.log("TotalRecords",state.totalRecords)
         
        }
      })
      .addCase(list.rejected, (state, action) => {
        state.status = "idle";
      })
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
    .addCase(update.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(update.fulfilled, (state, { payload }) => {
      state.status = "idle";
      
      if (payload.status === 200) {
        state.totalRecords = payload.totalRecords;
        toast(payload.message);
      }
      else{
        toast(payload.message);
      }

      

    })
    .addCase(update.rejected, (state, action) => {
      state.status = "idle";
    })



    .addCase(productDetails.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(productDetails.fulfilled, (state, { payload }) => {
      state.status = "idle";
      
        state.det = payload;
        console.log("det",typeof(state.det.data))
      
    })
    .addCase(productDetails.rejected, (state, action) => {
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