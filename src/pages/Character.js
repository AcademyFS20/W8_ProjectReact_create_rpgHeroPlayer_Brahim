import React from 'react'
import banner from "../assets/pictures/banner.png";
import styled from 'styled-components';
import { Icon } from "../components/icons/arms";
import PlayerCard from '../components/PlayerCard';
import { GiHealthPotion, GiCrenulatedShield, GiSwordsPower } from "react-icons/gi"
import { BsPatchMinus, BsPatchPlus } from "react-icons/bs"
import { useState, useEffect } from 'react';
import { heroes } from '../utils/constants';


function Person() {
    const image = banner

    /** setting state for weapon */
    const [weapon, setWeapon] = useState("");

    /** Skills and availbale points state */
    const [points, setPoints] = useState(14);
    const [defense, setDefense] = useState(0);
    const [attack, setAttack] = useState(0);
    const [healing, setHealing] = useState(0);

    /** state to change style for the slected weapon */
    const [batteredAxeStyle, setBatteredAxeStyle] = useState("batteredAxe")
    const [claymoreStyle, setClaymoreStyle] = useState("claymore")
    const [englishLongBowStyle, setEnglishLongBowStyle] = useState("englishLongBow")
    const [flailStyle, setFlailStyle] = useState("flail")



    /** onClick functions to set the value of the skills  */
    const addDefense = () => {

        if (points < 15 && points >= 1) {
            setDefense(defense + 1);
            setPoints(points - 1);
        }
    }

    const reduceDefense = () => {

        if (defense > 0) {
            if (points < 14) {
                setDefense(defense - 1);
                setPoints(points + 1);
            }
        }

    }
    const addAttack = () => {
        if (points < 15 && points >= 1) {
            setAttack(attack + 1);
            setPoints(points - 1);
        }

    }

    const reduceAttack = () => {

        if (attack > 0) {
            if (points < 14) {
                setAttack(attack - 1);
                setPoints(points + 1);
            }
        }
    }

    const addHealing = () => {
        if (points < 15 && points >= 1) {
            setHealing(healing + 1);
            setPoints(points - 1);
        }
    }

    const reduceHealing = () => {

        if (healing > 0) {
            if (points < 14) {
                setHealing(healing - 1);
                setPoints(points + 1);
            }
        }
    }


    /** onclick functon for slecting a weapon */

    const selectBatteredAxe = () => {

            setBatteredAxeStyle("batteredAxeSlected");
            setClaymoreStyle("claymore");
            setEnglishLongBowStyle("englishLongBow");
            setFlailStyle("flail");
            setWeapon("BatteredAxe");
        
        console.log(weapon);
    }

    const selectClaymore = () => {

        
            setClaymoreStyle("claymoreSlected");
            setBatteredAxeStyle("batteredAxe");
            setEnglishLongBowStyle("englishLongBow");
            setFlailStyle("flail");
            setWeapon("Claymore");
        
        console.log(weapon);
    }

    const selectEnglishLongBow = () => {

            setEnglishLongBowStyle("englishLongBowSlected");
            setBatteredAxeStyle("batteredAxe");
            setClaymoreStyle("claymore");
            setFlailStyle("flail");
            setWeapon("EnglishLongBow");
        
        console.log(weapon)

    }

    const selectFlail = () => {

            setFlailStyle("flailSlected");
            setBatteredAxeStyle("batteredAxe");
            setClaymoreStyle("claymore");
            setEnglishLongBowStyle("englishLongBow");
            setWeapon("Flail");
          
        console.log(weapon);

    }

    useEffect(() => {
        if (weapon !== 'Flail' && weapon !== "EnglishLongBow" && weapon !== 'Claymore') {
            selectBatteredAxe();
        }

        else if (weapon !== 'Flail' && weapon !== "EnglishLongBow" && weapon !== 'BatteredAxe') {
            selectClaymore();
        }
        else if (weapon !== 'Flail' && weapon !== "BatteredAxe" && weapon !== 'Claymore') {
            selectEnglishLongBow();
        }
        else {
            selectFlail();
        }

        return (() => {
            setWeapon("");
        })



    }, [weapon])

    return (
        <Wrapper>
            <section className="intro" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `cover`
            }}>
                <div className="title">
                    <h2>Create your Character</h2>
                </div>

            </section>
            <section className="character">
                <div className="skillsAndWeapons">
                    <div className="skills">
                        <div>
                            <h3> skills</h3>

                        </div>
                        <div className="skillsInputs">
                            <h4>Points left -- {points} -- </h4>
                            <div className="skillInput">
                                <GiCrenulatedShield className="skillIcon" />
                                <p>Defense &nbsp; <strong> -- {defense} --</strong> </p>
                                <button className="plus" onClick={addDefense}><BsPatchPlus size={20} /></button>
                                <button className="minus" onClick={reduceDefense}><BsPatchMinus size={20} /></button>
                            </div>
                            <div className="skillInput">
                                <GiSwordsPower className="skillIcon" />
                                <p>Attack &nbsp; <strong> -- {attack} --</strong> </p>
                                <button className="plus" onClick={addAttack} ><BsPatchPlus size={20} /></button>
                                <button className="minus" onClick={reduceAttack}><BsPatchMinus size={20} /></button>
                            </div>
                            <div className="skillInput">
                                <GiHealthPotion className="skillIcon" />
                                <p>Healing &nbsp; <strong> -- {healing} --</strong> </p>
                                <button className="plus" onClick={addHealing}><BsPatchPlus size={20} /></button>
                                <button className="minus" onClick={reduceHealing}><BsPatchMinus size={20} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="pickWeapon">
                        <h3>Pick your weapon</h3>
                        <div className="weapons">
                            <button className={batteredAxeStyle} onClick={selectBatteredAxe}> <Icon name="BatteredAxe" /> </button>
                            <button className={claymoreStyle} onClick={selectClaymore}> <Icon name="Claymore" /></button>
                            <button className={englishLongBowStyle} onClick={selectEnglishLongBow}>  <Icon name="EnglishLongBow" /></button>
                            <button className={flailStyle} onClick={selectFlail}> <Icon name="Flail" /></button>
                        </div>

                    </div>
                </div>
                <div className="pickPlayer">
                    <h3>Pick your player</h3>
                    <div className="players">
                        {
                            heroes.map((item) => {

                                const { id, img, characterName, playerDescription } = item;
                                return (
                                    <>
                                        <button className="player">
                                            <PlayerCard img={img} name={characterName} playerDescription={playerDescription} />
                                        </button>
                                    </>

                                )

                            })

                        }

                    </div>
                </div>
                <div className="btns">
                    <button className="btn create">Create</button>
                    <button className="btn reset">Reset</button>
                </div>
                {/* <div className="hero">
                    <h3>Your Hero</h3>
                    <div className="chosenPlayer">
                        <PlayerCard />
                    </div>
                </div> */}
            </section>
        </Wrapper >
    )
}


const Wrapper = styled.main`
.intro{
    min-height: 377px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    }

    .title{
        color:white;
    }
    h2{
    
     
        font-size:3.4rem;
        background-color:rgba(0, 0, 50, 0.3);

    }

    h4{
        font-size:1.3rem;
        text-align:center;
    }

.character{

    min-height: 989px;
    display:flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items:center;
    
    .skillsAndWeapons{

        display:flex;
        align-items: flex-start;
        flex-direction: row;
        justify-content: space-around;

    }

    .skills{
        width:612px;
        display: flex;
        flex-direction: column;
        gap:34px;


        .skillsInputs{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            gap:13px;

        }

        .skillInput{
            display: flex;
            flex-direction: row;
            align-items:center;
            gap:21px;


            .skillIcon{
                color: var(--color-primary);
                width:34px;
                height:34px;
            }
        }
    }

    .pickWeapon{
        display:flex;
        flex-direction:column;
        gap:34px;


        .weapons{
            
            width:144px;
            display: grid; 
            grid-template-columns: 1fr 1fr; 
            grid-template-rows: 1fr 1fr; 
            gap: 5px 5px;
            
            .weapon:hover{
                opacity:1;
             }

             .batteredAxe{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
             }

             .batteredAxeSlected{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 3px solid var(--color-primary);  
                opacity:1;
             }

             .claymore{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
             }

             .claymoreSlected{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 3px solid var(--color-primary);  
                opacity:1;
             }

             .englishLongBow{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
             }

             .englishLongBowSlected{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 3px solid var(--color-primary);  
                opacity:1;
             }

             .flail{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
             }

             .flailSlected{
                width:102px;
                height:102px;
                background-color: transparent;  
                color:var(--color-primary);
                border: 3px solid var(--color-primary);  
                opacity:1;
             }
        }
    }
   
    .pickPlayer{
        width: 612px;
        display:flex;
        flex-direction:column;
        align-items:center;
        gap:34px;


        .players{
            display:flex;
            flex-direction: row;
            justify-content: space-evenly;



            .player{
                background-color: transparent;   
                border 1px dotted var(--color-primary);    
                
            }       
         }
    }
} 

.hero{
    width:612px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:34px;

    .chosenPlayer{
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
        transition: 0.3s;
        width:377px;
        height:233px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap:13px;
        border 1px dotted var(--color-primary);   
    }
}

input{
    width:55px;
}
button{
    cursor: pointer;
}
button:hover{
    transform: scale(1.1);
}

.plus{
    color: green;
    background-color: transparent;   
    border 1px dotted var(--color-primary);
    
}
.minus{
    color:red;
    background-color: transparent;   
    border 1px dotted var(--color-primary);
}

h3{
font-size:1.6rem;
}
.btns{

    display:flex;
    gap:233px;

    .btn{
     
        width:233px;
        height:55px;
        background-color: var(--color-primary);
        border:white;
        color:white;
        font-weight : bold ;
        font-size:1.5rem;
        font-family: var(--font-titles);
    }

    .create:hover{
        background-color:white;
        color: var(--color-primary);
        font-weight : bold ;
    }

    .reset:hover{
        background-color:white;
        color: rgba(255,0,40,0.9);
        font-weight : bold ;
    }
}
`
export default Person
