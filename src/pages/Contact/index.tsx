import './style.scss'

import {useForm, SubmitHandler} from "react-hook-form"
import {TypeInputs} from '../../types/formType'

export const Contact = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm<TypeInputs>();
    const onSubmit: SubmitHandler<TypeInputs> = data => console.log(data)

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h3 className="contact-title">contact me! 🤗</h3>
                <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-input">
                        <div>
                            <label htmlFor="name">name</label>
                            <input type="text" {...register('name')}/>
                        </div>
                        <div>
                            <label htmlFor="email">email</label>
                            <input type="email" placeholder='email@email.com' required {...register('email')}/>
                        </div> 
                    </div>
                    <div className='messageContainer'>
                        <label htmlFor="message">message</label>
                        <textarea name="message" id="message" rows={10} required></textarea>  
                    </div>
                    <button className='sendBtn'>send</button>
                </form>
            </div>
        </div>
    )
}