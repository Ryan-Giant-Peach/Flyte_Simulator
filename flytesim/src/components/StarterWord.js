import React from 'react';
import styled from "styled-components";


const StarterWord = ({starterWord, starterWordClicked, index}) => {


    return (
      <>
      <ButtonStyle>
      <button type="submit" onClick={starterWordClicked} value={index}>
      {starterWord.word}
      </button>
      </ButtonStyle>
      
      </>
    )
  }
  
  export default StarterWord;

  // const ButtonStyle = styled.div`
  // button {
  //   background-color: #4CAF50;
  //   border: none;
  //   color: white;
  //   padding: 10px 20px;
  //   text-align: center;
  //   text-decoration: none;
  //   display: inline-block;
  //   font-size: 16px;
  //   margin: 4px 2px;
  //   cursor: pointer;
  //   border-radius: 8px;
  // }`

  const ButtonStyle = styled.div`
background-color: pink;

padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
border-radius: 8px;`