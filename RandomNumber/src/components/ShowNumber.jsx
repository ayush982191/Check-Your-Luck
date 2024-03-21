import React, { useState } from 'react';

function ShowNumber({numberChoose,setNumberChoose,setBtnClick,btnClick,imgBtnClick}) {
  const [backcol,setbackcol]=useState(0);
  const [num, setNum] = useState([1, 2, 3, 4, 5, 6]);
  // console.log("btn click ",btnClick," and img btn click",imgBtnClick);
  const selectedNumber=(e)=>{
    setNumberChoose(e.target.value);
    
    setBtnClick((prev)=>{
      if(prev==true){
        // console.log("don't double click it");
        return prev;
      }
      return !prev;
    });
    setbackcol(e.target.value)
    // console.log("number selected with value ",e.target.value);
  }

  return (
    <>
      {num.map((item, idx) => {
        return (
          <button className='btnClicked' onClick={selectedNumber} value={item}
            key={idx}
            // className='space-around'  // Add a class for styling if needed
            style={{
              border: '2px solid black',
              borderRadius: '30px',
              width: '5rem',
              height: '5rem',
              margin: '0.5rem',  // Add margin for space between buttons
               
              // backcol==item?""
              // backgroundColor:{changeBackgroundColor}
              backgroundColor:!btnClick && !imgBtnClick?"white":backcol==item?"#ffe6ff":"white"
            
            }}
          >
            {item}
          </button>
        );
      })}
    </>
  );
}

export default ShowNumber;
 
 