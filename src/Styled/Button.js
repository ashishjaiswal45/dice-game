import styled from "styled-components";

export const Button = styled.button`
    min-width: 220px;
    padding: 10px 18px;
    height: 44px;
    background: #000000;
    border-radius: 5px;
    color: white;
    border: none;
    font-size: 16px;
    border: 1px solid transparent;
    transition: 0.4s background ease-in;
    cursor: pointer;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: #000000;
        transition: 0.2s background ease-in;
    }
`;



export const Outline = styled(Button)`
    background-color: white;
    border: 1px solid black;
    color: #000000;

    &:hover{
        background: #000000;
        color: white;
        border: 1px solid transparent;
    }
`;