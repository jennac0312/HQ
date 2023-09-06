import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const SafeHouse = () => {

  const { user } = useContext(AppContext)
  console.log('SAFE HOUSE USER',user)
  return (
    <div>
      <Header page={"safehouse"} />
      <main>
        <h1>SAFE HOUSE</h1>
      </main>
      <Footer />
    </div>
  )
}

export default SafeHouse
