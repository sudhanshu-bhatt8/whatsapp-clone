
import styled from 'styled-components'
import ChatHeader from './ChatHeader'
import Chatfooter from './ChatFooter'
import ChatMessageBox from './ChatMessageBox'


const Header = styled.div``
const Chatbox = ()=> {
    
return(
    <Header>
    <ChatHeader ></ChatHeader>
    <ChatMessageBox></ChatMessageBox>
    <Chatfooter></Chatfooter>
    </Header>
)

}

export default Chatbox 