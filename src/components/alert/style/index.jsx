import styled from "styled-components";
import { ALERT } from "../../../config"

export const AlertCompement = styled.div`

    color: white;
    background-color: ${props => ALERT[props.type].backgroundColor}; ;

    position: fixed;
    left: 50%;
    z-index:99;
    transform: translate(-50%, 10%);

    text-align: center;
    padding : 15px;
    display: flex;
    border-radius: 5px;

    & svg{
        margin: 0 5px 0 0;
        height: 15px;

        fill: ${props => ALERT[props.type ].IconColor}; ;
    }

    & span{
        color: ${props => ALERT[props.type].TextColor}; ;
        pading: 0 15px 0 0 ;
    }
`;