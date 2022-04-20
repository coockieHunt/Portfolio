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
    color: ${colors.primary};
    font-size: 2em;
    text-align: center;
    user-select: none;
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

export const BackLineSpan = styled.span `
    background-image: linear-gradient(45deg, ${colors.primary}, ${colors.secondary});
    color: ${colors.white};
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline;
    padding: 4px;
    margin-top:100px;

    @media ${device.laptop} { 
        margin-top:0px;
    }
`