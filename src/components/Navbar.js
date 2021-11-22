import React from 'react'
import styled from 'styled-components';
import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <Wrapper>
            <div className="logo">
                logo
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
            <div className="social">
                social icons
            </div>

        </Wrapper>
    )
}

const Wrapper = styled.header`

display:flex;
flex-direction:row;
justify-content:space-around;
align-items:center;

.links{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    align-items:center;  
    width:100%;

    a{
        text-decoration: none;
    }
}

`

export default Navbar;