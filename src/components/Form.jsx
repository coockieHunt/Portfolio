import React from 'react';
import {
    FormInput,
    FormTextArea,
    FormElement,
    FormLabel
} from '../utils/style/library/form';

/**
 * * Compenent For add input text
 * 
 * ? if label not define the label will not be added
 * 
 * @param name Var name of input
 * @param value Value default input vaule
 * @param onChange Callback onChange function
 * @param label Dysplayer text on label
 */
export class FormInputText extends React.Component{
    
    // ? If label label not define, skip render label element
    IfLabel(label, name){
        if(label !== undefined){
            return <FormLabel htmlFor={name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label, name)

        return(
            <FormElement>
                {LabelElement}
                <FormInput name={name} type="text" placeholder={placeHolder} value={value} onChange={onChange}/>
            </FormElement>
        )
    }
}

/**
 * * Compenent For add input email
 * 
 * ? if label not define the label will not be added
 * 
 * @param name Var name of input
 * @param value Value default input vaule
 * @param onChange Callback onChange function
 * @param label Dysplayer text on label
 */
 export class FormInputEmail extends React.Component{
    
    // ? If label label not define, skip render label element
    IfLabel(label, name){
        if(label !== undefined){
            return <FormLabel htmlFor={name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label, name)

        return(
            <FormElement>
                {LabelElement}
                <FormInput name={name} type="email" placeholder={placeHolder} value={value} onChange={onChange}/>
            </FormElement>
        )
    }
}

/**
 * * Compenent For add text area
 * 
 * ? if label not define the label will not be added
 * 
 * @param name Var name of input
 * @param value Value default text area vaule
 * @param onChange Callback onChange function
 * @param label Dysplaye text on text arta
 */
 export class FormInputTextArea extends React.Component{
    
    // ? If label label not define, skip render label element
    IfLabel(label, name){
        if(label !== undefined){
            return <FormLabel htmlFor={name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label, name)

        return(
            <FormElement>
                {LabelElement}
                <FormTextArea name={name}  placeholder={placeHolder} value={value} onChange={onChange}/>
            </FormElement>
        )
    }
}

