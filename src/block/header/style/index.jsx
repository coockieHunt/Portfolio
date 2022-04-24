// STYLE FOR Header
import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import {
    NavLink
} from 'react-router-dom';
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px 0 20px;
    user-select: none;

    @media ${device.laptop} { 
        flex-direction: column;
        padding: 10px 0 10px 0;
    }
`;

export const Title = styled.div`
    color: ${colors.primary};

    @media ${device.laptop} { 
        display: flex;
        justify-content: space-between;
        width: 90%;
    }
`;

export const Logo = styled.img `
    height: 30px;
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
    @media ${device.laptop} { 
        flex-direction: column;
        text-align: center;
    }
`;

export const NavElement = styled.li`
    padding: 10px;
    color: ${colors.secondary};
    font-weight: bold;
    &:hover{
        color: ${colors.primary};
    }
`;




