import React, { useEffect, useState } from 'react'
import ShowPoint from './ShowPoint'
import ShowNumber from "./ShowNumber"
import GamePlay from './GamePlay';
function MainGame() {
    let [point,setPoint]=useState(0);
    const [randomNo,setRandomNo]=useState(-1);
    const [numberChoose,setNumberChoose]=useState(-1);
    const [btnClick,setBtnClick]=useState(false);
    const [imgBtnClick,setimgBtnClick]=useState(false);

    const checkNums=()=>{
       if(btnClick==true&&imgBtnClick==true && randomNo==numberChoose){
        // point+=numberChoose;
        let incPoint=point;
        incPoint+=randomNo;
         setPoint(incPoint);
         setBtnClick(false)
       setimgBtnClick(false)     
       setNumberChoose(-1);
       setRandomNo(-1);
      }else if(btnClick==true&&imgBtnClick==true){
         setPoint(point-numberChoose);
         setBtnClick(false)
       setimgBtnClick(false)
       setNumberChoose(-1);
       setRandomNo(-1);
      }else{
        // console.log("entering here");
      }
      //  console.log("point=",point, "numbtnclick=",btnClick," imgbtnclick=",imgBtnClick , "point=",point," and corrent random=",randomNo," and choosen= ",numberChoose);
       
    }
    useEffect(()=>{
      checkNums();
    },[btnClick,imgBtnClick])

  return (
    <>
      <div style={{marginLeft:"5vw",marginRight:"5vw"}} className="row d-flex justify-content-around mt-5 mb-5 ">
       <div className="col-2">
        {/* total point  */}
       <ShowPoint  point={point} />
       </div>
       <div className="col-6"></div>
       <div className="col-4">   
       {/* the number which the user has chosen      */}
       <ShowNumber imgBtnClick={imgBtnClick} btnClick={btnClick} setBtnClick={setBtnClick} numberChoose={numberChoose} setNumberChoose={setNumberChoose} />
 
       </div>
       <div className="">
        {/* dice and rules are present  */}
       <GamePlay setPoint={setPoint} setimgBtnClick={setimgBtnClick} numberChoose={numberChoose}  setRandomNo={setRandomNo} />
      
       </div>
       
        
        </div>  
    </>
  )
}

export default MainGame
// chaging sequence 