import React, { useContext, useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as intel from '../../utilities/intelligence'
import Post from '../../components/post/Post'

const Intelligence = () => {

  const { updateCurrentPage, intelSearch } = useContext(AppContext)
  updateCurrentPage("intelligence")

  const [ intelInput, setIntelInput ] = useState("")
  const [ allPosts, setAllPosts ] = useState([])
  const [ filteredPosts, setFilteredPosts ] = useState(allPosts)   

  useEffect(() => { // "destroy is not a function call"
    const getPosts = async () => {
      try {
        const posts = await intel.getAllPosts()
        setAllPosts( posts )
        console.log(allPosts)
      } catch (error) {
        console.error(error)
      }
      // setCount(count + 1) //refresh
    }

    // interval to get updates from db every 5 seconds. not sure if this is a good idea
    // setInterval(() => {
      getPosts()
    // }, 5000);
    // return() => {
    //   clearInterval()
    // }
  }, []) // on load get all posts

  const filterAllPosts = () => {
    console.log(intelSearch)
    let filteredPosts =  allPosts?.filter((post) => {
      return post.content.includes(intelSearch)
    })

    setFilteredPosts(filteredPosts)
    console.log(filteredPosts)
  }

  useEffect(() => {
    filterAllPosts()
  }, [intelSearch])

  return (
    <div>
        <Header />
        <main>
            <h1>intelligence</h1>
            {
              intelSearch !== "" ?
              filteredPosts.map((post) => {
                return <Post post={post}/>
              })
              :
              allPosts?.map((post) => {
                return <Post post={post}/>
              })
            }
        </main>
        <Footer input={intelInput} setInput={setIntelInput} />
      
    </div>
  )
}

export default Intelligence
