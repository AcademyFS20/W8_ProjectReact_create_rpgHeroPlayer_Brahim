import React from 'react'
import banner from "../assets/pictures/banner.png";
import styled from 'styled-components';


function FAQ() {

  const image = banner

  return (
    <Wrapper>
      <section className="intro" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `cover`
      }}>
        <div className="title">
          <h2>Frequently Asked Questions</h2>
        </div>
      </section>
      <section></section>
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
export default FAQ
