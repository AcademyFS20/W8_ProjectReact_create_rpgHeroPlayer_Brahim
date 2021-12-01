import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import { GiConsoleController } from 'react-icons/gi';



function Hero() {



    const [dataRecieved, setdataRecieved] = useState([])

    useEffect(() => {

        axios.get('https://adventum-76250-default-rtdb.firebaseio.com/persons.json')
            .then(response => {
                var mainData = Object.values(response.data);
                // console.log(mainData)
                setdataRecieved(mainData)
            })
            .catch((error) => { console.log(error) })
    }, [])

    const deleteData = () => {


        axios.delete('https://adventum-76250-default-rtdb.firebaseio.com/persons.json/', dataRecieved)
            .then(response => {

                var editedData = Object.values(response.data)
                setdataRecieved(editedData)
            })
            .catch((error) => { console.log(error) })
    }

    return (
        <Wrapper>
            <div className="charctersCreated">
                {
                    dataRecieved.map((item) => {

                        return (
                            <div className="heroesCreated">
                                <PlayerCard img={item.armedImg} name={item.characterName} />
                                <div className="HeroDescription">
                                    <p> Weapon:<span class="font-style">{item.weapon}</span> </p>
                                    <p> Skills:  Attack <span class="font-style">{item.attack}</span>,
                                        Defense <span class="font-style">{item.defense}</span>,
                                        Attack <span class="font-style">{item.healing}</span>  </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <button type="button" className="deleteAll" onClick={deleteData}>Delete All</button>


        </Wrapper>
    )
}


const Wrapper = styled.div`


display:flex;
flex-direction:column;
align-items: center;
gap:89px;

.charctersCreated{
display: grid; 
grid-template-columns: 1fr 1fr 1fr; 
gap: 34px 21px;

}


.heroesCreated{
 display:flex;
 flex-direction: column;
 justify-content: center;
 gap:21px;

  .HeroDescription{
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap:8px;
    font-size: 1.2rem;
  }

}

.font-style{
    font-weight: bolder;
    color: orange;
}

.deleteAll{

height:89px;
width:233px;
background-color:var(--color-primary);
border 0.3px dotted var(--color-primary);

}

img{
    width:30%
}
`
export default Hero
