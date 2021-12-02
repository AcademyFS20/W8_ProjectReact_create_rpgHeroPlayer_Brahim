import React from "react";
import styled from "styled-components";
import heropic1 from "../assets/pictures/heropic1.jpg";
import ArmsCard from "../components/ArmsCard";
import Carousel from "../components/Carousel";
import { Icon } from "../components/icons/reactIcons";
import { Link } from "react-router-dom";


function Home() {
    const image = heropic1;
    return (
        <Wrapper>
            <section
                className="hero"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                }}
            >
                <div className="heroElements">
                    <div className="heroText">
                        <h1>Discover More</h1>
                        <p>We have released new characters, check it out</p>
                    </div>
                    <Link to="/character">
                        <button type="button" className="btn">

                            Discover
                        </button></Link>
                </div>
            </section>
            <section className="caro">
                <h2>Our costumed game characters</h2>
                <div>
                    <Carousel className="carousel" />
                </div>
            </section>
            <section className="arms">
                <div className="armsText">
                    <h2>Pick your weapon</h2>
                    <div cl>
                        <p>
                            The weapons are undoubtedly some of the most iconic aspects of
                            ADVENTUM

                            with the sheer arsenal of blades, axes, bows, and everything else
                            along the same lines being iconic for all the right reasons.
                        </p>
                    </div>
                </div>
                <div className="armsCards">
                    <ArmsCard
                        iconName="BatteredAxe"
                        title="Battleaxe"
                        paragraph="Designed to cut legs and arms, the battleaxe has a narrow, 
                        slicing blade resulting in deep and terrible wounds.
                         they were not impervious to the effect of a well-placed axe stroke.
                          A battleaxe could crush through armor and easily cut flesh."
                    />
                    <ArmsCard
                        iconName="Claymore"
                        title="Claymore"
                        paragraph="The two-handed, used by the Highlanders of Scotland,
                         was a large sword in the Medieval period used in the constant clan warfare
                          and border fights with the English from circa 1500 to 1700.
                          e used for their slashing and crushing ability as well as their easiness to make/fashion."
                    />
                    <ArmsCard
                        iconName="EnglishLongBow"
                        title="English Longbow"
                        paragraph="The English longbow, also called the Welsh longbow, was a powerful type
                         of medieval longbow (a tall bow for archery) about 6 ft 6 in (2.0 m) long used by the English,
                         Scots and Welsh, both for hunting and as a weapon in medieval warfare."
                    />
                    <ArmsCard
                        iconName="Flail"
                        title="Flail"
                        paragraph="The flail is a medieval weapon made of one (or more) weights attached to a handle with a hinge or chain.
                         There is some disagreement over the names for this weapon; commonly used in Europe from the 13th century to the 15th century."
                    />
                </div>
            </section>
            <section className="emailForm">
                <form action="" class="newsletter">
                    <h2 className="newsletterMsg">Connect with us for gaming updates</h2>
                    <div class="newsletter-box">
                        <Icon name="Envelope"  />
                        <input
                            class="emailbox"
                            type="email"
                            name=""
                            value=""
                            placeholder="Enter your email"
                        />
                        <button type="button" name="button">
                            Subscribe
                        </button>
                    </div>
                </form>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`

display:flex
flex-direction: column;
align-items:center;
justify-content:center;


.hero{
    width:100%;
    min-height: 612px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding:21px;



    .heroElements{
    
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
        gap:34px;
    }
    
    .heroText{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap:3px;
        color:white;
        
    }
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
    
    .btn:hover{
        background-color:white;
        color: var(--color-primary);
        font-weight : bold ;

    
    }
    
    h1{
        font-weight: bolder;
        font-size: 3.4rem;
    }
}

.caro {
    min-height:466px;
    max-height:612px;
    text-align:center;
    margin:55px;
    display:grid;
}


h2{
    margin:55px;
}


.arms{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly; 
    min-height:701px;
    gap:34px;
    background-color: var(--color-primary-4);

    .armsText{
        display: flex;
        align-items: center;
        justify-content: space-evenly; 
        width:100%;
        
    }
    .armsCards{
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap:21px;    
      
    }   
}
.emailForm{
    min-height:466px;
    display:flex;
    justify-content:center;
    align-items:center;

  
}

.newsletter {
    background-color: #fff;
    width: 90%;
    padding: 50px 30px;
    box-sizing: border-box;
    display: table;
    border: 1px solid #ddd;
    border-radius: 8px;
}

.newsletter-box{
    display:flex;
    justify-content: center;
    align-items: center;
    gap:34px;
}
.newsletter button {
    width: 233px;
    background-color: var(--color-primary);
    border: none;
    padding: 5px 10px;
    height: 38px;
    border-radius: 4px;
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    float: right;
}
.newsletter input[type="email"] {
    width: 80%;
    height: 38px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}


`;

export default Home;
