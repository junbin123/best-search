import React, { FC } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import SearchBar from '../SearchBar'
import logo from '../../static/images/logo.png'
import './index.css'

export const HeaderBar: FC = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <div className="header-bar-box bg-slate-200 flex items-center h-20">
      <div
        className="text-3xl mx-4 cursor-pointer"
        onClick={() => navigate('/')}
      >
        <div className="hidden sm:block">
          <span className="font-extrabold">Best</span>Search
        </div>
        <img src={logo} alt="logo" className="w-10 h-10 sm:hidden" />
      </div>
      {pathname !== '/' && <SearchBar />}
    </div>
  )
}
export default HeaderBar
