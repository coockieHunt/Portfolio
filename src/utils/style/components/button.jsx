import styled from "styled-components";
import colors from "../library/color";

export const Button = styled.button`
    padding : 15px;
    margin-top: 15px;
    background-color: ${colors.primary};
    border: none;
    color: ${colors.white};
    text-transform: uppercase;
    border-radius: 3px;
    cursor: pointer;

    &:disabled{
        background-color: ${colors.grey};
        cursor: not-allowed;
    }

    
    &:hover{
        background-color: ${colors.secondary}!important;
    }

    &.warning{
        background-color: yellow;
    }
`;

