import { createSlice } from '@reduxjs/toolkit'
import { getProductTrends } from '../api'
export const productTrendsSlice = createSlice({
  name: 'productTrends',
  initialState: {
    productTrends: [], // 搜索结果
    keyword: '', // 搜索关键词
    onRequest: false, // 是否请求中
  },
  reducers: {
    updateData: (state, action) => {
      state.productTrends = action.payload
    },
    updateKeyword: (state, action) => {
      state.keyword = action.payload
    },
    updateOnRequest: (state, action) => {
      state.onRequest = action.payload
    },
  },
})

export const { updateData, updateKeyword, updateOnRequest } =
  productTrendsSlice.actions

// 异步
export const updateDataAsync = (keyword) => {
  return (dispatch) => {
    dispatch(updateOnRequest(true))
    getProductTrends({ keyword }).then((res) => {
      const { product_trends = [] } = res
      dispatch(updateOnRequest(false))
      dispatch(updateData(product_trends))
    })
  }
}

// 读取值
export const selectProductTrends = (state) => state.productTrends.productTrends
export const selectKeyword = (state) => state.productTrends.keyword
export const selectOnRequest = (state) => state.productTrends.onRequest

export default productTrendsSlice.reducer
