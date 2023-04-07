import './style.scss'

import { useForm, SubmitHandler } from "react-hook-form"
import { TypeInputs } from '../../types/formType'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const keys = {
    serviceId: process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : '',
    templateId: process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : '',
    publicKey: process.env.REACT_APP_PUBLIC_KEY ? process.env.REACT_APP_PUBLIC_KEY : ''
}

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const formRef = useRef<HTMLFormElement>(null);

    const onSubmit: SubmitHandler<TypeInputs> = (data) => {
        emailjs.sendForm(keys.serviceId, keys.templateId, formRef.current!, keys.publicKey)
            .then(res => {
                console.log('SUCCESS!', res.status, res.text);
            }, err =>  {
                console.log('FAILED...', err);
            });
    }

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h3 className="contact-title">contact me! 🤗</h3>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div className="form-input">
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" {...register('name')} />
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='email@email.com' required {...register('email')} />
                        </div>
                    </div>
                    <div className='messageContainer'>
                        <label htmlFor="message">message</label>
                        <textarea id="message" rows={10} required {...register('message')}></textarea>
                    </div>
                    <button className='sendBtn'>send</button>
                </form>
            </div>
        </div>
    )
}