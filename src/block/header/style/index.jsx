// STYLE FOR Header
import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`

    display: flex;
    align-items: center;
    padding: 20px 20px 0px 20px;
    user-select: none;
    width: 100%;
    font-size: 1em;

    @media ${device.laptop} { 
        flex-direction: column;
        padding: 10px 0 10px 0;
    }
`;

export const Title = styled.div`
    color: ${colors.primary};
    padding: 10px;
    display: flex;
    & img{
        margin: auto; 
        height: 19px;
    }

    border-right: 1px solid ${colors.primary_a};

    @media ${device.laptop} { 
        justify-content: space-between;
        width: 100%;
        border-right: 0;

        & img{
            margin: auto 0; 
            height: 19px;
        }
    }
`;

export const Nav = styled.ul`
    display: flex;

    width: 100%;

    justify-content:space-between;
    @media ${device.laptop} { 
        width: 60%;
        height: 90vh;
        margin: 20px 0 0 0;
        padding: 0 0 20px 0;
        flex-direction: column;
        text-align: center;
    }
`;

export const NavLeft = styled.ul`
    display: flex;



    @media ${device.laptop} { 
        margin: auto;
        flex-direction: column;
    }
`;

export const NavRight = styled.ul`
    display: flex;
    
    & ul li a{
        padding-left: 10ox;
    }

    @media ${device.laptop} { 
        width: 60%;
        margin: auto;
        margin-top: 10%;
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




