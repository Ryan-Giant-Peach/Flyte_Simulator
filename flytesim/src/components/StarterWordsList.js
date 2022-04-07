import React from 'react'
import styled from "styled-components";
import StarterWord from './StarterWord';

const StarterWordsList = ({ starterWordsList, starterWordClicked }) => {


    const starterWordsButtons = starterWordsList.map((starterWord, index) => {
		return(
			<button type="submit" onClick={starterWordClicked} key={index} value={starterWord}>
					<StarterWord starterWord={starterWord} index={index}/>
			</button>
		)
	})

    // const starterWordsButtons = starterWordsList.map((word) => {
    //     return <button type="submit" onClick={starterWordClicked} value={word}>{word}</button>
    // })



    return (
        <>
            <StarterWordsStyle>
                <div>{starterWordsButtons}</div>
            </StarterWordsStyle>
        </>
    )
}

export default StarterWordsList

const StarterWordsStyle = styled.div`
border: none;
color: white;
padding: 10px 20px;
text-align: center;
text-decoration: none;
display: inline-block;
font-size: 16px;
margin: 4px 2px;
border-radius: 8px;`