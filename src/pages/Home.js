import React from "react";
import styled from "styled-components";
import heropic1 from "../assets/pictures/heropic1.jpg";
import ArmsCard from "../components/ArmsCard";
import Carousel from "../components/Carousel";
import IconReact from "../components/icons/IconReact";
import { FaEnvelope } from "react-icons/fa"

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
                    <button type="button" className="btn">
                        Discover
                    </button>
                </div>
            </section>
            <section className="caro">
                <h2>Our costum game characters</h2>
                <div>
                    <Carousel className="carousel" />
                </div>
            </section>
            <section className="arms">
                <div className="armsText">
                    <h2>Pick your sword</h2>
                    <div cl>
                        <p>
                            The weapons are undoubtedly some of the most iconic aspects of
                            ADVENTUM
                        </p>
                        <p>
                            with the sheer arsenal of blades, axes, bows, and everything else<br />
                            along the same lines being iconic for all the right reasons.
                        </p>
                    </div>
                </div>
                <div className="armsCards">
                    <ArmsCard />
                    <ArmsCard />
                    <ArmsCard />
                </div>
            </section>
            <section className="emailForm">
                <form action="" class="newsletter">
                    <h2>Connect with us for gaming updates</h2>
                    <div class="newsletter-box">
                        <FaEnvelope size={40} />
                        <input class="emailbox" type="email" name="" value="" placeholder="Enter your email id" />
                        <button type="button" name="button">Subscribe</button>
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
        background-color: rgba(255, 227, 46, 1);
        border:white;
        color:white;
        font-weight : bold ;
        font-size:1.5rem;
        font-family: var(--font-titles);

    }
    
    .btn:hover{
        background-color:white;
        color: rgba(255, 227, 46, 1);
        font-weight : bold ;

    
    }
    
    h1{
        font-weight: bolder;
        font-size: 3.4rem;
    }
}

.caro{
min-height:377px;
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
    justify-content: center;; 
    min-height:612px;
    gap:34px;
    background-color: rgba(255, 227, 46, 0.4);

    .armsText{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center; 
        gap:144px; 
    }
    .armsCards{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap:21px;    
        margin-top:-155px:
    }   
}
.emailForm{
    min-height:377px;
    display:flex;
    justify-content:center;
    align-items:center;

  
}

.newsletter {
    background-color: #fff;
    width: 1222px;
    height:277px;
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
    background-color: rgba(255, 227, 46, 1);
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
    width: 612px;
    height: 38px;
    padding: 5px 10px;
    box-sizing: border-box;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
}


`;

export default Home;
