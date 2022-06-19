import React, {ChangeEvent, useCallback} from 'react'
import Input from '@mui/material/Input'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search'
import vector from '../search.svg'

function searchLine(
  setSearchFilter: any,
  setScroll: any,
  sortColor: string,
  setisLeanghtSearch: any,
  myRef: any,
) {
  const a = (e: ChangeEvent<HTMLInputElement>) =>
    setSearchFilter(e.target.value)
  const b = (e: ChangeEvent<HTMLInputElement>) =>
    setisLeanghtSearch(e.target.value.length)
  const scrollTo = () => myRef.current.scrollIntoView()
  const c = useCallback((e: any) => {
    a(e)
    b(e)
    scrollTo()
  }, [])
  return (
    <div className="SearchLine">
      <input
        type="text"
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault()
          }
        }}
        onChange={c}
        style={{
          width: '100%',
          height: '95%',
          borderRadius: '8px',
          fontFamily: 'Montserrat',
          fontSize: '16px',
          outline: 'none',
          fontWeight: '500',
          color: 'rgba(68, 68, 68, 1)',
        }}
        className="Search"
        placeholder="Найти карточку"
      />
      <img
        className="img"
        src={vector}
        alt={' '}
        style={{
          position: 'absolute',
          marginRight: '12.51px',
          right: 0,
          width: '17.499px',
          height: '17.499px',
          color: 'rgba(151, 149, 149, 1)',
        }}
      />
    </div>
  )
}

export default searchLine
