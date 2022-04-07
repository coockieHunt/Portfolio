// STYLE FOR Header
import styled from "styled-components";
import colors from "./color";
import {
    NavLink
} from 'react-router-dom';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
`;

export const HeaderTitle = styled.div`
    padding: 10px;
    font-weight: bold;
    color: ${colors.primary};
    font-size: 2em;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: ${colors.grey};
    &:hover{
        color: ${colors.primary};
        text-decoration: underline;
    }
    color: ${props => 
        props.className === 'active' ? 'red' : 'yellow'
    };
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




