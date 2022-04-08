import styled from "styled-components";
import colors from "./color";

export const FormGroupe = styled.form `
    display: flex;
    flex-direction: column;

    height: auto;
`;

export const FormInline = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    input{
        width: 100%;
    }
`

export const FormInput = styled.input `
    margin: 15px 0 0 0;
    padding: 10px 5px 10px 5px;
    &:focus{
        outline-color: ${colors.primary};
    }
`;

export const FormTextArea = styled.textarea `
    margin: 15px 0 0 0;
    padding: 10px 5px 10px 5px;
    height: 45vh;
    resize: none;
    &:focus{
        outline-color: ${colors.primary};
    }
`;

export const FormSubmit = styled.input`
    transform: translateY(100%);
    display: inline-block;
`;


