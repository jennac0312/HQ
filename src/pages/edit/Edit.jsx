import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../contexts/app_context'
import Header from '../../components/header/Header'
import * as usersApi from '../../utilities/users-api'
import { useLocation } from 'react-router-dom'
import EditSample from '../../components/editSample/EditSample'
import './edit.css'
import { getUser } from '../../utilities/users-service';


const Edit = () => {

    const { user, setUser, navigate } = useContext(AppContext)
    // console.log(user)

    const [ formData, setFormData ] = useState({...user}) // to keep previous if input left empty
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
        console.log('UPDATED IN EDIT',updatedUser)
        // console.log(URL)
        // setUser(getUser()) // user not updating hmm
        setUser(updatedUser)
        console.log('UPDATED USER', user)

        navigate('/headquarters')
    }
    
  return (
    <div className='editPage'>
        <Header page="edit"/>
        {/* <h1>EDIT PAGE</h1> */}
        <main>
            <form action="" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" placeholder={user.name || ""}  onChange={handleChange} autoComplete="off"/>
                </div>
                <div className="">
                    <label htmlFor="">Username:</label>
                    <input type="text" name="username" placeholder={user.username || ""}  onChange={handleChange} autoComplete="off"/>
                </div>
                <div className="">
                    <label htmlFor="">Profile Picture:</label>
                    <input type="text" name="image" placeholder={user.image || ""} onChange={handleChange}/>
                </div>
                <div className="">
                    <label htmlFor="">Rank Message:</label>
                    <textarea type="text" name="rankMessage" onChange={handleChange} autoComplete="off"/>
                </div>
                <input className='submit' type="submit" value="Save" placeholder={user.rankMessage || ""}/>
            </form>
				<input type="submit" className="cancel" value="Cancel" onClick={() => navigate(-1)} />


        <EditSample formData={formData}/>
        </main>
        {/* empty footer to get styling border and nothing else */}
    <footer></footer> 
    </div>
  )
}

export default Edit
