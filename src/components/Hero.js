import React from 'react'
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PlayerCard from './PlayerCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Hero() {
    const [loading, setLoading] = useState(false);
    const [dataRecieved, setdataRecieved] = useState([])

    useEffect(() => {
        setLoading(true);
        axios.get('https://adventum-76250-default-rtdb.firebaseio.com/persons.json')
            .then(response => {
                // console.log(response.data)
                const fetchedResults = [];

                for (let key in response.data) {
                    fetchedResults.push({
                        ...response.data[key],
                        id: key,
                    });
                }
                // var mainData = Object.values(response.data);
                // console.log(mainData)
                // setdataRecieved(mainData)
                console.log(fetchedResults)
                setdataRecieved(fetchedResults)

                setLoading(false);
            })
            .catch((error) => { console.log(error) })
    }, [])
    const deleteData = () => {

        setLoading(true);
        if (window.confirm("are you sure you want to delete all the characters")) {
            axios.delete('https://adventum-76250-default-rtdb.firebaseio.com/persons.json/', dataRecieved)
                .then(response => {

                    var dataClear = Object.values(response.data)
                    setdataRecieved(dataClear)
                    setLoading(false);

                })
                .catch((error) => { console.log(error) })
            toast.success("Your characters have been deleted!", { position: toast.POSITION.TOP_CENTER, theme: "colored" });
            setTimeout(() => { window.location.reload() }, 5000)
        } else {
            toast.info("Nothing commited", { position: toast.POSITION.TOP_CENTER, theme: "colored" });
        }
    }

    const deleteOne = (id) => {
        console.log(id);
        setLoading(true);
        if (window.confirm("are you sure you want to delete all the characters")) {
            axios.delete(`https://adventum-76250-default-rtdb.firebaseio.com/persons/${id}.json` )
                .then(response => {

                    })
                .catch((error) => { console.log(error) })
            toast.success("Your characters have been deleted!", { position: toast.POSITION.TOP_CENTER, theme: "colored" });
            setTimeout(() => { window.location.reload() }, 5000)
        } else {
            toast.info("Nothing commited", { position: toast.POSITION.TOP_CENTER, theme: "colored" });
        }

    }




    return (
        <Wrapper>
            <h2>- {dataRecieved.length} -  Heroes have been created</h2>
            <div className="charctersCreated">
                {
                    dataRecieved.map((item) => {

                        return (
                            <div className="heroesCreated" key ={item.id}>
                                <PlayerCard img={item.armedImg} name={item.characterName} />
                                <div className="HeroDescription">
                                    <p> Weapon:<span class="font-style">{item.weapon}</span> </p>
                                    <p> Skills:  Attack <span class="font-style">{item.attack}</span>,
                                        Defense <span class="font-style">{item.defense}</span>,
                                        Attack <span class="font-style">{item.healing}</span>  </p>
                                </div>
                                <button type="button" className="deleteAll" onClick={() => deleteOne(item.id)}>Delete hero</button>
                            </div>
                        )
                    })
                }
            </div>
            {loading && <ToastContainer />}
            <button type="button" className="deleteAll" onClick={deleteData}>Delete All</button>




        </Wrapper>
    )
}


const Wrapper = styled.div`


display:flex;
flex-direction:column;
align-items: center;
gap:34px;

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
    height:34px;
    width:100%;
    background-color:var(--color-primary);
    border: 1px dotted var(--color-primary); 
    color: white;
}

img{
    width:30%
}

.deleteAll:hover{
   color:var(--color-primary);
   background-color: white;

}
`
export default Hero
