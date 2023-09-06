import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RankItem from '../../components/rankItem/RankItem'
import { AppContext } from '../../contexts/app_context'
import * as userApi from '../../utilities/users-api'


const Ranks = () => {

  const { updateCurrentPage } = useContext(AppContext)

  useEffect(() => {
    updateCurrentPage("ranks")
  })

  const [ allUsers, setAllUsers ] = useState(null)
  // on load, get all users
    // map into individual ranks

    const getAllUsers = async () => {
      console.log('getting users')
      const users = await userApi.getAllUsers()
      const sorted =  users.sort((acc, cur) => cur.rank - acc.rank) // from greatest to least
      console.log('SORTED', sorted)
      setAllUsers(sorted)
      // setAllUsers( users )
      console.log('ALL USERS', users)
    }

    useEffect(() => {
      getAllUsers()
      // sortUsers()
    }, [])

    const { user } = useContext(AppContext)

  return (
    <div>
      <Header />
      <main>
        { 
          allUsers ?
          allUsers?.map((user, index) => {
            return <RankItem key={index} user={user}/>
          }) 
          :
          <h1>loading</h1>
        }
      </main>
      <Footer />
    </div>
  )
}

export default Ranks
