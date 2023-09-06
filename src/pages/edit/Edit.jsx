import React, { useContext, useState } from 'react'
import { AppContext } from '../../contexts/app_context'
import Header from '../../components/header/Header'
import * as usersApi from '../../utilities/users-api'
import { useLocation } from 'react-router-dom'
import EditSample from '../../components/editSample/EditSample'

const Edit = () => {

    const { user, setUser, navigate } = useContext(AppContext)
    // console.log(user)

    const [ formData, setFormData ] = useState({})
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
        console.log(formData)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        // send form data to update user
        const previousUser = user
        const updatedUser = await usersApi.updateUser(previousUser, formData)
        console.log(updatedUser)
        setUser(updatedUser)
        console.log('UPDATED IN EDIT',user)
        // console.log(URL)
    }
    
  return (
    <div>
        <Header page="edit"/>
        <h1>EDIT PAGE</h1>
        <form action="" onSubmit={handleSubmit}>
            <div className="">
                <label htmlFor="">Name:</label>
                <input type="text" name="name" placeholder={user.name || ""}  onChange={handleChange}/>
            </div>
            <div className="">
                <label htmlFor="">Username:</label>
                <input type="text" name="username" placeholder={user.username || ""}  onChange={handleChange}/>
            </div>
            <div className="">
                <label htmlFor="">Profile Picture:</label>
                <input type="text" name="image" onChange={handleChange}/>
            </div>
            <div className="">
                <label htmlFor="">Rank Message:</label>
                <textarea type="text" name="rankMessage" onChange={handleChange}/>
            </div>
            <div>
                <input type="submit" value="Update"/>
            </div>

        </form>

        <EditSample formData={formData}/>

    </div>
  )
}

export default Edit
