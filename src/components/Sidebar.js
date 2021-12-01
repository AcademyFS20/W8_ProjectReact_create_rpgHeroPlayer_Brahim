import React from 'react'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { navLinks } from '../utils/constants';
import { Link } from 'react-router-dom';
import { Icon } from './icons/reactIcons';
// import { useAppContext } from '../context/app_context';



const Sidebar = () => {

    // const {IsSidepbarOpen, closeSidebar} = useAppContext();

    return (
        <Wrapper>
            {/* <aside className={`${IsSidepbarOpen ? `sidebar show-sidebar` : `sidebar`}`}> */}
            <button type="button" className="btnMenu">
                <Icon name="menuMinus" />
            </button>
            <div className="sideBar">
                <ul className="links">
                    {
                        navLinks.map((item) => {
                            return (<li key={item.id}>
                                <Link to={item.url} > {item.text}</Link></li>)
                        })
                    }
                </ul>

            </div>
            {/* </aside> */}

        </Wrapper>

    )
}

const Wrapper = styled.div`
display:flex;
flex-direction: column;
gap:34px;

.btnMenu {
    float:right;
    margin: auto 21px auto auto;
    background-color:transparent;
    border: none;
}   

.sideBar{
width:100%;
height:100vh;
display:flex;
flex-direction: column;
gap:21px;
z-index :10;
}

.links{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    gap:21px;
    padding-left: 55px;
    z-index : 5;

    a   {
        text-decoration: none;
    }

    li {  list-style-type: none;
    }
}
`

export default Sidebar;