import styled from "styled-components";
import { device } from "../../../utils/style/library/size";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;

    @media ${device.laptop} { 
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const CardContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    margin: 15px auto 0 auto;
`

