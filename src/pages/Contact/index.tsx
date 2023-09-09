/* eslint-disable no-sequences */
import './style.scss'

import { useForm, SubmitHandler } from "react-hook-form"
import { TypeInputs } from '../../types/formType'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

import { useData } from '../../Hooks/useData';
import { toast } from 'react-toastify';

const keys = {
    serviceId: process.env.REACT_APP_SERVICE_ID ? process.env.REACT_APP_SERVICE_ID : '',
    templateId: process.env.REACT_APP_TEMPLATE_ID ? process.env.REACT_APP_TEMPLATE_ID : '',
    publicKey: process.env.REACT_APP_PUBLIC_KEY ? process.env.REACT_APP_PUBLIC_KEY : ''
}

export const Contact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<TypeInputs>();
    const formRef = useRef<HTMLFormElement>(null);
    const {isSubmiting, setIsSubmiting} = useData()

    const onSubmit: SubmitHandler<TypeInputs> = () => {
        setIsSubmiting(true)
        setTimeout(() => {
            try {    
                emailjs.sendForm(keys.serviceId, keys.templateId, formRef.current!, keys.publicKey)
                toast.success('Email successfully sent')
            } catch (error) {
                toast.error(`Error to send email: ${error}`)   
            } finally{
                setIsSubmiting(false)
            }
        }, 2000)
    }

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h3 className="contact-title">contact me! 🤗</h3>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)} ref={formRef}>
                    <div className="form-input">
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" {...register('user_name', {
                                required: "Name is required",
                                minLength: {
                                    value: 3,
                                    message: "The min lenght is 3 letters"
                                },
                                maxLength: {
                                    value: 60,
                                    message: "The max lenght is 60 letters"
                                }
                            })} />
                            <span>{errors.user_name?.message}</span>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='email@email.com' {...register('user_email', {
                                required: {
                                    value: true,
                                    message: "Email is required"
                                },
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "Insert a valid email"
                                }
                            })} />
                            <span>{errors.user_email?.message}</span>
                        </div>
                    </div>
                    <div className='messageContainer'>
                        <label htmlFor="message">message</label>
                        <textarea id="message" rows={10} {...register('message', {
                                required: "Message is required",
                                minLength: {
                                    value: 3,
                                    message: "The min lenght is 10 letters"
                                },
                                maxLength: {
                                    value: 300,
                                    message: "The max lenght is 300 letters"
                                }
                            })}></textarea>
                        <span>{errors.message?.message}</span>
                    </div>
                    <button className={`sendBtn ${isSubmiting ? 'loading' : ''}`}>send</button>
                </form>
            </div>
        </div>
    )
}