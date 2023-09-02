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
      setAllUsers( users )
      console.log('ALL USERS', users)
    }

    useEffect(() => {
      getAllUsers()
      // sortUsers()
    }, [])

    // const sortUsers = () => {
    //   allUsers?.sort((acc, cur) => acc - cur.rank)
    //   console.log('SORTED', allUsers)
    // }

    const { user } = useContext(AppContext)

  return (
    <div>
      <Header />
      <main>
        <h1>ranks</h1>
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
