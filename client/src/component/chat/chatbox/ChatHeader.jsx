import styled from 'styled-components'
import { AccountContext } from '../../account/contexts/AccountProvider'
import { useContext , useState} from 'react'
const Header = styled.div`
display : flex;
width : 100%;
background-color : #ededed;
align-items : center;
justify-content : space-between;
`

const ChatAccount = styled.div`
display : flex;
width : 150vh;
padding : 5px;
background-color : #ededed;
align-items : center;


.main_image{

    height : 2.9rem;
    width : 3rem;
    border-radius : 50%;
    margin : 0px 10px 0px 10px ;
  }


`
const OnlineStatus = styled.div`
font-size : 0.8rem;
`

const Logo = styled.div``

const AccountName = styled.div``

const ChatHeader = ()=>{

    const {account} = useContext(AccountContext);
    return(
        <Header>
            <ChatAccount>

            <div className="prifile_image">
            <img className = 'main_image' src={account.picture} alt="profile" />
            </div>

            <AccountName>
                {account.name}
                <OnlineStatus>online</OnlineStatus>
            </AccountName>

            </ChatAccount>
            <Logo>
                <img src="#" alt="" />
                <img src="#" alt="" />
                
            </Logo>
         
        </Header>
    )
    }
    export default ChatHeader