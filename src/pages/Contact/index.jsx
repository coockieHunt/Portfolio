import React from 'react';
import { RiSendPlane2Line } from 'react-icons/ri';

import {
    ContactContainer,
    ContactFormulaire,
    ContactSide,
}from "../../utils/style/page/contact/style"

import {
    FormInput,
    FormGroupe,
    FormInline,
    FormTextArea,
    FormSubmit
}from "../../utils/style/library/form"

class ContactForm extends React.Component {
    DefaultValue = {
        firsName: 'first name',
        secondaryName: 'secondary name',
        email: 'test@gmail.com',
        message: 'ceci et le contenue du message'
    }


    constructor(props){
        super(props)

        this.state = this.DefaultValue;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log(JSON.stringify(this.state))

        this.setState(this.DefaultValue);
    }

    render() {
        return(
            <ContactContainer>
                <ContactFormulaire>
                    <h1>Contact US</h1>
                    <FormGroupe onSubmit={this.handleSubmit}>
                        <FormInline>
                            <FormInput name="firsName" type="text" value={this.state.firsName} onChange={this.handleChange}/>
                            <FormInput name="secondaryName" type="text" value={this.state.secondaryName} onChange={this.handleChange}/>
                        </FormInline>
                       
                        <FormInput name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                        <FormTextArea name="message"  value={this.state.message} onChange={this.handleChange}/>
                        <FormInline>
                            <FormSubmit type="submit" value="envoyer" />
                            <FormSubmit type="submit" value="envoyer" />
                        </FormInline>

                    </FormGroupe>
                </ContactFormulaire>
                <ContactSide>
                    my formulaire
                </ContactSide>
            </ContactContainer>
        )
    }
}




export default ContactForm