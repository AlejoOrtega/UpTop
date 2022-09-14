import React, {useState} from 'react';
import styled from "styled-components"
import logoBlack from '../resources/images/SimpleLogo.png'
import menuIcon from '../resources/images/menu.png'
import {Palette} from './utils/colors.js'
import { Avatar, Button, ButtonGroup, Menu, MenuItem } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { fetchLogOut } from './utils/fetchs';

import { useDispatch } from 'react-redux';
import { logOut } from './utils/stores/user';
import { logIn, signIn } from './utils/stores/log';

import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.value)
    const [anchorEl, setAnchorEl] = useState(false);
    const open = Boolean(anchorEl);

    //Header Menu
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    const handleOption = (option) => {
        switch(option){
            case 'plan':
                navigate('/plans')
                break;
            case 'course':
                navigate('/my-courses')
                break;
            case 'profile':
                navigate('/profile')
                break;
            case 'logout':
                onLogOut()
                break;
            default:
        }

        handleClose()
    }

    const changeLogInSelectedState = () => {
        dispatch(logIn())
    }
    const changeSignInSelectedState = () => {
        dispatch(signIn())
    }

    const onLogOut = () => {
        fetchLogOut()
        dispatch(logOut())
    }


    const userLoggedIn = () => {
        if(currentUser !== ''){
            return (
                <div style={{display: 'flex'}}>
                    {currentUser.admin? <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px', color: 'black'}} onClick={()=>navigate('/admin')}>Admin</Button> : null }
                    <Button
                        variant='outlined'
                        size="large"
                        sx={{backgroundColor: Palette.SECONDARY, color: 'black'}}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar sx={{marginRight: '10px'}}alt="Profile Picture" src={logoBlack} />
                        {currentUser.username}
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>handleOption('profile')}>My Profile</MenuItem>
                        <MenuItem onClick={()=>handleOption('course')}>My Courses</MenuItem>
                        <MenuItem onClick={()=>handleOption('plan')}>Plans</MenuItem>
                        <MenuItem onClick={()=>handleOption('logout')}>Logout</MenuItem>
                    </Menu>
                </div>
            )
        }else{
            return (
                <> 
                    <Button
                        variant='contained'
                        size="large"
                        sx={{backgroundColor: Palette.SECONDARY, color: 'black', background:{menuIcon}}}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <img style={{width: '25px', height: 'auto'}} src={menuIcon}/>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={()=>{navigate('plans'); handleClose()}}>Plans</MenuItem>
                        <MenuItem onClick={()=>{navigate('contact-us'); handleClose()}}>Contact Us</MenuItem>
                    </Menu>
                    {/* <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px'}}variant="contained" onClick={()=>navigate('/plans')}>Plans</Button>
                    <ButtonGroup variant="contained" aria-label="outlined button group">
                            <Button onClick={changeLogInSelectedState}>Log In</Button>
                            <Button onClick={changeSignInSelectedState}>Sign In</Button>  
                    </ButtonGroup>  */}
                </>    
                );
        }
    }
    return ( 
        <MainDiv>
            <SubDiv onClick={()=>navigate('/')}>
                <LogoImage className='logo-header' src={logoBlack} alt='up-top-logo'/>
                <Title>Up Top Trading</Title>
            </SubDiv>
            <Nav>
                {userLoggedIn()}  
            </Nav>
        </MainDiv>
    );
}
 
export default Header;

const MainDiv = styled.div`    
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    height: 180px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;

    @media(max-width: 768px){
        height: 90px;
    }
`;

const SubDiv = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    > * {
        margin: 0 10px;
    }
`;


const Title = styled.h1`
    color: ${Palette.PRIMARY_TEXT};
    @media(max-width: 768px){
        display: none;
    }
    
`;

const LogoImage = styled.img`
    width: 100px;
    height: auto;
    @media(max-width: 768px){
        // display: none;
        width: 50px;
    }
`;

const Nav = styled.div`
    margin-right: 20px;
`;
