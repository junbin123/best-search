import { configureStore } from '@reduxjs/toolkit'
import productTrendsReducer from './productTrends'

export default configureStore({
  reducer: {
    productTrends: productTrendsReducer,
  },
})
