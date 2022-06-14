import React, {useEffect, useRef} from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  const handleSubmit = (e)=>{
    e.preventDefault()
  }

  const searchcCocktail = ()=> {
    setSearchTerm(searchValue.current.value)
  }
  
  useEffect(()=>{
    searchValue.current.focus()
  },[])

  return (
    <section className='section search'>
      <form onSubmit={handleSubmit} className='search-form'>
        <div className='form-control'>
          <label htmlFor='name'>Search for your favourite cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchcCocktail}
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
