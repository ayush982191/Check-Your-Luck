import React, { useState } from 'react';
import d1 from "../assets/images/d1.jpeg";
import d2 from "../assets/images/d2.jpeg";
import d3 from "../assets/images/d3.jpeg";
import d4 from "../assets/images/d4.jpeg";
import d5 from "../assets/images/d5.jpeg";
import d6 from "../assets/images/d6.jpeg";

import ShowRules from './ShowRules';

function GamePlay({setPoint, numberChoose ,setRandomNo,setimgBtnClick}) {
  // let rno=1;
  const [rno,setrno]=useState(1);
    const [onClickShowRules,setonClickShowRules]=useState(false);
    const arr=[d1,d2,d3,d4,d5,d6];
    const showRules=()=>{
        // console.log("Enter showRules");
        setonClickShowRules(!onClickShowRules);
    }
    const findRandomNo=()=>{
      // const randomNo=Math.floor(Math.random()*7);
      
      const randomNo= Math.floor(Math.random() * 6) + 1;
      // rno=randomNo;
      setrno(randomNo);
      // console.log("image clicked with value",randomNo, " and chose no=",numberChoose);
      setRandomNo(randomNo);
      setimgBtnClick((prev)=>!prev)


    }
    const resetPoint=()=>{
      setPoint(0); 
    }
  return (
    <>
    <div className={onClickShowRules?"d-flex justify-content-around":""}>
    <div className="d-flex flex-column align-items-center justify-content-center">
    {/* <img onClick={findRandomNo} className='mb-5' style={{ width: "7rem", height: "7rem" }} src={d2} alt="error" /> */}
    <img onClick={findRandomNo} className='mb-5' style={{ width: "7rem", height: "7rem" }} src={arr.find((ele,idx)=>idx==rno-1)} alt="error" />
    

      
      <h3 className='mt-4 mb-4'>Click on the dice to roll</h3>
      <button onClick={resetPoint} style={{ width: "22rem", height: "5rem", borderRadius: "13px", backgroundColor: "white" }} className='mb-5'>Reset Game</button>
      <button onClick={showRules}  style={{ width: "22rem", height: "5rem", borderRadius: "13px", backgroundColor: "black", color: "white" }}>{!onClickShowRules ? "Show Rules":"Hide Rules"}</button>
      
    </div>
    <div className="">
    {onClickShowRules?<ShowRules/>:""}
    </div>
    </div>

    </>
  );
}

export default GamePlay;
// remember