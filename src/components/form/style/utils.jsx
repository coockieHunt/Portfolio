import styled from "styled-components";

export const FormGroupe = styled.form `
    display: flex;
    flex-direction: column;
    height: 100%;
`;

export const FormInline = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    gap: 10px;

    
    input{
        width: 100%;
    }
`