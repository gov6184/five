import React, { useState } from 'react'

export default function Link() {
    let [data,newData]=useState(["Services","Projects","About"])
  return (
    <>
      {
          data.map((elem)=>{
              return(
                <a style={{marginRight:"30px"}} href='#' key={Math.random()}>{elem}</a>
              )
              
          })

      }
    </>
  )
}
