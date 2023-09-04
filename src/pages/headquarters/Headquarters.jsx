import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'
import Post from '../../components/post/Post'

const Headquarters = () => {
  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("headquarters")

  const [ hqInput, setHqInput ] = useState("")
  const [ allPosts, setAllPosts ] = useState([])

  useEffect(() => { // "destroy is not a function call"
    const getPosts = async () => {
      try {
        const posts = await hq.getAllPosts()
        setAllPosts( posts )
        console.log(allPosts)
      } catch (error) {
        console.error(error)
      }
    }

    // interval to get updates from db every 5 seconds. not sure if this is a good idea
    setInterval(() => {
      getPosts()
    }, 5000);
    return() => {
      clearInterval()
    }
  }, []) // on load get all posts

  return (
    <div>
        <Header />
        <main>
            <h1>headquarters</h1>
            {/* <p>render posts from hq channel</p>
            <p>general posts</p> */}
            {
              allPosts.map((post) => {
                return <Post post={post}/>
              })
            }
        </main>
        <Footer input={hqInput} setInput={setHqInput} />
      
    </div>
  )
}

export default Headquarters
