import styled from "styled-components"

const Rules = () => {
  return (
    <RuleContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </div>
    </RuleContainer>
  )
}

export default Rules

const RuleContainer = styled.div`
    background-color: #FBF1F1;
    padding: 20px;
    max-width: 800px;
    margin: 40px auto 0 auto;

    h2{
        font-size: 24px;
    }
    .text{
        margin-top: 24px;
    }
`;

