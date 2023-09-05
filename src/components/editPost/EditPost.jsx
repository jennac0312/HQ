import React, { useContext, useEffect } from 'react'
import './editPost.css'
import Post from '../post/Post'
import { AppContext } from '../../contexts/app_context'

const EditPost = ({ setShowPostEdit, post }) => {
    // console.log(setShowPostEdit)
    // console.log(post)

    // const {showPostEdit, setShowPostEdit} = useContext(AppContext)
    useEffect(() => {
        return() => {
            // setShowPostEdit(false)
        }
    })
  return (
    <div className='editPopUp'>
      {/* <form action="">
        <div>
            <label htmlFor=""></label>
            <input type="text" value={post.content || ""}/>
        </div>
      </form> */}
        <Post edit={true} post={post}/>

    </div>
  )
}

export default EditPost
