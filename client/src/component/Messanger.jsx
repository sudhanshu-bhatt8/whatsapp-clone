import React from 'react'
import LoginDetails from './account/LoginDetails'
import { useContext } from 'react'
import { AccountContext } from './account/contexts/AccountProvider'
import ChatDialogue from './chat/ChatDialogue'
export default function Messanger() {

  const {account} = useContext(AccountContext)
  return (
    <>
    {account ? <ChatDialogue></ChatDialogue> : <LoginDetails></LoginDetails>}
    </>
    
  )
}

