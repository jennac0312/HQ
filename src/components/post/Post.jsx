import { useContext, useState } from 'react'
import './post.css'
import { AppContext } from '../../contexts/app_context'
import PopUp from '../popup/PopUp'
import EditPost from '../editPost/EditPost'
// import Reaction from '../reaction/Reaction'

const Post = ({ post }) => {
    // only show trash can if post belongs to user
    const { user, showPopUp, setShowPopUp } = useContext(AppContext)
    const [ isHover, setIsHover ] = useState(false)
    const isMyPost = post.user._id === user._id

    const [ showPostEdit, setShowPostEdit ] = useState(false)


    const handleHover = () => {
        console.log('post hovered')
        // toggle add comment / like / dislike
        setIsHover(!isHover)
    }

    const handleDelete = () => {

    }



  return (
    <>
        { showPopUp && <PopUp post={post} message={`"${post.content}"`}/> }
        { showPostEdit && <EditPost post={post}/> }
        <div className='post' onMouseEnter={handleHover} onMouseLeave={handleHover}>
            {/* { isHover && <Reaction /> } */}
            <div className="left">
                <img src={post.user.image} alt="" className='avi'/>
            </div>
            <div className="right">
                <div className="top">
                    <p className='username'><span className="italic">agent</span> @{post.user.username}</p>
                    <p className="date">{post.user.createdAt}</p>
                    { isMyPost && 
                        <div style={{ display: "flex" }}>
                            <p className="delete hover" onClick={() => setShowPopUp(true)}>🗑️</p> 
                            <p className='edit hover' onClick={() => setShowPostEdit(true)}>✏️</p>
                        </div>
                    }
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

export default Post
