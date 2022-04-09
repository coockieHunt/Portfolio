import styled from "styled-components";
import colors from "./color";

// ? CONFIG STYLE FORM
const FormFocusColor = colors.secondary;
const BorderSize = '1px';
const FormColor = colors.grey;
const LabelPadding = '10px';

// ? component style

export const FormLabel = styled.label`
    padding: ${LabelPadding} 0 ${LabelPadding} 0;

    &:first-letter{
        text-transform: uppercase;
    }
`;

export const FormInput = styled.input `
    padding: 10px 5px 10px 5px;
    outline: none;
    border: ${BorderSize} solid ${FormColor};
    width: 100%;
    
    border-radius: 3px;
    &:focus{
        border: ${BorderSize} solid ${FormFocusColor};
    }
`;

export const FormTextArea = styled.textarea `
    padding: 10px 5px 10px 5px;
    resize: none;
    height: 400px;
    outline: none;
    border: ${BorderSize} solid ${FormColor};
    border-radius: 3px;

    &:focus{
        border: ${BorderSize} solid ${FormFocusColor};
    }
`;


export const FormSubmit = styled.input`
    padding : 15px;
    margin-top: 15px;
    background-color: ${colors.secondary};
    border: none;
    color: ${colors.white};
    text-transform: uppercase;
    border-radius: 3px;
`;

// ? Utils element

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

export const FormElement = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

`;





