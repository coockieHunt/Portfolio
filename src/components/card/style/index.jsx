import styled from "styled-components";
import shadow from "../../../utils/style/library/shadow";
import colors from "../../../utils/style/library/color";


export const Container = styled.div`
    width: 300px;
    box-shadow: ${shadow.fence};
    border-radius: 15px;

    display: flex;
    flex-direction: column;

    overflow: hidden;

    &:hover{
        & .footer{
            height: 20%;
        }
    }

    & p {
        padding: 10px;
    }

    & img{
        overflow: hidden;
    }
`

export const Header = styled.div`
    position: absolute;

    & h2{
        float: left;
        background-color: ${colors.primary};
        padding: 10px;
        margin-left: 10px;
        border-radius: 0 0 5px 5px;
        color: white;
    }
`


export const Fotter = styled.div`
  height: 10%;
  position: relative; 
`