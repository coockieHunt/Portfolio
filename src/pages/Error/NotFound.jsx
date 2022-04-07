import styled from "styled-components";


const Error = styled.div`
    text-align: center;
    font-size: 1.2em;
    padding:30px;
    color: red;
`;

function NotFound(){
    return(
        <Error>server : Ooops 404 not found<br/><br/>me :can you excuse me ? 😟<br/> you: YES 💚 <br/> me : Thank you I swear it won't happen again !! 😊😎</Error>
    )
}


export default NotFound