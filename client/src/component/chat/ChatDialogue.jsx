import React from 'react'
import styled from 'styled-components'
import { Menu } from './Menu/Menu'


const Heading = styled.div`
display: flex;
background-color: #63cb77;
font-size: large;
height: 8rem;
`
const DiaglogBox = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
display: flex;
justify-content: center;
align-items: center;
`
const DialogboxContent = styled.div`
display: flex;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin:5rem;
  height: 90%;
  width: 100%;
`

export default function ChatDialogue() {
  return (
    <>
      <Heading></Heading>
      <DiaglogBox>
        <DialogboxContent>
          <Menu>
          </Menu>
        </DialogboxContent>
      </DiaglogBox>
    </>
  )
}
