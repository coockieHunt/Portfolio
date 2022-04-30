import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 90%;

    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const PickUp  = styled.div`
    width: 40%;

    @media ${device.laptop} { 
        width: 70%;
    }
`;

export const PickUpText  = styled.div`
    & h1{
        text-align: left;
        font-size: 2em;
        @media ${device.laptop} { 
            text-align: center;
        }
    }

    & p{
        text-align: left;
        font-size: 20px;
        width: 75%;

        font-size: 100;
        font-weight: 400;

        @media ${device.laptop} { 
            text-align: center;
            width: 100%;
        }
    }
`;


export const PickUpSide  = styled.div`
    font-size: 10em;
    text-align: center;
    user-select:none;

`;

export const PickUpLogo = styled.img `
    height: 350px;
    fill: red;
    filter: ${colors.primary_filter};

    @media ${device.laptop} { 
        display: none;
    }
`;


export const Navigate = styled.div `
    display:flex;
    justify-content: flex-start;
    gap: 5%;
    padding: 30px 0 0 0;

    @media ${device.laptop} { 
        justify-content: center;
    }
`