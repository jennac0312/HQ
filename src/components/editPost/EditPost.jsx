import React, { useContext, useEffect } from 'react'
import './editPost.css'
import Post from '../post/Post'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'

const EditPost = ({ setShowPostEdit, post, formData }) => {
    // console.log(setShowPostEdit)
    // console.log(post)
    const { currentPost, editPostFormData, setCount } = useContext(AppContext)

    // const {showPostEdit, setShowPostEdit} = useContext(AppContext)
    useEffect(() => {
        return() => {
            // setShowPostEdit(false)
        }
    })
    const handleSubmit = async () => {
        console.log(editPostFormData)
        const updatedPost = await hq.updatePost(editPostFormData)
        console.log(updatedPost)
        setShowPostEdit(false)
        setCount(prev => prev + 1)
    }

    const handleExit = () => {
        setShowPostEdit(false)
        // console.log(showPostEdit)
        console.log('currentpost', currentPost)
        // window.location.reload() // eh works but dont want to do it this way
    }

  return (
    <div className='editPopUp'>
        <p onClick={() => setShowPostEdit(false)}>TEST</p>
        <div className="">
            <p className='exitEdit hover icon-30' onClick={() => handleExit()}>back ❌</p>
            <p className="confirm hover icon-30" onClick={handleSubmit}>save ✅</p>
        </div>
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
