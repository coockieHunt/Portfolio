import styled from "styled-components";
import colors from "../../library/color";
import { device } from "../../library/size";

export const HomePageContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 720px;


    @media ${device.laptop} { 
        flex-direction: column;
    }

    @media ${device.tablet} { 
    }

    @media ${device.mobileM} { 
    }
`;

export const HomePickUp  = styled.div`
    color: ${colors.primary};
    font-size: 2em;
    text-align: center;
    user-select: none;

`;

export const HomePickUpSide  = styled.div`
    font-size: 10em;
    text-align: center;
    user-select:none;
`;

export const HomePickUpLogo = styled.img `
    height: 350px;
    fill: red;
    filter: ${colors.primary_filter};
`;

export const BackLineSpan = styled.span `
    background-image: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    color: ${colors.white};
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline;
    padding: 4px;
    margin-top:100px;
`