import React from 'react';
import {
    FormInput,
    FormTextArea,
    FormElement,
    FormLabel
} from './style';

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
    
    constructor(props){
        super(props)

        this.IfLabel = this.IfLabel.bind(this);
    }

    // ? If label label not define, skip render label element
    IfLabel(label){
        if(label !== undefined){
            if(this.props.required !== undefined){label = label + " *"}
            return <FormLabel htmlFor={this.props.name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label)

        let placeHolderElement = placeHolder
        if(this.props.required !== undefined && label === undefined){placeHolderElement = placeHolder + " *"}
        
        return(
            <FormElement>
                {LabelElement}
                <FormInput name={name} type="text" placeholder={placeHolderElement} value={value} onChange={onChange}/>
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
    
    constructor(props){
        super(props)

        this.IfLabel = this.IfLabel.bind(this);
    }

    // ? If label label not define, skip render label element
    IfLabel(label){
        if(label !== undefined){
            if(this.props.required !== undefined){label = label + " *"}
            return <FormLabel htmlFor={this.props.name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label)

        let placeHolderElement = placeHolder
        if(this.props.required !== undefined && label === undefined){placeHolderElement = placeHolder + " *"}

        return(
            <FormElement>
                {LabelElement}
                <FormInput name={name} type="email" placeholder={placeHolderElement} value={value} onChange={onChange}/>
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
    
    constructor(props){
        super(props)

        this.IfLabel = this.IfLabel.bind(this);
    }

    // ? If label label not define, skip render label element
    IfLabel(label){
        if(label !== undefined){
            if(this.props.required !== undefined){label = label + " *"}
            return <FormLabel htmlFor={this.props.name}>{label}</FormLabel>
        }

        return <FormLabel>&#x200B;</FormLabel>
    }

    render() {
        const {name, value, onChange, label, placeHolder} = this.props;

        let LabelElement = this.IfLabel(label)
        
        let placeHolderElement = placeHolder
        if(this.props.required !== undefined && label === undefined){placeHolderElement = placeHolder + " *"}

        return(
            <FormElement>
                {LabelElement}
                <FormTextArea name={name}  placeholder={placeHolderElement} value={value} onChange={onChange}/>
            </FormElement>
        )
    }
}

