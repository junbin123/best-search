import React, { FC } from 'react'
import Autocomplete from '@mui/material/Autocomplete'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'
import TextField from '@mui/material/TextField'
import { useNavigate, useLocation } from 'react-router-dom'
import { formateKeyword } from '../../utils/commons'
import { useDispatch } from 'react-redux'
import { updateDataAsync } from '../../app/productTrends.js'
import './index.css'

const SearchBar: FC = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { pathname } = useLocation()
  let value = ''
  function handleSearch() {
    if (!value.replace(/\s/g, '')) {
      return
    }
    const keyword = formateKeyword(value)
    if (/^\/search\//.test(pathname)) {
      // 搜索页直接搜索
      dispatch(updateDataAsync(keyword))
    } else {
      // 其他页面跳转到搜索页
      navigate(`/search/${keyword}`)
    }
  }
  // 回车搜索事件
  function onKeyUp(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  function onInputChange(e: unknown, val: string) {
    value = val
  }
  return (
    <div className="search-box flex max-w-screen-lg w-3/5">
      <Autocomplete
        className="flex-1 mr-3"
        size="small"
        freeSolo
        options={[]}
        value={value}
        onInputChange={onInputChange}
        onKeyUp={onKeyUp}
        renderInput={(params) => <TextField {...params} label="请输入内容" />}
      />
      <Button
        variant="contained"
        endIcon={<SearchIcon />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  )
}
export default SearchBar
