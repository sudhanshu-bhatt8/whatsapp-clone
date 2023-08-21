import styled from 'styled-components'




const Box = styled.div`
display:flex;
align-items:center;
curser:pointer;
padding: 5px ;
margin-bottom: 4px;

&:hover{
    background-color: #f8f8f8;
}
`

const Image = styled('img')({
    width:50 , 
    borderRadius:'50%' , 
})
const Displayconversation = ({user})=>{
    
    
   

    const openConversation = () =>{
        console.log("open conversation");
        
    }
    return (
        <Box onClick={()=> openConversation()}>
            <Box>
                <Image src={user.picture} alt="" />
            </Box>
            <Box>
                <div className="name">{user.name}</div>
                
            </Box>
           
        </Box>
    )
}
export default Displayconversation;