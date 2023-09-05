import React from 'react'
import './editPost.css'

const EditPost = ({ post }) => {
    console.log(post)
  return (
    <div className='editPost'>
      <form action="">
        <div>
            <label htmlFor=""></label>
            <input type="text" />
        </div>

      </form>
    </div>
  )
}

export default EditPost
