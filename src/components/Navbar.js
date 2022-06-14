import React from 'react'
import styled from 'styled-components';
import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/app_context';
import navbar_bg from "../assets/pictures/navbar_bg-01.svg"
import logo from "../assets/logo/logo.svg"
import { Icon } from './icons/reactIcons';




const Navbar = () => {

    const image = navbar_bg
    const adventum = logo

    return (
        <Wrapper style={{backgroundImage:`url(${image})`,
        }}>
            <button type="button" className="btnMenu">
                <Icon name="HamburgerMenu" />
            </button>
            <div className="logo">
                <img src={adventum} alt="logo" />
        
            </div>
            <div >
                <ul className="links">
                    {
                        navLinks.map((item) => {
                            return (<li key={item.id}>
                                <Link to={item.url}> {item.text}</Link></li>)
                        })
                    }
                </ul>
            </div>
            {/* <div className="social">
                social icons
            </div> */}

        </Wrapper>
    )
}

const Wrapper = styled.header`

display:flex;
flex-direction:row;
justify-content: space-around;
align-items:center;
height:55px;

.logo{
    width:144px;
}


.links{
    display:flex;
    justify-content:space-between;
    align-items:center;  
    width:144%;
    font-weight:bold;

    a   {
        text-decoration: none;
        color:var(--color-primary);
    }

    li {  list-style-type: none;
    }
}
.btnMenu {
    position: absolute;
    right: 21px;
    background-color:transparent;
    border: none;
    visibility:hidden;
}   
`

export default Navbar;