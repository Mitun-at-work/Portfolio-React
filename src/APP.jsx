import React from 'react'
import Header from './components/header/header'
import About from './components/about/about'
import Achievements from './components/achievements/achievements'
import ContactMe from './components/contactMe/contactMe'
import NavBar from './components/navBar/navBar'



/*
  Importing the react components
*/


const APP = () => {
  return (
    <>
      <Header/>
      <About/>
      <Achievements/>
      <NavBar/>
      <ContactMe/>
    </>
  )
}

export default APP
