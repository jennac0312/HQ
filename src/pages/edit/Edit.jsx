import React, { useContext } from 'react'
import { AppContext } from '../../contexts/app_context'
import Header from '../../components/header/Header'

const Edit = () => {

    const { user } = useContext(AppContext)
    console.log(user)
  return (
    <div>
        <Header page="edit"/>
        <h1>EDIT PAGE</h1>
        <form action="" onSubmit={'we'}>

        </form>

    </div>
  )
}

export default Edit
