import styled from "styled-components";
import {Header as MainLeft} from "./Header.jsx";
import Chatbox from "../chatbox/Chatbox.jsx";

const Box = styled.div``

export const Menu = () =>{
    
    return(
        <>
        <Box style={{display : 'flex'}}>
         <MainLeft/>
        <Chatbox/>
        </Box>
        </>
    )
}