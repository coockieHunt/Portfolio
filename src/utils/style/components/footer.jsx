// STYLE FOR FOOTER
import styled from "styled-components";
import colors from "../library/color";

import { device } from "../library/size";



export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    @media ${device.laptop} { 
        flex-direction: column;
    }
`;

export const Block = styled.div`
    padding: 10px;
    color: ${colors.grey};
    text-align: center;
`;

