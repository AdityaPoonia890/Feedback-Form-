import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './src/Header'

function Layout() {
  const style={
    width: '1000px',
    backgroundColor: 'lightgray',
    maxWidth : '100%',
    textAlign: 'center'
  }
  return (
    <div style={style}>
      <Header />
      <Outlet />
      
    </div>
        
      
    
  )
}

export default Layout
