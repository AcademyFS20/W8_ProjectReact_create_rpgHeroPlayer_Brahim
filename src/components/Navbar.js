import React from 'react'
import styled from 'styled-components';
import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Awesome from './icons/Awesome';
import { useAppContext } from '../context/app_context';
import navbar_bg from "../assets/pictures/navbar_bg-01.svg"
import logo from "../assets/logo/logo.svg"




const Navbar = () => {

    const image = navbar_bg
    const adventum = logo

    return (
        <Wrapper style={{backgroundImage:`url(${image})`,
        }}>
            <button type="button" className="btnMenu">
                <Awesome name={faBars} />
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
justify-content:space-center;
align-items:center;
gap:612px;
height:55px;

.logo{
    width:8%;
    margin-left:21px
}


.links{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;  
    width:144%;
    font-weight:bold;

    a   {
        text-decoration: none;
        color:rgba(255, 227, 66, 1);
    }

    li {  list-style-type: none;
    }
}
.btnMenu {
    position: absolute;
    right: 21px;
    background-color:transparent;
    border: none;
}   
`

export default Navbar;