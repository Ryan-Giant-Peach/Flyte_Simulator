import React from 'react'
import styled from "styled-components";

const StarterWords = ({ starterWordsList, starterWordClicked }) => {

    const starterWordsButtons = starterWordsList.map((word) => {
        return <button type="submit" onClick={starterWordClicked} value={word}>{word}</button>
    })



    return (
        <>
            <StarterWordsStyle>
                <div>{starterWordsButtons}</div>
            </StarterWordsStyle>
        </>
    )
}

export default StarterWords

const StarterWordsStyle = styled.div`
background-color: pink;

padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
border-radius: 8px;`