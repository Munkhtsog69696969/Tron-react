import style from './App.module.css';
import {useEffect, useRef, useState} from "react"
import {useInterval} from "use-interval"

function App() {
  //maps and units
  const map=useRef();
  const [mapWidth,setMapWidth]=useState(null);
  const [scale,setScale]=useState(10);
  const [smallestUnit,setSmallestUnit]=useState(null);
  //time
  const [time,setTime]=useState(500);
  //players
  const [player1,setPlayer1]=useState([{top: 0, left: 0}]);
  const [player2,setPlayer2]=useState([{top: 0, left: 0}]);
  const [direction1,setDirection1]=useState("right");
  const [direction2,setDirection2]=useState("left");

  useEffect(()=>{
    setMapWidth(map.current.offsetWidth);
  },[]);

  useEffect(()=>{
    setSmallestUnit(mapWidth/scale);
  },[mapWidth]);

  useEffect(()=>{
    const newPlayer2 = player2.map((player2El,i)=> {
      if(i==0){
       return {top:0 , left:mapWidth-smallestUnit}
      }
     });
     setPlayer2(newPlayer2);
  },[smallestUnit]);

  function player1Function(){
    if(direction1=="right" && player1[0].left+2*smallestUnit<=mapWidth){
      const newPlayer1 = player1.map((player1El,i)=> {
        if(i==0){
         return {top:0 , left:player1El.left+smallestUnit}
        }
      });
      setPlayer1(newPlayer1);
    }
    // if(direction1=="right" && player1[0].left+2*smallestUnit<=mapWidth){
    //   const newPlayer1 = player1.map((player1El,i)=> {
    //     if(i==0){
    //      return {top:0 , left:player1El.left+smallestUnit}
    //     }
    //   });
    //   setPlayer1(newPlayer1);
    // }
    // if(direction1=="right" && player1[0].left+2*smallestUnit<=mapWidth){
    //   const newPlayer1 = player1.map((player1El,i)=> {
    //     if(i==0){
    //      return {top:0 , left:player1El.left+smallestUnit}
    //     }
    //   });
    //   setPlayer1(newPlayer1);
    // }
    // if(direction1=="right" && player1[0].left+2*smallestUnit<=mapWidth){
    //   const newPlayer1 = player1.map((player1El,i)=> {
    //     if(i==0){
    //      return {top:0 , left:player1El.left+smallestUnit}
    //     }
    //   });
    //   setPlayer1(newPlayer1);
    // }
  }

  window.addEventListener("keydown",(e)=>{
    // switch(e.key){
    //   case:""
    // }
  })

  useInterval(()=>{
    player1Function()
  },[time])
  
  
  return (
    <div className={style.screen}>
      <div ref={map} className={style.map}>
        {
          player1?.map((player1El,i)=>{
            return(
              <div
                style={{
                  position:"absolute",
                  width:smallestUnit,
                  height:smallestUnit,
                  backgroundColor:"blue",
                  top:player1El.top,
                  left:player1El.left
                }}
                key={i}
              >
              </div>
            )
          })
        }
        {
          player2?.map((player2El,i)=>{
            return(
              <div
                style={{
                  position:"absolute",
                  width:smallestUnit,
                  height:smallestUnit,
                  backgroundColor:"red",
                  top:player2El.top,
                  left:player2El.left
                }}
                key={i}
              >
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
