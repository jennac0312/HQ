import React, { useContext } from 'react'
import './editPost.css'
import Post from '../post/Post'
import { AppContext } from '../../contexts/app_context'

const EditPost = ({ post }) => {
    console.log(post)

    const {showPostEdit, setShowPostEdit} = useContext(AppContext)

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
