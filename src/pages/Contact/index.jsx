import React from 'react';

import {
    ContactContainer,
    ContactFormulaire,
    ContactSide,
    ContactTitle,
    ContactContent
}from "../../utils/style/page/contact/style"

import {
    FormGroupe,
    FormInline,
    FormSubmit,
}from "../../utils/style/library/form"

import {
    FormInputText,
    FormInputEmail,
    FormInputTextArea
} from "../../components/Form"

class ContactForm extends React.Component {
    DefaultValue = {
        firsName: '',
        lastname: '',
        email: '',
        message: ''
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
                            <FormInputText 
                                name="firsName"
                                value={this.state.firsName} 
                                onChange={this.handleChange}
                                label="Prenon"
                                placeHolder="jhon"
                                required
                            /> 
                            <FormInputText 
                                name="lastname" 
                                value={this.state.lastname} 
                                onChange={this.handleChange}
                                label="nom"
                                placeHolder="doe"
                            /> 
                        </FormInline>
                       
                        <FormInputEmail 
                            name="email" 
                            value={this.state.email} 
                            onChange={this.handleChange}
                            placeHolder="secteur@domaine.fr"
                            label= "email"
                            required
                        />

                        <FormInputTextArea 
                            name="message"
                            value={this.state.message} 
                            onChange={this.handleChange}
                            label= "message"
                            placeHolder="bonjour, &#10;je vous contact pour ... &#10; cordialment jhon doe"
                            required
                        />
                        <FormInline>
                            <FormSubmit type="submit" value="envoyer" />
                        </FormInline>
                    </FormGroupe>
                </ContactFormulaire>
                <ContactSide>
                    <ContactTitle>Title</ContactTitle>
                    <ContactContent>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </ContactContent>
                    <ContactTitle>Title</ContactTitle>
                    <ContactContent>
                        Donec ut risus non ipsum venenatis semper. Aliquam vel dictum lectus, non ultrices tortor. Sed gravida viverra felis ut hendrerit. Ut iaculis egestas turpis, in lacinia nisl consectetur eget. Sed a ullamcorper risus, non luctus mauris. Nam finibus, sem at accumsan interdum, diam lorem finibus augue, eu faucibus augue augue nec purus. Duis interdum, lectus vel pellentesque suscipit, est lorem blandit sapien, eget luctus elit nibh id erat. Praesent molestie sapien urna, nec hendrerit ligula eleifend vitae. Nullam non faucibus ex. Vivamus convallis diam posuere ante blandit, sit amet sodales nisl tincidunt.
                    </ContactContent>
                

                </ContactSide>
            </ContactContainer>
        )
    }
}




export default ContactForm