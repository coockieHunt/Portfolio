import styled from "styled-components";
import colors from "./color";

export const FormGroupe = styled.form `
    display: flex;
    flex-direction: column;
    height: 100%;
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
    outline: none;
    border: 1px solid ${colors.grey};
    border-radius: 3px;

    &:focus{
        border: 1px solid ${colors.secondary};
    }
`;

export const FormTextArea = styled.textarea `
    margin: 15px 0 0 0;
    padding: 10px 5px 10px 5px;
    height: 45vh;
    resize: none;

    outline: none;
    border: 1px solid ${colors.grey};
    border-radius: 3px;

    &:focus{
        border: 1px solid ${colors.secondary};
    }
`;




export const FormCta = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const FormSubmit = styled.input`
    margin: 10px 0 0 0;
    padding : 15px;
    background-color: ${colors.secondary};
    border: none;
    color: ${colors.white};
    text-transform: uppercase;
    border-radius: 3px;
`;


