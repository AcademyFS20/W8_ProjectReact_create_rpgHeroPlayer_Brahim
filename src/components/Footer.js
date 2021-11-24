import React from 'react'
import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Awesome from './icons/Awesome';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInbox } from '@fortawesome/free-solid-svg-icons';
import SocialIcons from "./icons/SocialIcons" 
import { FaFacebook } from 'react-icons/fa';




const Footer = () => {
    return (
        <Wrapper>
            <div className="infos">
                <h2>RpgGame</h2>
                <div className="para">
                <p> Rpg Game a platform for creating your characters</p>
                <p>and start your adventure</p>
                </div>
                <div className ="contacts">
                    <div className="contactInfos">
                        <Awesome name={faAddressBook} />
                        <p>address: 45, Rue Almorabtine, Av. Allal ben Abdellah</p>
                    </div>
                    <div className="contactInfos">
                        <Awesome name={faPhone} />
                        <p>phone: 0537152369</p>
                    </div>
                    <div className="contactInfos">
                        <Awesome name={faInbox} />
                        <p>email: contact@rpggame.com</p>
                    </div>
                </div>
            </div>
            <div className="sitemap">
                <h2>Sitemap</h2>
                <ul className="links">
                    {
                        navLinks.map((item) => {
                            return (<li key={item.id}>
                                <Link to={item.url}> {item.text}</Link></li>)
                        })
                    }
                </ul>
            </div>
            <div class="social">
                <h2>Follow us on social media</h2>
                <SocialIcons />
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.footer`
display:flex;
justify-content:space-evenly;
align-items:center;
min-height: 377px;
background-color: rgba(22,22,22,1);
color:white;


.links{
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:flex-start;  
    gap:21px;
    width:144%;
    font-weight:bold;

    a   {
        text-decoration: none;
        color:rgba(255, 227, 66, 1);
    }

    li {  list-style-type: none;
    }
}

.infos{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:13px;
}

.contacts{    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:13px;
}

.contactInfos{
    display:flex
   justify-content: space-evenly;

}

.sitemap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap:21px;
    
}
.social{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    gap:13px; 
}
`
export default Footer;