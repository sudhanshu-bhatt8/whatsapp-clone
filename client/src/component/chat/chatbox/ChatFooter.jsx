
import styled from 'styled-components'

const Footer = styled.div`
display:flex;
align-items:center;
background-color: #f5f5f5;
border : 1px solid #e5e5e5;
`
const Logo = styled.div`
display:flex;
min-width: 5rem;
max-width: 10rem;

`
const Input = styled.input`
width: 100%;
height: 3rem;
border : none ;
outline: none;
padding: 0 1rem;
`
const Send = styled.div``

const Chatfooter = ()=>{
return(
    <Footer>
        <Logo>
            <img src="#" alt="emoji" />
            <img src="#" alt="files" />
        </Logo>
        <Input></Input>
        <Send></Send>
    
    
    </Footer>
)
}
export default Chatfooter