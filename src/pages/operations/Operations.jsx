import React, { useContext } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import { AppContext } from '../../contexts/app_context'

const Operations = () => {

  const { updateCurrentPage } = useContext(AppContext)
  updateCurrentPage("operations")

  return (
    <div>
      <Header />
      <main>
        <h1>operations</h1>
      </main>
      <Footer />
    </div>
  )
}

export default Operations
