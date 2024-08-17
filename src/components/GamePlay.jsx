import NumberSelector from "./NumberSelector"
import RoleDice from "./RoleDice"
import TotalScore from "./TotalScore"
import styled from "styled-components"
import { useState } from "react"
import { Button, Outline } from "../Styled/Button"
import Rules from "./Rules"

const GamePlay = () => {
  const [error, setError] = useState("")
  const [score, setScore] = useState(0)
  const [selectedNumber, setselectedNumber] = useState()
  const [currentDice, setCurrentDice] = useState(1)
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min,max) =>{
    return Math.floor(Math.random() * (max - min) + min);
}

const roleDice = () =>{
    if(!selectedNumber){
      setError("You have not selected any number")
      return 
    }

    let random = generateRandomNumber(1,7);
    setCurrentDice((prev)=>random)

    if(selectedNumber===random){
      setScore((prev)=>prev+random)
    }else{
      setScore((prev)=>prev-random)
    }

    setselectedNumber(undefined)
}

  const resetScore = () => {
    setScore(0)
  }
  

  return (
    <main>
      <MainConatiner>
        <TotalScore score={score}/>
        <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} setselectedNumber={setselectedNumber}/>
      </MainConatiner>
      <RoleDice currentDice={currentDice} roleDice={roleDice}/>
      <Buttonsclass>
      <div className="btns">
        <Outline onClick={resetScore}>Reset</Outline>
        <Button onClick={()=>setShowRules(prev=>!prev)}>{showRules?"Hide":"Show"} Rules</Button>
      </div>
      </Buttonsclass>
      {showRules && <Rules/>}
    </main>
  )
}

export default GamePlay

const MainConatiner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-top: 70px;
`;

const Buttonsclass = styled.div`
    margin-top: 40px;
  .btns{
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 220px;
  margin: 0 auto;
  gap: 10px;
  }
`;