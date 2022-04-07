// STYLE FOR FOOTER
import styled from "styled-components";
import colors from "../library/color";

import { device } from "../library/size";



export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;

    @media ${device.laptop} { 
        flex-direction: column;
    }
`;

export const FooterBlock = styled.div`
    padding: 10px;
    color: ${colors.grey};
    text-align: center;
`;

