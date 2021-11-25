import React from 'react'
import banner from "../assets/pictures/banner.png";
import styled from 'styled-components';
import { useEffect, useState } from "react";
import Faq from "react-faq-component";

const data = {
  rows: [
    {
      title: "How to create a character?",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
            ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
            In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
            Fusce sed commodo purus, at tempus turpis.`,
    },
    {
      title: "How to export a character ?",
      content:
        "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    },
    {
      title: "How does it cost ?",
      content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
          Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
          Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
          Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    },
    {
      title: "How many weapons I can have?",
      content: <p>tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
        Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim</p>,
    },
  ],
};

const styles = {
  bgColor: 'white',
  rowTitleColor: "var(--color-primary)",
  rowContentColor: 'black',
  arrowColor: "var(--color-primary)",
  rowTitleTextSize: "1.8rem",
  rowContentTextSize: "1.3rem",
  rowContentPaddingTop: "5px",
  rowContentPaddingBottom: "5px",

};

const config = {
  animate: true,
  arrowIcon: "V",
  tabFocus: true
};


function FAQ() {

  const image = banner

  return (
    <Wrapper>
      <section className="intro" style={{
        backgroundImage: `url(${image})`,
        backgroundSize: `cover`
      }}>
        <div className="faqTitle">
          <h2>Frequently Asked Questions</h2>
        </div>
      </section>
      <section className="faq">
        <div className="questions">
          <Faq
            data={data}
            styles={styles}
            config={config}
          />
        </div>

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
.faq{
  min-height:612px;
  display: flex;
  justify-content:center;
  align-itemq:center;
}

.questions{
  width:989px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
}

.styles_faq-row-wrapper__3vA1D .styles_row-body__1NvUo .styles_faq-row__2YF3c .styles_row-title__1YiiY {
 
  font-weight: bolder;
}
`
export default FAQ
