import React, { useContext, useEffect, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'
import * as sh from '../../utilities/safehouse'
import ShMessage from '../../components/shMessage/ShMessage'

const SafeHouse = () => {

  const { user, updateCurrentPage, count } = useContext(AppContext)
  updateCurrentPage("safehouse")

  const [ shInput, setShInput ] = useState("")
  const [ allMessages, setAllMessages ] = useState([])

  console.log('SAFE HOUSE USER',user)

  useEffect(() => {
    const getAllMessages = async () => {
      try {
        const messages = await sh.getAllMessages(user) //pass user to filter messages server side
        console.log(messages)
        setAllMessages(messages)
      } catch (error) {
        console.error(error)
      }
    }

    getAllMessages()
  }, [count])

  return (
    <div>
      <Header page={"safehouse"} />
      <main>
        <h1>SAFE HOUSE</h1>
        {
          allMessages ?
          allMessages.map((message, index) => {
            return <ShMessage message={message} key={index}/>
          })
          :
          <>no messages</>
        }
      </main>
      <Footer input={shInput} setInput={setShInput}/>
    </div>
  )
}

export default SafeHouse
