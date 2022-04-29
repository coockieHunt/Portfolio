import {
    NavLink
} from 'react-router-dom';
import styled from "styled-components";
import colors from "../../../utils/style/library/color";


export const Link = styled(NavLink)`
    text-decoration: none;
    
    color: ${colors.grey};

    & svg{
        height: 100%;
        float: left;
        margin: 0 3px 0 0;
    }

    &.active {
        color: ${props => props.className === "accentuated" ? "white !important" : colors.primary}; ;
        background-color: ${props => props.className === "accentuated" ? colors.primary : null}; ;
    }

    &.accentuated{
        box-shadow: inset 0px 0px 0px 2px ${colors.primary};
        color: ${colors.primary} ;
        padding: 10px;
        border-radius: 3px;
    }

    &:hover{
        color: ${colors.secondary};
    }
`;


export const Img = styled.img `
    cursor: ${props => props.href !== undefined ? 'pointer' : null};
`;