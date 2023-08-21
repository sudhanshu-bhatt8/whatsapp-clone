import React from 'react'
import styled from 'styled-components'
import { qrCodeImage } from '../../constants/data'
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";
import { useContext } from 'react';
import { AccountContext } from './contexts/AccountProvider';
import { adduser } from '../../service/api.js';

const Content = styled.div`
color : white ; 
font-size: 2rem;
margin: 2rem;
`
const Heading = styled.div`
display: flex;
background-color: #63cb77;
font-size: large;
height: 13rem;

`
const DiaglogBox = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
// background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
display: flex;
justify-content: center;
align-items: center;
`
const DialogboxContent = styled.div`
display: flex;
  background-color: #fff;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  height: 70%;
  width: 60%;

  @media (max-width: 1300px) {
    display: flex;
    height: fit-content;
  }
`
const Box = styled.div`
height: fit-content;
font-size: 1.3rem;

.list{
  list-style-type: none;
  margin: 1rem;
}
@media (max-width: 1300px) {
  font-size: 1rem;
}

`
const BoxImage = styled.div`
height: fit-content;
margin: 2rem;
img{
  height: 13em;
}
@media (max-width: 1300px) {
  display: flex;
  width: 100%;
 justify-content: center;
 algin-items: center; 
 margin: 0;
 img{
  height: 7em;
 }
}
`


export default function LoginDetails() {


  const {setAccount} = useContext(AccountContext)

  // handling the login fuction 
const handleLoginSucess = async(res) => {
  const decode = jwt_decode(res.credential)
  console.log(decode)
  setAccount(decode)
  await adduser(decode)
  

}
const handleLoginError = () => {
  console.log('login error ')
}

  return (
    <>
     {/* create a dialog box for the application  */}
      <Heading>
       <Content>whatsaap clone </Content> 
        </Heading>

     <DiaglogBox>
        <DialogboxContent>
         <Box>
         <p> Use the whatsapp on your computer </p>
           <li  className='list'> 1: open Whatsapp on your phone</li>
           <li  className='list'> 2 : tap menu  or setting and select link devices </li>
           <li  className='list'> 3 : tap on the link devices </li>
           <li  className='list'> 4:  point your phone to the screen to capture the qr code </li>
         </Box>
         <BoxImage>
         <img src={qrCodeImage} className='img_bar' alt="qr code" />
         <GoogleLogin onSuccess={handleLoginSucess}
         onError={handleLoginError}></GoogleLogin>
         </BoxImage>
        </DialogboxContent>
     </DiaglogBox>
    </>
  )
}
