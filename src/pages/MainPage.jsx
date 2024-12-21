import React from 'react'
import Navbar from './Navbar'
import AllRoutes from './AllRoutes'
import Footer from './Footer'
import { ToastContainer, Bounce } from 'react-toastify'
import { useTheme } from '../ContextApi/ThemeContext'

const MainPage = () => {
  const {theme} = useTheme()
  return (
    <>
    <Navbar/>
    <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme={`${theme == 'light' ? 'light': "dark"}`}
        transition={Bounce}
      />
    <AllRoutes/>
    <Footer/>
    </>
  )
}

export default MainPage