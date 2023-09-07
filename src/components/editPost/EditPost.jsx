import React, { useContext, useEffect } from 'react'
import './editPost.css'
import Post from '../post/Post'
import { AppContext } from '../../contexts/app_context'
import * as hq from '../../utilities/hq'

const EditPost = ({ setShowPostEdit, post, formData }) => {
    // console.log(setShowPostEdit)
    // console.log(post)
    const { currentPost, editPostFormData, setCount, normalizeTimeStamp } = useContext(AppContext)

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
        <Post edit={true} post={post} time={normalizeTimeStamp(post.user.createdAt)}/>
        <div className="buttons">
            <button className="yes" onClick={() => handleExit()}>SAVE</button>
            <button className="no" onClick={handleSubmit}>CANCEL</button>
        </div>
    </div>
  )
}

export default EditPost
