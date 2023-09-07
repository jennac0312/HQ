import React, { useContext, useEffect } from 'react'
import styles from './search.module.css'
import { AppContext } from '../../contexts/app_context'

const Search = () => {
    // need to decide if i want exit button to also clear search

    const { search, setSearch, setShowSearch, currentPage, hqSearch, setHqSearch, setIntelSearch, rankSearch, setRankSearch } = useContext( AppContext )

    const clearSearch = () => {
        setSearch("")
    }

    const handleChange = (e) => {
        e.preventDefault()
        setSearch(e.target.value)
        console.log(search)
    }

    // hide search bar
    const handleExit = () => {
        console.log('exit search')
        setShowSearch(false) // hide
        // do i want to clear previous search ?
        setHqSearch("")
        setIntelSearch("")
    }

    useEffect(() => {
        setHqSearch(search)
        setIntelSearch(search)
    }, [search]) //when search changes update

  return (
    <div className={styles.search}>
        <p className={`${styles.icon} hover`} onClick={() => setSearch("")}>🧹</p>
        <div className="middle">
            {/* <h3>Searching {currentPage}</h3> */}
            <textarea type="text" placeholder={`search ${currentPage}`} value={search} onChange={(e) => handleChange(e)} autoFocus/>
        </div>
        <p className={`${styles.icon} hover`} onClick={handleExit}>✖️</p>
    </div>
  )
}

export default Search
