import React from 'react'
import Sidebar from './appbar/sideBar'
import MainContent from './appbar/maincontents'
import VariantsAndAddons from './appbar/variants_page'
import '../styles/global.css'

const Index_cart = () => {
  return (
    <div className="app-container">
           <Sidebar/>
           <MainContent/>
           <VariantsAndAddons/>

    </div>
  )
}

export default Index_cart
