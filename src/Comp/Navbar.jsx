import React from 'react'
import Button from './Button'
import Link from './Link'
import Logo from './Logo'

export default function Navbar() {
  return (
    <div style={{backgroundColor:"gray",display:"flex",width:"100%",height:"50px",justifyContent:"space-evenly",alignItems:"center"}}>
      <Logo/>
      <div >
      <Link />
      </div>
      
      <Button/>  
    </div>
  )
}
