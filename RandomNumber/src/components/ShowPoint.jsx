import React from 'react'

function ShowPoint({point}) {
  // console.log("point is ",point);
   return (
    <div >
    <h1  >Total Point= 
      <button className='btn ' style={{border:"2px solid red",height:"5rem", width:"5rem"}} >   <h1>{point?point:0}</h1></button>  
      </h1>
    </div>
  )
}

export default ShowPoint