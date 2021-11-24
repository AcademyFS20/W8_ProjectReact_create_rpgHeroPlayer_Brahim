import React from 'react';
import styled from 'styled-components';
import banner from "../assets/pictures/banner.png";
function About() {


    const image = banner
    return (
        <Wrapper>

            <section className="intro" style={{
                backgroundImage: `url(${image})`,
                backgroundSize: `cover`
            }}>
                <div className="title">
                    <h2>About us</h2>
                </div>
            </section>
            <section className="para">
                <h3>About</h3>
                <p>
                    Niche Gamer is the premiere source and community for both niche
                    and unique games across the globe. We provide fun daily content,
                    memes, and comprehensive coverage of the latest and greatest video games.
                    We are the new enthusiast gaming press, for the digital age.
                    We’re proud to be based out of Philadelphia – the birthplace of American freedom,
                    although we cover games from all over the world. We are committed to bringing
                    you original content, insightful opinions and the full and accurate news without
                    any fluff or agendas.
                </p>
            </section>


        </Wrapper>
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


h2{

    font-size:3.4rem;
    color:white;
    background-color:rgba(0, 0, 50, 0.3);
}
`
export default About
