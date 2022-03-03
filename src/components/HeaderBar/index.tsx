/**
 * 顶部导航栏组件
 * 实现多个页面共用一个顶部导航栏，详见：src/AppRoutes/MainPageLayout.tsx
 */
import React, { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import logo from '../../static/images/logo.png'
import { updateKeyword } from '../../app/productTrends.js'
import { useDispatch } from 'react-redux'
import './index.css'

export const HeaderBar: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()

  function handleHome() {
    dispatch(updateKeyword(''))
    navigate('/')
  }
  return (
    <div className="header-bar-box bg-slate-200 flex items-center h-20">
      <div className="text-3xl mx-4 cursor-pointer" onClick={handleHome}>
        <div className="hidden sm:block">
          <span className="font-extrabold">Best</span>Search
        </div>

        <div className="w-10 h-10 sm:hidden">
          <img src={logo} alt="logo" className="w-10 h-10" />
        </div>
      </div>
      {pathname !== '/' && <SearchBar />}
    </div>
  )
}
export default HeaderBar
