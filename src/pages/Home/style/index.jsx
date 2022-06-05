import styled from "styled-components";
import colors from "../../../utils/style/library/color";
import { device, device_Height } from "../../../utils/style/library/size";

// MAIN
export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;


//HELLO SECTION
export const Hello = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 95vh;
    
    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        height: 74vh;
    }
    
`

export const PickUp  = styled.div`

    @media ${device.laptop} { 
        width: 70%;
    }
`;

export const PickUpText  = styled.div`
    & h1{
        text-align: left;
        margin-bottom: 10px;
        line-height: 1.3em;

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

//IMG
export const SkillImg = styled.img``

export const TextSkill = styled.div`
    width: 50%;
    padding: 50px 0 0 70px;

    @media ${device_Height.tablet} {
        width: 90%;
        padding: 20px 0 0 20px;
    }

    & h1{
        font-size: 40px;
    }

    & p{
        font-size: 18px;
        font-weight: lighter;
    }

    & ul li{
        font-size: 22px;
        font-weight: lighter;
        margin-top: 20px;
    }
`
