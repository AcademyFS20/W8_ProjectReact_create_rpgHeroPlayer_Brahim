import React from 'react'
import styled from 'styled-components'



function PlayerCard(props) {


    return (
        <Wrapper>
            <h4>{props.name}</h4>
            <img src={props.img} alt="player picture" />
            <p>{props.playerDescription}</p>
        </Wrapper>
    )
}


const Wrapper = styled.div`

box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width:377px;
height:233px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap:13px;


h4{
    color:var(--color-primary);
}
p{
    font-size:0.8rem;
    text-align:left;
    padding:13px;
}


`
export default PlayerCard
