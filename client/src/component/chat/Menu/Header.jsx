import React from 'react'
import styled from 'styled-components'
import { useState  , useContext} from 'react'
import { AccountContext } from '../../../component/account/contexts/AccountProvider'
import message from '../../../img/message.png'
import more from '../../../img/more.png'
import Conversation from './Conversation'

// css code for the application is here  
const Wraper = styled.div`
display : flex;
position : relative;
flex-direction : column;
min-width : 26rem;
overflow : hidden;

`
const Menu = styled.div`
display : flex;
align-items : center;
justify-content : space-between;
padding : 10px;
min-height : 10px;
border-bottom : 1px solid #f0f0f0;

.message{
    margin-right : 10px;
}

.main_image{
  height : 3rem;
  width : 3rem;
  border-radius : 50%;
}
.menu_options{
  display : flex;
  fit-content : space-between;
  align-items : center;
}

`
const Searchbox = styled.div`
display : flex;
padding : 10px;

input{
    width : 100%;
    height : 2rem;
    outline : none;
    padding : 10px;
}

`

const Profile = styled.div`
display : flex;
flex-direction : column;
height : 100vh;
position : absolute;
left : ${ ({isOpen}) => (isOpen ? '0px' : '-450px')};
background-color : #ededed; 
width : 26rem;
transition :  0.5s ease-in-out;

.header{
  width : 100%;
  padding : 60px 0px 10px  14px ; 
  font-size : 1.5rem;
  background-color : #7dff7d;
  color : white; 
}
.account_picture{
  display : flex;
  height : 14rem;
  width : 100%;
  justify-content : center;
  align-items : center;
}
.picture{
  border-radius : 50%;
  height : 10rem;
  width : 10rem;
}
.Account_name{
  background-color : white ;
  padding : 15px ;

  .yourname{
    color :  blue;
    margin-bottom : 5px; 
  }
}

.status{
  width : 100%;
  background-color : white ;
  padding : 15px ;

  .about{
    color :  blue;
    padding-bottom : 10px;
  }
  
}
.description{
  padding : 15px;
  font-size : 0.8rem;
}
`

export const Header = () => {

  
  const handleonclick = () => {
    console.log('clicked')
    setOpen(!isOpen)
    console.log(isOpen)
  }
  const [isOpen , setOpen ] = useState(false)

  const {account} = useContext(AccountContext)
  return (
    <>
    {/* this is the menu box for the application  */}
    <Wraper>
{/* the menu bar for the application  */}
      <Menu>
        <div className="profile_image">
            <img className = 'main_image' onClick={handleonclick} src={account.picture} alt="profile" />
        </div>

        <div className="menu_options">
            <img className='message' src={message} alt="message" />
            <img className='message' src={more} alt="more" />
        </div>

      </Menu>


{/* the searchbar option for the applicaition  */}

      <Searchbox>
        <input type="search" className='search' placeholder='search' />
      </Searchbox>
      <Conversation></Conversation>
      

{/* the profile section for the application */}
      <Profile  isOpen ={isOpen}>

        <div className="header">profile</div>
        <div className='account_picture'>
            <img className='picture' onClick={handleonclick} src={account.picture} alt="profile_picture" />
        </div>
        <div className="Account_name">
            <div className='yourname'>yourname</div>
            <div className='name'>{account.name}</div>  
        </div>
        <div className='description'>
          <div className="des">
            this is not your username or pin. this name will be visible to your whatsapp contacts
          </div>
        </div>


        <div className="status">
            <div className="about">About</div>
            <div className="status_text">Hey there i am using whatsapp</div>
        </div>

    
      </Profile>
    </Wraper>
    </>
  )
}