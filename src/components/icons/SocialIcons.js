import React, { Component } from 'react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaYoutubeSquare } from "react-icons/fa";
import styled from 'styled-components';


class SocialIcons extends Component {
    render() {
        return <Wrapper>
            <FaFacebookSquare size={30} />
            <FaTwitterSquare size={30} />
            <FaInstagramSquare size={30} />
            <FaYoutubeSquare size={30} />
        </Wrapper>
    }
}

const Wrapper = styled.div`

display:flex;
justify-content:space-evenly;


.socialIcons{

}
`

export default SocialIcons;