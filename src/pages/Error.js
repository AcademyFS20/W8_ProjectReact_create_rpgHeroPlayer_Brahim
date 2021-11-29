import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import heropic1 from "../assets/pictures/heropic1.jpg";



function Error() {
    const image = heropic1;


    return (
        <Wrapper>
            <section
                className="error"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: `cover`,
                }}>
                <div className="title">
                    <h2>OPPS...</h2>
                    <h2>
                        SORRY, this page is not found.
                    </h2>
                </div>
                <div>
                    <Link to="/">
                        <button type="button" className="btn">
                            Back To Home page
                        </button></Link>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.main`
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;


.error{
min-height: 989px;
display:flex;
flex-direction:column;
justify-content: center;
align-items:center;
gap:55px;
}

h2 {
    font-size:5rem;
    color:white;
    background-color:rgba(0, 0, 50, 0.3);
    text-align:center;
}

.btn{
     
    width:377px;
    height:89px;
    background-color: var(--color-primary);
    border:white;
    color:white;
    font-weight : bold ;
    font-size:1.5rem;
    font-family: var(--font-titles);

}

.btn:hover{
    background-color:white;
    color: var(--color-primary);
    font-weight : bold ;
}

`

export default Error
