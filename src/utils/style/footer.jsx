// STYLE FOR FOOTER
import styled from "styled-components";
import colors from "./color";


export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 5em;
`;

export const FooterBlock = styled.div`
    padding: 10px;
    color: ${colors.grey};
    text-align: center;
`;

