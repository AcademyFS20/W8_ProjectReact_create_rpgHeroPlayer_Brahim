import React from 'react'
import banner from "../assets/pictures/banner.png";
import styled from 'styled-components';
import { Icon } from "../components/icons/reactIcons";
import PlayerCard from '../components/PlayerCard';
import { useState, useEffect } from 'react';
import { heroes } from '../utils/constants';
import axios from 'axios';
import Hero from '../components/Hero';
import { avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, avatar7, avatar8, avatar9, avatar10, avatar11, avatar12 } from "../assets/pictures/characters_armed"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Person() {
    const image = banner
    const [character1, character2, character3] = heroes
    const img1 = avatar1
    const img2 = avatar2
    const img3 = avatar3
    const img4 = avatar4
    const img5 = avatar5
    const img6 = avatar6
    const img7 = avatar7
    const img8 = avatar8
    const img9 = avatar9
    const img10 = avatar10
    const img11 = avatar11
    const img12 = avatar12

    console.log(img8)


    /** setting states to handle sending data to firebase */
    const [loading, setLoading] = useState(false);
    const [succesMessage, setSuccesMessage] = useState(false)


    /** setting state for characters */
    // let position = 0;
    const [character, setCharacter] = useState(character1)
    console.log(character)

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

    /** state to change style of the slected player */
    const [debeauvoirStyle, setDebeauvoirStyle] = useState("debeauvoirStyleSelected")
    const [sartreStyle, setSartreStyle] = useState("sartreCardStyle")
    const [camusStyle, setCamusStyle] = useState("camusCardStyle")


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

        // console.log(weapon);
    }

    const selectClaymore = () => {


        setClaymoreStyle("claymoreSlected");
        setBatteredAxeStyle("batteredAxe");
        setEnglishLongBowStyle("englishLongBow");
        setFlailStyle("flail");
        setWeapon("Claymore");

    }

    const selectEnglishLongBow = () => {

        setEnglishLongBowStyle("englishLongBowSlected");
        setBatteredAxeStyle("batteredAxe");
        setClaymoreStyle("claymore");
        setFlailStyle("flail");


        setWeapon("EnglishLongBow");

        // console.log(weapon)

    }

    const selectFlail = () => {

        setFlailStyle("flailSlected");
        setBatteredAxeStyle("batteredAxe");
        setClaymoreStyle("claymore");
        setEnglishLongBowStyle("englishLongBow");
        setWeapon("Flail");

        // console.log(weapon);

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


    const selectDebeauvoir = () => {
        setCharacter(character1);
        setDebeauvoirStyle("debeauvoirStyleSelected")
        setSartreStyle("sartreCardStyle")
        setCamusStyle("camusCardStyle")

    }

    const selectSartre = () => {
        setCharacter(character2);
        setSartreStyle("sartreStyleSelected")
        setDebeauvoirStyle("debeauvoirCardStyle")
        setCamusStyle("camusCardStyle")


    }

    const selectCamus = () => {
        setCharacter(character3);
        setCamusStyle("camusStyleSelected")
        setDebeauvoirStyle("debeauvoirCardStyle")
        setSartreStyle("sartreCardStyle")


    }

     /** Create  */
    const create = () => {

        /** creating armed characters based on their names  and the weapon selected */

        let imagePrint = "";

        //debouvoire
        if (character.characterName === "de Beauvoir" && weapon === "BatteredAxe") {
            imagePrint = img7
        }
        else if (character.characterName === "de Beauvoir" && weapon === "Claymore") {
            imagePrint = img8
        }
        else if (character.characterName === "de Beauvoir" && weapon === "EnglishLongBow") {
            imagePrint = img6
        }
        else if (character.characterName === "de Beauvoir" && weapon === "Flail") {
            imagePrint = img5
        }

        // sartre
        if (character.characterName === "Sartre" && weapon === "BatteredAxe") {
            imagePrint = img3;

        }
        else if (character.characterName === "Sartre" && weapon === "Claymore") {
            imagePrint = img2
        }
        else if (character.characterName === "Sartre" && weapon === "EnglishLongBow") {
            imagePrint = img1
        }
        else if (character.characterName === "Sartre" && weapon === "Flail") {
            imagePrint = img4
        }

        //camus
        else if (character.characterName === "Camus" && weapon === "BatteredAxe") {
            imagePrint = img10
        }
        else if (character.characterName === "Camus" && weapon === "Claymore") {
            imagePrint = img12
        }
        else if (character.characterName === "Camus" && weapon === "EnglishLongBow") {
            imagePrint = img9
        }
        else if (character.characterName === "Camus" && weapon === "Flail") {
            imagePrint = img11
        }




        const hero = { characterName: character.characterName, img: character.img, weapon: weapon, defense: defense, attack: attack, healing: healing, armedImg: imagePrint }
        setLoading(true);
        axios.post('https://aventum-test2-default-rtdb.europe-west1.firebasedatabase.app/rpgplayers.json', hero)
            .then(response => {
                if (response.status !== 200) {


                    setLoading(true)
                    setSuccesMessage(false);
                }
                setLoading(false)
                setSuccesMessage(true)
            })
            .catch((error) => { console.log(error) })

        reset()
        toast.success("Your character have been created!", { position: toast.POSITION.TOP_CENTER, theme: "colored" });
        //setTimeout(() => { window.location.reload() }, 5000)
    }


    /** reset */

    const reset = () => {

        setWeapon("");
        setDefense(0);
        setAttack(0);
        setHealing(0);
        setPoints(14);
        setCharacter(character1);
        setDebeauvoirStyle("debeauvoirStyleSelected");
        setSartreStyle("sartreCardStyle");
        setCamusStyle("camusCardStyle");
        setSuccesMessage(false);
    }

    return (
        <Wrapper>


            <section className="intro" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `cover`
            }}>
                <div className="characterTitle">
                    <h2 className="pageTitle">Create your Character</h2>
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
                                <Icon name="DefenseSkillIcon" />
                                <p>Defense &nbsp; <strong> -- {defense} --</strong> </p>
                                <div className="buttons">
                                    <button className="plus" onClick={addDefense}><Icon name="BsPatchPlus" /></button>
                                    <button className="minus" onClick={reduceDefense}><Icon name="BsPatchMinus" /></button>
                                </div>
                            </div>
                            <div className="skillInput">
                                <Icon name="AttackSkillIcon" />
                                <p>Attack &nbsp; <strong> -- {attack} --</strong> </p>
                                <div className="buttons">
                                    <button className="plus" onClick={addAttack} ><Icon name="BsPatchPlus" /></button>
                                    <button className="minus" onClick={reduceAttack}><Icon name="BsPatchMinus" /></button>
                                </div>
                            </div>
                            <div className="skillInput">
                                <Icon name="HealthPotion" />
                                <p>Healing &nbsp; <strong> -- {healing} --</strong> </p>
                                <div className="buttons">
                                    <button className="plus" onClick={addHealing}><Icon name="BsPatchPlus" /></button>
                                    <button className="minus" onClick={reduceHealing}><Icon name="BsPatchMinus" /></button>
                                </div>
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
                    <h3> Pick your player</h3>
                    {
                        succesMessage && <ToastContainer />}
                    <div className="players">
                        <button onClick={selectDebeauvoir} className={debeauvoirStyle}><PlayerCard name={character1.characterName} img={character1.img} playerDescription={character1.playerDescription} /></button>
                        <button onClick={selectSartre} className={sartreStyle}><PlayerCard name={character2.characterName} img={character2.img} playerDescription={character2.playerDescription} /></button>
                        <button onClick={selectCamus} className={camusStyle}><PlayerCard name={character3.characterName} img={character3.img} playerDescription={character3.playerDescription} /></button>
                    </div>
                </div>

                <section className="btns">
                    <button className="btn create" onClick={create}>Create your hero(ine)</button>
                    <button className="btn reset" onClick={reset}>Reset</button>
                </section>
            </section>
            <section>
                <div className="hero">
                    <Hero />
                </div>
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

    .characterTitle{
        color:white;
    }
    .pageTitle{
    
     
        font-size:3.4rem;
        background-color:rgba(0, 0, 50, 0.3);

    }

    h4{
        font-size:1.3rem;
        text-align:center;
    }

.character{

    min-height :845px;
    display:flex;
    flex-direction:column;
    justify-content: space-around;
    align-items:center;
    gap:34px;
    
    .skillsAndWeapons{

        display:flex;
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
        jusitify-content: space-evenly;
        gap:34px;
        


        .players{
            display:flex;
            flex-direction: row;
            justify-content: space-evenly;
            align-items:center;
            gap:34px;
            

            .debeauvoirCardStyle{
                background-color: transparent;  
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
            }
            .debeauvoirStyleSelected{
                background-color: transparent;  
                border: 8px solid var(--color-primary);    
                opacity: 1;
            }
            .sartreCardStyle{
                background-color: transparent;  
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
            }
            .sartreStyleSelected{
                background-color: transparent;  
                border: 8px solid var(--color-primary);    
                opacity: 1;
            }
            .camusCardStyle{
                background-color: transparent;  
                border: 1px dotted var(--color-primary);    
                opacity: 0.6;
            }
            .camusStyleSelected{
                background-color: transparent;  
                border: 8px solid var(--color-primary);    
                opacity: 1;
            }

            .btnPlayer{
                background-color: transparent;   
                border 1px dotted var(--color-primary); 
            }
        }       
         
    }
} 

.hero{

   padding :34px;

}


button{
    cursor: pointer;
}


.plus{
    color: green;
    background-color: transparent;   
    border 0.3px dotted var(--color-primary);
    
}
.minus{
    color:red;
    background-color: transparent;   
    border 0.3px dotted var(--color-primary);
}

h3{
font-size:1.6rem;
}


.btns{

    display:flex;
    flex-direction:column;
    gap:21px;
    width:82%;
    margin-top:-21px;

    

    .btn{
     
        width:100%;
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


img{
    width:30%;
}

.alertMessage{

    display:flex;
    flex-direction: column;
    gap:13px;
}
`
export default Person
