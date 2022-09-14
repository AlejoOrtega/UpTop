import React from 'react';

import { Button } from '@mui/material';
import styled from 'styled-components';
import stats from '../resources/images/stats.png'
import classGroup from '../resources/images/class-group.png'
import deskGroup from '../resources/images/desk-group.png'
import logoGold from '../resources/images/UpTopLogo.png'
import { Palette } from '../components/utils/colors';
import { useNavigate } from 'react-router-dom';

import {motion} from "framer-motion"


const LandingBody = () => {
    const navigate = useNavigate()
    return ( 
        <Body>

            <SubBody>
                <Title>Invest With a Peace of Mind in Knowing You are Not Alone</Title>
                <p>We are private San Diego-based investment firm that is dedicated to helping communities grow their wealth</p>   
            </SubBody>
            
            <BigImage src={logoGold} alt='up-top-logo-landing'/>
            <hr style={{width: '80%'}}/>
            <h1>Our Private Investment Solutions</h1>
            <Information>
                <InfoBlock>
                    <InfoImage src={stats} alt='stats'/>
                    <h3>Wealth management</h3>
                    <p>CIPHER INVESTMENTS has a robust suite of tools designed to grow and manage wealth. We feature both traditional and digital solutions.</p>
                    <hr style={{width: '40%'}}/>
                </InfoBlock>

                <InfoBlock>
                    <InfoImage src={classGroup} alt='group'/>
                    <h3>Network Planning</h3>
                    <p>Our experienced team helps plan for each investment carefully and with ease. We create strategies that keep up with our company's financial needs and goals.</p>
                    <hr style={{width: '40%'}}/>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={deskGroup} alt='desk'/>
                    <h3>Community Educators</h3>
                    <p>One of our main goals is to educate, train and equip our society with the right guidance to act on an opportunity when it presents itself.</p>
                    <SpecialHr/>
                </InfoBlock>
            </Information>
            <Phrase>
                <h2 style={{color: 'white'}}>Take calculated risks. That is quite different from being rash.</h2>
                <p style={{color: 'white'}}>-George S. Patton</p>
            </Phrase>
            <ContactUs>
                <h1><b>Contact Up Top Trading</b> and let us work together on your next project as a trusted partner.</h1>
                <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px', color:'black'}}variant="contained" onClick={()=>navigate('contact-us')}>Contact Us</Button>
            </ContactUs>
            
        </Body>
     );
}
 
export default LandingBody;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    background-color: #F6F3EF;
    text-align: center;

    > * {
        margin: 20px 0;
    }
`;

const SubBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
    margin-top: 20px;

    > p, button {
        margin-top: 20px;
    }

`
const ContactUs = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    text-align: center;
    margin: 50px 0;
    

    > h1 {
        font-weight: normal;
    }

    @media(max-width: 768px){
        > h1 {
            font-size: 24px;
            margin: 20px 10px;
        }
    }
`

const Title = styled.div`
    font-size: 50px;
`

const BigImage = styled.img`
    width: 80%;
    height: auto;
    object-fit: cover;
    margin-bottom: 20px;
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
    text-align: center;


    @media(max-width: 768px){
        flex-direction: column;
    }
`

const InfoBlock = styled.div`
    display: flex;
    flex-direction: column;    
    align-items: center;
    padding: 0 10px;

    text-align: justify;
    text-justify: inter-word;

    > * {
        margin: 10px 0px;
    }
`

const SpecialHr = styled.hr`
    width: 40%;

    @media(max-width: 768px){
        display: none;
    }
`

const InfoImage = styled.img`
    width: 325px;
    height: 225px;
    margin-bottom: 10px;
`

const Phrase = styled.div`
    background-color: black;
    width: 100%;
    height: 200px;
    margin: 0px 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`


