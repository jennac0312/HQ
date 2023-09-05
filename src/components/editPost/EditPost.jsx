import React, { useContext } from 'react'
import './editPost.css'
import Post from '../post/Post'
import { AppContext } from '../../contexts/app_context'

const EditPost = ({ post }) => {
    console.log(post)

    const {showPostEdit, setShowPostEdit} = useContext(AppContext)
    
  return (
    <div className='editPost'>
        <p className='exitEdit hover' onClick={() => setShowPostEdit(false)}>❌</p>
      <form action="">
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>
        <Post edit={true} post={post}/>

      </form>
    </div>
  )
}

export default EditPost
