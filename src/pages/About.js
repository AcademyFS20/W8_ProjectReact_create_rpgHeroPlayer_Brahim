import React from "react";
import styled from "styled-components";
import banner from "../assets/pictures/banner.png";
function About() {
    const image = banner;
    return (
        <Wrapper>
            <section
                className="intro"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                }}
            >
                <div className="title">
                    <h2>About us</h2>
                </div>
            </section>

            <section className="aboutText">
                <h3>
                    Adventum is the best gaming studio for all gamer.
                    Contrary to popular belief, Lorem Ipsum is not simply random text.
                </h3>
                <div className="para">
                    <p>
                        Adventum is the premiere source and community for both niche and
                        unique games across the globe. We provide fun daily content, memes,
                        and comprehensive coverage of the latest and greatest video games.
                        We are the new enthusiast gaming press, for the digital age.
                    </p>
                    <p>
                        We’re proud to be based out of Philadelphia – the birthplace of
                        American freedom, although we cover games from all over the world.
                        We are committed to bringing you original content, insightful
                        opinions and the full and accurate news without any fluff or
                        agendas.
                    </p>
                </div>
            </section>
            <section className="team">
                <h3>Meet our team</h3>
                <div className="teamMembers">
                    <div className="teamMember">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flive.staticflickr.com%2F6239%2F6257966368_c29427f560_z.jpg&f=1&nofb=1" />
                        <div>
                            <h4>DWade</h4>
                            <h4>Team leader</h4>
                        </div>
                        <p> We’re proud to be based out of Philadelphia – the birthplace of
                            American freedom, although we cover games from all over the world.
                            We are committed to bringing you original content, insightful
                            opinions and the full and accurate news without any fluff or
                            agendas.</p>
                    </div>
                    <div className="teamMember">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcoyote.imgix.net%2F168-michael-bierut%2Fmichael-bierut-hero-jake-chessum.jpg%3Fw%3D1200&f=1&nofb=1" />
                        <div>
                            <h4>Micheal beirut</h4>
                            <h4>Design</h4>
                        </div>
                        <p> We’re proud to be based out of Philadelphia – the birthplace of
                            American freedom, although we cover games from all over the world.
                            We are committed to bringing you original content, insightful
                            opinions and the full and accurate news without any fluff or
                            agendas.</p>
                    </div>
                    <div className="teamMember">
                        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pbs.org%2Fwnet%2Famericanmasters%2Ffiles%2F2019%2F03%2FSQUARE_IMAGE_Podcast_S03_E03_July.jpg&f=1&nofb=1" />
                        <div>
                            <h4>Miranda July</h4>
                            <h4>storyteller</h4>
                        </div>
                        <p> We’re proud to be based out of Philadelphia – the birthplace of
                            American freedom, although we cover games from all over the world.
                            We are committed to bringing you original content, insightful
                            opinions and the full and accurate news without any fluff or
                            agendas.</p>
                    </div>
                    <div className="teamMember">
                        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.genius.com%2Fc6a772ce9fa875e8efef7505cae0105c.1000x1000x1.jpg&f=1&nofb=1" />
                        <div>
                            <h4>Thome yorke</h4>
                            <h4>Music production</h4>
                        </div>
                        <p> We’re proud to be based out of Philadelphia – the birthplace of
                            American freedom, although we cover games from all over the world.
                            We are committed to bringing you original content, insightful
                            opinions and the full and accurate news without any fluff or
                            agendas.</p>
                    </div>


                </div>
            </section>
        </Wrapper>
    );
}

const Wrapper = styled.main`


.intro{
    min-height: 377px;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items:center;
}
 .aboutText{
     min-height:612px;
     width:989px;
     display: flex;
     flex-direction: column;
     justify-content: center; 
     align-items: center;; 
     gap:89px;
     margin: 0 0 0 144px;


     .para{
         display:flex;
         flex-direction:colmun;
         justify-content: center; 
         align-items: center; 
        gap: 89px;

     }     
 }

h2 {
    
    font-size:3.4rem;
    color:white;
    background-color:rgba(0, 0, 50, 0.3);
}

p{
    font-size:1rem;
    text-align:left;
}

h3{
    font-size:1.8rem;
}

img{
    width:144px;
    height:144px;
    border-radius: 50%;
    
}


.team{
    display:flex;
    flex-direction:column;
    justify-content: flex-start;
    align-items:flex-start;
    min-height:756px;
    width:989px;
    margin: 0 0 0 144px;
    gap:89px;
}


   .teamMembers{
    display:flex;
    justify-content: center; 
    align-items: center; 
   gap: 89px;
   width:989px;


   } 


   .teamMember{
       width:233px;
       display:flex;
       flex-direction:column;
      justify-content: center; 
      align-items: flex-start; 
    gap:21px;
        
   }
}


`;
export default About;
