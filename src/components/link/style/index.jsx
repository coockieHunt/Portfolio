import {
    NavLink
} from 'react-router-dom';
import styled from "styled-components";
import colors from "../../../utils/style/library/color";


export const Link = styled(NavLink)`
    text-decoration: none;
    color: ${colors.grey};
    &.active {
        color: ${props => props.className === "accentuated" ? "white !important" : colors.primary}; ;
        background-color: ${props => props.className === "accentuated" ? colors.primary : null}; ;
    }

    &.accentuated{
        box-shadow:inset 0px 0px 0px 2px ${colors.primary};
        color: ${colors.primary} ;
        padding: 10px 10px 10px 10px;
    }

    &:hover{
        color: ${colors.secondary};
    }
`;


export const Img = styled.img `
    height: 30px;
    cursor: ${props => props.href !== undefined ? 'pointer' : null};
`;