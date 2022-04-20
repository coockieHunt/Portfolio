import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { BUTTON } from "../../../config"

export const Button = styled.button`
    padding : 15px;
    margin-top: 15px;
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

