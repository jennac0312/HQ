import React, { useContext, useState } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const SafeHouse = () => {

  const { user, updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("safehouse")

  const [ shInput, setShInput ] = useState("")

  console.log('SAFE HOUSE USER',user)
  return (
    <div>
      <Header page={"safehouse"} />
      <main>
        <h1>SAFE HOUSE</h1>
      </main>
      <Footer input={shInput} setInput={setShInput}/>
    </div>
  )
}

export default SafeHouse
