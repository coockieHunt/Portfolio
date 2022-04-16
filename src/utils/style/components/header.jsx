// STYLE FOR Header
import styled from "styled-components";
import colors from "../library/color";
import {
    NavLink
} from 'react-router-dom';


export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 20px 0;
`;

export const Title = styled.div`
    padding: 10px;
    color: ${colors.primary};
`;

export const Logo = styled.img `
    filter: ${colors.primary_filter};
    height: 15px;
`;


export const StyledLink = styled(NavLink)`
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


export const Nav = styled.ul`
    display: flex;
`;

export const NavElement = styled.li`
    padding: 10px;
    color: ${colors.secondary};
    font-weight: bold;
    &:hover{
        color: ${colors.primary};
    }
`;




