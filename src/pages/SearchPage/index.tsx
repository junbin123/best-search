import React, { useEffect } from 'react'
import { ProductTrendsProps } from '../../types/index'
import { useParams } from 'react-router-dom'
import CardSkeleton from '../../components/CardSkeleton'
import CardItem from '../../components/CardItem/index'

import { useDispatch, useSelector } from 'react-redux'
import {
  selectKeyword,
  selectProductTrends,
  updateDataAsync,
  selectOnRequest,
} from '../../app/productTrends.js'

import './style.css'

function SearchPage() {
  const { query } = useParams()
  const dispatch = useDispatch()
  const keyword = useSelector(selectKeyword) || query
  const productTrends: ProductTrendsProps[] = useSelector(selectProductTrends)

  const onRequest = useSelector(selectOnRequest)
  useEffect(() => {
    dispatch(updateDataAsync(keyword))
  }, [keyword])

  const defaultItem: ProductTrendsProps = {
    name: 'name',
    search_msv: [],
    growth: 10,
    group: 'group',
    update_dt: '2022',
  }
  return (
    <div>
      <div className="content-container mt-2 mx-auto px-4 md:px-8 max-w-screen-xl">
        <div className="flex flex-wrap cursor-pointer mx-auto">
          {(onRequest
            ? Array(4)
                .fill(defaultItem)
                .map((i, idx) => ({ ...i, name: idx }))
            : productTrends
          ).map((item) => (
            <div
              className="w-full h-auto p-2 lg:w-1/3 xl:w-1/4 md:w-1/2 flex flex-col justify-center items-center min-w-[50px]"
              key={item.name}
            >
              {onRequest ? <CardSkeleton /> : <CardItem {...item} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
export default SearchPage
