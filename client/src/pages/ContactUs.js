import React, { useRef } from 'react';
import { Button, TextField } from '@mui/material';
import styled from 'styled-components';
import { Palette } from '../components/utils/colors';
import emailjs from '@emailjs/browser'

const ContactUs = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(form.current)
        emailjs.sendForm('service_o1rkvhr', 'template_tqvtem5', form.current, '8Pw960xAp05yB0ZP1')
        .then(result => window.location.reload())
        .catch(err => console.log(err))
    }
    return ( 
        
        <Body>
            <h1>Contact Us</h1>
            <p>Contact CIPHER INVESTMENTS and let us build a better future for those that mean the most.</p>
            <SubBody>
                <OurInfo>
                    <h3>Our Info</h3>
                    <p>1111 6th ave. San Diego CA 92101</p>
                    <p>Lucky@investcipher.com </p>
                    <p>Drew@investcipher.com</p>
                    <p>www.uptoptrading.com</p>
                </OurInfo>
                <Form ref={form} onSubmit={(e)=> sendEmail(e)}>
                    <NameSection>
                        <TextField type='text' name='user_first_name' placeholder='First Name'/>
                        <TextField type='text' name='user_last_name' placeholder='Last Name'/>
                    </NameSection>
                    <TextField sx={{margin: '5px 0'}} type='email' name='user_email' placeholder='Email'/>
                    <TextField sx={{margin: '5px 0'}} type='number' name='user_phone' placeholder='Phone Number'/>
                    <TextField sx={{margin: '5px 0'}} type='text' name='user_message' multiline placeholder='Leave a Message'/>
                    <Button sx={{backgroundColor: Palette.SECONDARY, marginRight: '10px', alignSelf: 'center', width:'80%'}}variant="contained" type='submit'>Submit</Button>
                </Form>
            </SubBody>
        </Body> 
    );
}
 
export default ContactUs;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 0px;
    align-items: center;
    justify-content: center;

    > * {
        margin: 20px 0;
    }

    @media(max-width: 768px){
        margin: 40px 20px;
        > * {
            margin: 10px 0;
        }
    }
`
const SubBody = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    @media(max-width: 768px){
        flex-direction: column;
        justify-content: start;
    }
`

const OurInfo = styled.div`
    > h3 {
        text-align: center;
    }
    > * {
        margin: 10px 0;
    }
    @media(max-width: 768px){
        text-align: center;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;

    > * {
        margin: 10px 0;
    }
`

const NameSection = styled.div`
    display: flex;

    > * {
        width: 100%
    }
`