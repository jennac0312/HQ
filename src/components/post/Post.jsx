import { useContext, useRef, useState } from 'react'
import './post.css'
import { AppContext } from '../../contexts/app_context'
import PopUp from '../popup/PopUp'
import EditPost from '../editPost/EditPost'
// import Reaction from '../reaction/Reaction'
import * as hq from '../../utilities/hq'

const Post = ({ edit, post }, props) => {
    // only show trash can if post belongs to user
    const { user, showPopUp, setShowPopUp, currentPost, setCurrentPost, editPostFormData, setEditPostFormData, normalizeTimeStamp } = useContext(AppContext)
    const [ isHover, setIsHover ] = useState(false)
    const isMyPost = post.user._id === user._id

    const [ showPostEdit, setShowPostEdit  ] = useState(false)
    const time = normalizeTimeStamp(post.user.createdAt)
    console.log(time)
    // setCurrentPost(useRef(post))
    // console.log(currentPost)

    // when post is clicked, update currentPost
    // const handlePostClick = () => {
    //     setCurrentPost(post)
    //     console.log('CURRENT POST',currentPost) // delayed by 1 grr
    // }
        
        
    // currentPost.showPostEdit = showPostEdit
    // currentPost.setShowPostEdit = setShowPostEdit
        
    const handleHover = () => {
        console.log('post hovered', currentPost)
        // toggle add comment / like / dislike
        setIsHover(!isHover)
        // console.log(currentPost)
    }

    const handleDelete = () => {
    }
// active usestate. when click sets active to specific object... to make indepedent 
const updateCurrentPost = () => {
    setCurrentPost(post)
    console.log('CURRENT POST',currentPost) // delayed by 1 grr
}

const handleEdit = () => {
    updateCurrentPost()
    setShowPostEdit(true)
    console.log(showPostEdit)
}
const handleDeleteClick = () => {
    updateCurrentPost()
    setShowPopUp(true)
}

// const [ formData, setFormData ] = useState({})

// function to send update
const handleChange = (e) => {
    setEditPostFormData({
        ...post,
        [e.target.name]: e.target.value
    })
    console.log(editPostFormData)
}

    // array of posts
    const main = () => {
        return (
            <>
        { isMyPost && showPopUp && <PopUp post={currentPost} message={`"${currentPost.content}"`}/> }
        {/* { isMyPost && showPostEdit && <EditPost setShowPostEdit={setShowPostEdit} post={currentPost}/> } */}
      { showPostEdit && <EditPost post={currentPost} setShowPostEdit={setShowPostEdit}/>}

        <div className='post' style={{ backgroundColor: isMyPost ? "#5d3c18a9" : null }}>
            {/* { isHover && <Reaction /> } */}
            <div className="left">
                <img src={post.user.image} alt="" className='avi'/>
            </div>
            <div className="right">
                    { isMyPost && 
                        <div className='options'>
                            <p className="delete hover icon-20" onClick={() => handleDeleteClick()}>🗑️</p> 
                            <p className='edit hover icon-20' onClick={() => handleEdit()}>✏️</p>
                        </div>
                    }
                <div className="top">
                    <p className='username'>
                        <span className="italic bold">{post.user.role}</span> 
                        <span className="name"> {post.user.name},</span>
                        <span className='username'> @{post.user.username}</span>
                    </p>
                    {/* <p className="time">{post.user.createdAt}</p> */}
                    <p className="time">{time.hours}:{time.minutes}</p>
                    {/* doesnt work either.. repeats prev post */}
                    {/* <p className="time">{normalizeTimeStamp(post.user.createdAt).hours}:{normalizeTimeStamp(post.user.createdAt).minutes}{normalizeTimeStamp(post.user.createdAt).suffix}</p> */}
                </div>
                <div className="content">
                    <p>{post.content}</p>
                </div>
                
                    {/* show conditionally */}
                <div className="reactions">
                    <p>
                        <span className="icon-20 hover">👍</span> <span className='number'>0</span>
                    </p>
                    <p>
                        <span className="icon-20 hover">👎</span> <span className='number'>0</span>
                    </p>
                    <p className='comment'>
                        <span className="icon-20 hover">🗨️</span>
                        <span>0</span>
                    </p>
                    {/* comments will open below post */}
                </div>
            </div>
        </div>
    </>
        )
    }

    // const [ formData, setFormData ] = useState({})
    // edit post
    const editing = () => {      
        return (
            <>
        {/* { showPostEdit && <EditPost post={post}/> } */}
        {/* omg this was causing infinite loop lololol */}
        <div className='post editPost'>
            {/* { isHover && <Reaction /> } */}
            <div className="left">
                <img src={post.user.image} alt="" className='avi'/>
            </div>
            <div className="right">
                <div className="top">
                    <p className='username'><span className="italic">agent</span> @{post.user.username}</p>
                    <p className="date">{post.user.createdAt}</p>
                    {/* <p className='exitEdit hover' onClick={() => setShowPostEdit(false)}>❌</p> */}
                </div>

                <form className="content">
                    {/* <p>{post.content}</p> */}
                    <textarea type="text" placeholder={post.content} autoFocus onChange={handleChange} value={editPostFormData.content || ""} name="content"/>
                </form>
                
                    {/* show conditionally */}
                <div className="reactions">
                    <p>
                        <span className="icon-20 hover">👍</span> <span className='number'>0</span>
                    </p>
                    <p>
                        <span className="icon-20 hover">👎</span> <span className='number'>0</span>
                    </p>
                    <p>link to comments:
                        <span className="icon-20 hover">🗨️</span>
                        <span>0</span>
                    </p>
                    {/* comments will open below post */}
                </div>
            </div>
        </div>
    </>
        )
    }

    return edit ? editing() : main()
}

export default Post
