import { useContext, useState } from 'react'
import './post.css'
import { AppContext } from '../../contexts/app_context'
import PopUp from '../popup/PopUp'
import EditPost from '../editPost/EditPost'
// import Reaction from '../reaction/Reaction'
import * as hq from '../../utilities/hq'

const Post = ({ edit, post }) => {
    // only show trash can if post belongs to user
    const { user, showPopUp, setShowPopUp, showPostEdit, setShowPostEdit } = useContext(AppContext)
    const [ isHover, setIsHover ] = useState(false)
    const isMyPost = post.user._id === user._id



    const handleHover = () => {
        console.log('post hovered')
        // toggle add comment / like / dislike
        setIsHover(!isHover)
    }

    const handleDelete = () => {

    }

    // array of posts
    const main = () => {
        return (
            <>
        { showPopUp && <PopUp post={post} message={`"${post.content}"`}/> }
        { isMyPost && showPostEdit && <EditPost post={post}/> }
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

    const [ formData, setFormData ] = useState({})
    // edit post
    const editing = () => {
        // function to send update
        const handleChange = (e) => {
            setFormData({
                ...post,
                [e.target.name]: e.target.value
            })
            console.log(formData)
        }

        const handleSubmit = async () => {
            const updatedPost = await hq.updatePost(formData)
            console.log(updatedPost)
        }

        return (
            <>
        {/* { showPostEdit && <EditPost post={post}/> } */}
        {/* omg this was causing infinite loop lololol */}
        <div className="">
            <p className='exitEdit hover icon-30' onClick={() => setShowPostEdit(false)}>back ❌</p>
            <p className="confirm hover icon-30" onClick={handleSubmit}>save ✅</p>
        </div>
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
                    <textarea type="text" placeholder={post.content} autoFocus onChange={handleChange} value={formData.content || ""} name="content"/>
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
