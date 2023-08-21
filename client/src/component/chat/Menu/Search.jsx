import styled from "styled-components";
const Box = styled.div`
display: flex;
align-items: center;
border-bottom: 1px solid #f2f2f2;
min-width: 25.7em;


input{
 display : flex ; 
 padding-left : 3rem ;
 margin-left : 0.5rem ;
 width : 95% ;
 height : 2rem ;
 border-radius : 0.1rem ;
 border : 1px solid #fff;
 background-color : #f2f2f2 ;
 outline-color : transparent ;
}
`
const Searchbar = styled.div`
display: flex;
height: 3rem;
background-color: #fff;
`
const Icon = styled.div`
position : absolute ;

img{
    height: 1.5rem;
    width: 1.5rem;
    margin-left: 1.5rem;

}
`


export const Search = () => {
    return (
        <Searchbar>
            <Box>
                <Icon>
                   {/* <img src={search} alt="search icon" />  */}
                </Icon>
                <input type="search" placeholder="Search or Start New Chat " />
            </Box>

        </Searchbar>
    )
}