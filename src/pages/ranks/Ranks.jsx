import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RankItem from '../../components/rankItem/RankItem'
import { AppContext } from '../../contexts/app_context'
import * as userApi from '../../utilities/users-api'
import './ranks.css'


const Ranks = () => {

  const { updateCurrentPage, user } = useContext(AppContext)

  useEffect(() => {
    updateCurrentPage("ranks")
  }, [])

  const [ allUsers, setAllUsers ] = useState(null)
  // on load, get all users
    // map into individual ranks

    const getAllUsers = async () => {
      console.log('getting users')
      const users = await userApi.getAllUsers()
      const sorted =  users?.sort((acc, cur) => cur.rank - acc.rank) // from greatest to least
      console.log('SORTED', sorted)
      setAllUsers(sorted)
      // setAllUsers( users )
      console.log('ALL USERS', users)
    }

    useEffect(() => {
      getAllUsers()
      // sortUsers()
    }, [])

  return (
    <div className='ranks'>
      <Header title="ranks" />
      <main>
        <h3 className='rankTitle'>You rank number {allUsers?.findIndex((el) => el._id === user._id) + 1} out of {allUsers?.length} agents</h3>
        { 
          allUsers ?
          allUsers?.map((person, index) => {
            const isMe = person._id === user._id
            return <RankItem key={index} person={person} isMe={isMe}/>
          }) 
          :
          <h1>loading</h1>
        }
      </main>
      {/* <Footer /> */}
      <footer></footer>
    </div>
  )
}

export default Ranks
