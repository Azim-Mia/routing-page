import  postSliceReducer from '/data/data/com.termux/files/home/routing-page/src/reduxToolkits/productFeaturs/productSlice.js'
import { configureStore} from '@reduxjs/toolkit'
const store=configureStore({
  reducer:{
    posts:postSliceReducer,
  }
});
export default store;