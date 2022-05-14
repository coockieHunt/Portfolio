import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { BUTTON } from "../../../config"
import {useNavigate} from 'react-router-dom';


export const Button = styled.button`
    padding : 15px;
    color: ${colors.white};

    border: none;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;

    background-color: ${props => BUTTON.theme[props.theme].backgroundColor}; ;
    border-radius: ${props => BUTTON.theme[props.theme].borderRadius}; ;

    &:disabled{
        background-color: ${colors.grey};
        cursor: not-allowed;
    }
    
    &:hover{
        &:disabled{
            background-color: ${colors.grey};
        }
        
        background-color: ${props => BUTTON.theme[props.theme].HoverColor}; ;
    }
`;

export const Cp= styled.div`
    color: ${colors.grey};
    background-color: white;
    line-height: 2.5;
    padding: 0 0 0 15px;
    & span{
        background:#FFF;
        height :100%;
        float: right;
        width: 15%;
        color: white;

        text-align: center;

        background-color : ${colors.spot};

        cursor: pointer;

        &:hover{
            background-color: ${colors.secondary} ;
        }
    }
`;

export const Img = styled.a `
    color: ${props => props.color !== undefined ? props.color : colors.primary};
`;





