import React from 'react';
import styled from 'styled-components';
import logoBlack from '../resources/images/logo-black.png'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return ( 
        <Body>
            <LogoFooter src={logoBlack} alt='Logo black'/>
            <WebsiteRoutes>
                <NavLink to='/' className='inactive' activeclassname='active'>Home</NavLink>
                <NavLink to='/plans' className='inactive' activeclassname='active'>Plans</NavLink>
                <NavLink to='/contact-us' className='inactive' activeclassname='active'>Contact Us</NavLink>
            </WebsiteRoutes>
            <SocialNetworks>
                <a href='https://discord.com/invite/9HPMvXm3Jw' target='_blank'>Discord</a>
                <a href='https://www.instagram.com/uptoptrading/' target='_blank'>Instagram</a>
            </SocialNetworks>
            <ContactInformation>
                <p>1111 6th ave</p>
                <p>San Diego CA 92101</p>
                <p>Lucky@investcipher.com</p>
                <p>Drew@investcipher.com</p>
                <b>UpTopTrading.com</b>
            </ContactInformation>
        </Body>
    );
}
 
export default Footer;

const Body = styled.div`
    display: flex;
    background-color: black;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    overflow: hidden;
`

const LogoFooter = styled.img`
    width: 150px;
    height: 150px;
    filter: brightness(0) invert(1);
    margin: 30px;

    @media(max-width: 768px){
        display: none;
    }
`
const WebsiteRoutes = styled.div`
    display: flex;
    flex-direction: column; 
    color: white;
    margin: 30px auto;
    > * {
        margin-bottom: 5px;
    }
`
const SocialNetworks = styled.div`
    display: flex;
    flex-direction: column;     
    color: white;
    margin: 30px auto;
    > * {
        margin-bottom: 5px;
    }

    a:link{
        color: white;
    }

    a:visited{
        color: orange;
    }

    a:hover{
        color: red;
    }
`
const ContactInformation = styled.div`
     color: white;
     margin: 30px auto;
     > * {
        margin-bottom: 5px;
     }
`
