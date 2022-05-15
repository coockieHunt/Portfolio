import React, {useState} from 'react';

import * as Contact from "./style"
import * as FormComponent from "../../components/form/FormComponent"
import * as ButtonConponent from "../../components/button/ButtonComponent"
import * as ModalComponent from "../../components/modal/ModalComponent"

import { 
    IoMdSend, 
    IoIosCall,
    IoIosMail
} from 'react-icons/io';

import {
    ImCross
} from 'react-icons/im'

export const ContactPage = () =>{
    let DefaultValue = {
        firsName: '',
        lastname: '',
        email: '',
        message: ''
    }

    const [output, setOutput] = useState(DefaultValue)

    const handleChange = (e) => {
        setOutput(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        console.log(JSON.stringify(output))
        setOutput(DefaultValue);
        e.preventDefault();
    }

    const handleReset = (e) => {
        setOutput(DefaultValue);
        e.preventDefault();
    }

    return(
        <Contact.Container>
            <ModalComponent.Modal></ModalComponent.Modal>
            <Contact.Box className='background'>
                <Contact.Side>
                    <Contact.Title>Information de Contact</Contact.Title>
                    <Contact.BaseLine>Remplissez ce formulaire, je vous repondrée le plus rapidement possible.</Contact.BaseLine>
                    <Contact.Other>
                        <Contact.Option>
                            <IoIosCall/> 
                            <span>+33 603420204</span>
                        </Contact.Option>
                        <Contact.Option>
                            <IoIosMail/> 
                            <span>pro.jonathan.gleyze@gmail.com</span> 
                        </Contact.Option>
                        

                    </Contact.Other>
                    <p>À votre disposition pour toute question.</p>
                </Contact.Side>
                <Contact.Form>
                    <FormComponent.Groupe >
                        <FormComponent.Inline>
                            <FormComponent.InputText 
                                name="firsName"
                                value={output.firsName} 
                                onChange={handleChange}
                                label="Prenon"
                                placeHolder="jhon"
                                required
                            /> 
                            <FormComponent.InputText 
                                name="lastname" 
                                value={output.lastname} 
                                onChange={handleChange}
                                label="nom"
                                placeHolder="doe"
                            /> 
                        </FormComponent.Inline>
                    
                        <FormComponent.InputEmail 
                            name="email" 
                            value={output.email} 
                            onChange={handleChange}
                            placeHolder="secteur@domaine.fr"
                            label= "email"
                            required
                        />

                        <FormComponent.InputTextArea 
                            name="message"
                            value={output.message} 
                            onChange={handleChange}
                            label= "message"
                            placeHolder="Votre message ..."
                            required
                        />
                        <Contact.CTA>
                            <ButtonConponent.CTA 
                                disabled={false} 
                                type="button"
                                icon= {<ImCross/>}
                                onClick={handleReset}
                                theme= "warning">
                            Annuler
                            </ButtonConponent.CTA>
                            <ButtonConponent.CTA 
                                disabled={false} 
                                type="submit"
                                icon= {<IoMdSend/>}
                                onClick={handleSubmit}>
                            Envoyer
                            </ButtonConponent.CTA>
                        </Contact.CTA>
                    </FormComponent.Groupe>
                </Contact.Form>
            </Contact.Box>
        </Contact.Container>
    )
}
