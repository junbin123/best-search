import React from 'react'
import './style.css'
import SearchBar from '../../components/SearchBar'
function HomePage() {
  return (
    <div className="home-container w-full flex justify-center align-center flex-col">
      <div className="text-4xl pb-4">
        <span className="font-extrabold">Best</span>Search
      </div>
      <SearchBar />
    </div>
  )
}
export default HomePage
