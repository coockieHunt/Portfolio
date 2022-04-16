// STYLE FOR Header
import styled from "styled-components";
import colors from "../library/color";
import {
    NavLink
} from 'react-router-dom';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0 20px 0;
`;

export const HeaderTitle = styled.div`
    padding: 10px;
    color: ${colors.primary};
`;

export const HeaderLogo = styled.img `
    filter: ${colors.primary_filter};
    height: 15px;
`;


export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.grey};
    padding: 10px 15px 10px 15px;
    &:hover{
        border-radius: 20px;
        box-shadow:inset 0px 0px 0px 3px ${colors.primary};
        color: ${colors.secondary};
    }
`;


export const HeaderNav = styled.ul`
    display: flex;
`;

export const HeaderNavElement = styled.li`
    padding: 10px;
    color: ${colors.secondary};
    font-weight: bold;
    &:hover{
        color: ${colors.primary};
    }
`;




