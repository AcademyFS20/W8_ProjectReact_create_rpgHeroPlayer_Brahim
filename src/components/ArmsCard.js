import React from "react";
import styled from "styled-components";
import { Icon } from "./icons/reactIcons";

function ArmsCard(props) {
  return (
    <Wrapper>
      <Icon name={props.iconName} />
      <h3> {props.title}</h3>
      <p>
        {props.paragraph}
      </p>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 288px;
  height: 377px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: var(--color-primary-4);

  p {
    padding: 21px;
    font-size:1.1rem;
  }
`;
export default ArmsCard;
