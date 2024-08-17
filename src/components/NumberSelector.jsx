import styled from "styled-components"

const NumberSelctor = ({error,setError,selectedNumber, setselectedNumber}) => {

  const arrNum = [1,2,3,4,5,6]

  const numberSelectorHandler = (value) =>{
    setselectedNumber(value);
    setError("");
  }

  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNum.map((value,i)=> (<Box 
        $isSelected={value==selectedNumber}
        key={i} onClick={()=> numberSelectorHandler(value)}>{value}</Box>)
        )}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelctor

const NumberContainer = styled.div`
  .flex{
    display: flex;
    gap: 24px;
  }
  p{
    font-size: 24px;
    font-weight: 700;
  }

  .error{
    color: red;
  }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 34px;
  font-weight: 700;

  background-color: ${(props)=>props.$isSelected?"black":"white"};
  color: ${(props)=>props.$isSelected?"white":"black"};
`;
