import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { BUTTON } from "../../../config"

export const Button = styled.button`
    display: flex;
    align-items: center;
    padding : 15px;
    color: ${colors.white};

    border: none;
    cursor: pointer;
    user-select: none;
    text-transform: uppercase;

    background-color: ${props => BUTTON.theme[props.theme].backgroundColor}; ;
    border-radius: ${props => BUTTON.theme[props.theme].borderRadius}; ;

    & svg{
        margin-left: 5px;
    }
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
            background-color: ${colors.secondary};
        }
    }
`;

export const Img = styled.a `
    color: ${props => props.color !== undefined ? props.color : colors.primary};
    padding: 5px;
    border-radius: 50%;

    &:hover{
        background-color: #202020;
    }
`;





