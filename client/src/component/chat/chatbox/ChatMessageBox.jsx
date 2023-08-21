import styled from 'styled-components'

const Messagebox = styled.div`

background-image : url(${'https://www.transparenttextures.com/patterns/45-degree-fabric-light.png'}); 
background-position: center centre ;
background-repeat: no-repeat;
background-size: cover;
height: 82%;
overflow-y: scroll;
`

const ChatMessageBox = () =>{
    return(
        <Messagebox>
            this is the message box for the application
        </Messagebox>
    )
}

export default ChatMessageBox