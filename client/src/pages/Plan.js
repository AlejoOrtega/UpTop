import React from 'react';
import uptop from '../resources/images/UpTopLogo.png';
import alert from '../resources/images/alert.png';
import social from '../resources/images/social-care.png';
import college from '../resources/images/college-graduation.png';

import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { joinPlan } from '../components/utils/fetchs';
import { Button } from '@mui/material';
import {Palette} from '../components/utils/colors'
import { useNavigate } from 'react-router-dom';

const Plan = () => {
    const currentUser = useSelector(state => state.user.value)
    const navigate = useNavigate()

    // Cannot change type of plans bc it has to go with the db
    const onJoinPlan = (typeOfPlan) => {
        joinPlan(typeOfPlan)
    }
    const handleJoinFree = () => {
        window.open('https://discord.com/invite/9HPMvXm3Jw')
    }
    const handleJoinPremium = () => {
        window.open('https://upgrade.chat/up-top-trading/upgrades')
    }
    return ( 
        <Body>
            {/* <BigImage src={uptop} alt='uptop'/> */}
            <Information>
                <FreeTier>
                    <h4>Standard</h4>
                    <h1>Free</h1>
                    <Line/>
                    <p>Perfect for individuals that are interested in trading. This subscription includes:</p>
                    <List>
                        <li>General Chat Access</li>
                        <li>Watchlist Access</li>
                        <li>Live News and Report Access</li>
                        <li>Trading Gains Page</li>
                    </List>
                    {/* { currentUser? <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={() =>onJoinPlan('Free Plan')}>Join Free!</Button> : <h3>Login to join</h3> }  */}
                    <Button sx={{backgroundColor: Palette.SECONDARY, margin: '0px 20px'}}variant="contained" onClick={()=>handleJoinFree()}>Join Free!</Button> 
                </FreeTier>

                <PremiumTier>
                    
                    <h4>Premium</h4>
                    <h1>$35</h1>
                    <Line/>
                    
                    <p>Perfect for Traders that want to take their experience to the next level and the full support of the trading community. This subscription includes:</p>
                    <List>
                        <li style={{color: 'green'}}>Free benefits</li>
                        <li>Access to Trading Signals 24/7</li>
                        <li>Access to Training Content</li>
                        <li>Community Zoom Calls</li>
                        <li>Live Trading Sessions during Market Hours</li>
                        <li>Access to a One-on- One Trading Coach</li>
                        <li>Monthly Giveaways</li>
                        <li>Access to Local Community Events hosted by UP TOP TRADING COMMUNITY</li>
                    </List>
                    {/* {currentUser? <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=> onJoinPlan('Premium Plan')}>Join Plan!</Button> : <h3>Login to join</h3> } */}
                    <Button sx={{backgroundColor: Palette.SECONDARY, margin: '0px 20px'}}variant="contained" onClick={()=>handleJoinPremium()}>Join Premium!</Button> 
                </PremiumTier>
                
                <EliteTier>
                    <h4>Elite</h4>
                    <h1>Please Contact Us</h1>
                    <Line/>
                    <p>Not all traders learn the same and we acknowledge that by tailoring our program around your personality, goals and weekly trading hours. Reach out to us to learn more!</p>
                    <Button sx={{backgroundColor: Palette.SECONDARY, margin: '0px 20px'}}variant="contained" onClick={()=>navigate('/contact-us')}>Contact Us</Button>
                </EliteTier>
            </Information>
            <Line/>
            <InformationSupport>
                <InfoBlock>
                    <InfoImage src={alert} alt='education'/>
                    <h4>Education</h4>
                    <p>Education is key to understanding how to trade. We enjoy having the opportunity to provide not only what you find in books but hands on training. Imagine being mentored and trading at the same time! The potential is limitless!</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={social} alt='community'/>
                    <h4>Community Support</h4>
                    <p>You have probably heard and seen other trading communities offer their support to members but ask yourself.. do they Truly follow through with their statements? UPTOP prides itself with having a close nit community where traders meet each other and share ideas to ultimately be successful in their pursuit of happiness.</p>
                </InfoBlock>
                <InfoBlock>
                    <InfoImage src={college} alt='signals'/>
                    <h4>Signals</h4>
                    <p>Have you ever been at a stop light and just waited for it to turn green? What if we told you that we can offer the same guidance towards trading? Think of it as an easy way to jump in and out of trades! We make sure you understand the lingo and opportunities as they come to your doorstep.</p>
                </InfoBlock>
            </InformationSupport>
        </Body>
    );
}
 
export default Plan;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    overflow: hidden;
`;

const BigImage = styled.img`
    width: 80%;
    height: auto;
    object-fit: cover; 
    margin: 20px 0px;

    @media(max-width: 768px){
        width: 100%
    }
`;

const InformationSupport = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    line-height: 1.6;
    margin-bottom: 80px;

    > div {
        display: flex;
        flex-direction: column;    
        width: auto;
        padding: 0px 15px;
        align-items: center;
        text-align: justify;
        text-justify: inter-word;
    }

    @media(max-width: 768px){
        flex-direction: column;

        > div {
            margin: 15px 0px;
        }
    }
`;

const InfoBlock = styled.div`
    > h4 {
        // align-self: center;
        margin-bottom: 10px;
    }
`
const InfoImage = styled.img`
    width: 200px;
    height: auto;
    align-self: center;
    margin-bottom: 10px;

    @media(max-width: 768px){
        width: 100px;
        height: auto;
    }
` 

const Line = styled.div`
    height: 0;
    width: 80%;
    margin: 80px 0;
    border-bottom: 1px solid gray;
    @media(max-width: 768px){
        margin: 40px 0; 
    }
`

const Information = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
    line-height: 1.6;
    margin-top: 30px;
    > div {
        display: flex;
        flex-direction: column;    
        padding: 20px 20px;
        width: 400px;
        > h1 {
            align-self: center;
        }
        > p {
            text-align: justify;
            text-justify: inter-word;
        }
        > h3 {
            margin-top: 20px;
            align-self: center;
        }
        > button {
            margin-top: 20px;
            algin-self: center;
        }
        > div {
            margin: 20px 0;
            padding: 0;
            align-self: center;
        }
    }

    @media(max-width: 768px){
        flex-direction: column;
        align-items: center;
        > * {
            margin: 20px 0px;
        }
    }
`;

const List = styled.ul`
    list-style-position: inside;
    list-style-type: square;
    margin: 5px 0px;
    > li {
        margin: 10px 0px;
    }
`

const FreeTier = styled.div`
    > h1 {
        color: green;
    }
    > ul {
        color: green;
    }
    > * {
        margin: 0px 20px;
    }
    @media(max-width: 768px){
        box-shadow: 5px 10px 18px #888888;
        font-size: 20px;
    }
`

const PremiumTier = styled.div`
    border-style: solid;
    border-width: 1px;
    border-color: gray;
    box-shadow: 5px 10px 18px #888888;
    > h1 {
        color: orange;
    }
    > ul {
        color: orange;
    }
    > * {
        margin: 0px 20px;
    }
    @media(max-width: 768px){
        font-size: 20px;
    }
`

const EliteTier = styled.div`
    > * {
        margin: 0px 20px;
    }
    @media(max-width: 768px){
        box-shadow: 5px 10px 18px #888888;
        font-size: 20px;
    }
`