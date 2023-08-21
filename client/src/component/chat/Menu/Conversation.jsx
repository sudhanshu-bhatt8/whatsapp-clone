import { useEffect, useState , useContext} from "react";
import { getusers } from "../../../service/api.js";
import styled from 'styled-components'
import Displayconversation from "./Displayconversation.jsx";
import { AccountContext } from "../../account/contexts/AccountProvider.jsx";

const Box = styled.div`
height: 100vh;
overflow : overlay;

`


 const Conversation = () =>  {
   const  {account} = useContext(AccountContext)
   
   const [users , setUser ] = useState([])

    useEffect(() => {
       const fetchData = async()=> {
        let res = await getusers()
        setUser(res)
       }
       fetchData()
    }, [])
    
  return (
    <Box>  
        {users.map(user => (user.sub !== account.sub && <Displayconversation user = {user} />))}  
    </Box>
  )
}
export default Conversation ;