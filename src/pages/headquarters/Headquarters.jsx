import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'
import Post from '../../components/post/Post'
import EditPost from '../../components/editPost/EditPost'

const Headquarters = () => {
  const { updateCurrentPage, hqSearch, setHqSearch, showPostEdit, currentPost, count, normalizeTimeStamp } = useContext(AppContext)

  updateCurrentPage("headquarters") //dont know why i did it like this but okay... oh maybe to stop infinite loop.. but i could have just used a useffect

  const [ hqInput, setHqInput ] = useState("")
  const [ allPosts, setAllPosts ] = useState([])
  const [ filteredPosts, setFilteredPosts ] = useState(allPosts)
  
  // const [ count, setCount ] = useState(0) // for refresh

  useEffect(() => { // "destroy is not a function call"
    const getPosts = async () => {
      try {
        const posts = await hq.getAllPosts()
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
  }, [count]) // on load get all posts

  const filterAllPosts = () => {
    console.log(hqSearch)
    let filteredPosts =  allPosts.filter((post) => {
      return post.content.includes(hqSearch)
    })

    setFilteredPosts(filteredPosts)
    console.log(filteredPosts)
  }

  useEffect(() => {
    filterAllPosts()
  }, [hqSearch])

// console.log(filterPosts())
// useEffect(() => {
//   let filtered =  allPosts.filter((post) => {
//     return post.content.includes(hqSearch)
//   })

//   setFilteredPosts(filtered)
//   console.log(filteredPosts)
// }, [hqSearch]) //delayed by 1 letter

  console.log(showPostEdit)
  return (
    <div>
      {/* { showPostEdit && <EditPost post={currentPost}/>} */}
        <Header title="headquarters"/>
        <main>
            {/* <h1>headquarters{count}</h1> */}
            {/* <p>render posts from hq channel</p>
            <p>general posts</p> */}
            {
              hqSearch !== "" ? // if search not empty
              filteredPosts?.toReversed().map((post, index) => {
                const time = normalizeTimeStamp(post.createdAt)
                return <Post key={index} post={post} time={time}/>
              })
              :
              allPosts?.toReversed().map((post, index) => {
                const time = normalizeTimeStamp(post.createdAt)
                return <Post key={index} post={post} time={time}/>
              })
            }
        </main>
        <Footer input={hqInput} setInput={setHqInput} />
      
    </div>
  )
}

export default Headquarters
