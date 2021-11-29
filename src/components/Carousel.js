import React from "react";
import ReactDOM from "react-dom";
import Flickity from "react-flickity-component";
import styled from "styled-components";
import { heroes } from "../utils/constants";
import PlayerCard from "./PlayerCard";


function Carousel() {


  const flickityOptions = {
    wrapAround: true,
    freeScroll: true,
    draggable: true,
    selectedAttraction: 0.01,
    friction: 0.8,
    fade: true,
    initialIndex: 1

  }

  return (
    <Wrapper>
      <Flickity
        options={flickityOptions}
      >
        {
          heroes.map((item) => {

            const { id, img, characterName, playerDescription } = item;
            console.log(img);
            console.log(characterName);
            return (
              <>

                <div className="characterCard">
                  <PlayerCard img={img} name={characterName} playerDescription={playerDescription} />
                </div>
              </>

            )

          })

        }

      </Flickity>
    </Wrapper>
  );
}


const Wrapper = styled.div`
text-align: center;


.characterCard{
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width:377px;
    height:233px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 
    h4{
        color:var(--color-primary);
    }

    p{
        font-size:0.8rem;
        text-align:left;
        padding:13px;
    }
  }
  
 
}
.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19f;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: #333;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* vertically center */
  transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -34px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}
`
export default Carousel;
