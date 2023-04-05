import './style.scss'

import { useState } from "react"
import { TextField, Button } from "@mui/material"

import {inputProps} from '../../styles/mui/theme'

export const Contact = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('')
    const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

    const handleValidEmail = (value: string) => {
        setEmail(value)
        const validEmail = /\S+@\S+\.\S+/.test(value);
        setIsValidEmail(validEmail)
    }

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        if (isValidEmail) {
            console.log('Validado')
        }
    }

    return (
        <div className="contact-container">
            <div className="contact-content">
                <h3 className="contact-title">contact me! 🤗</h3>
                <form className="contact-form" onSubmit={() => console.log('Submitado')}>
                    <div className="form-input">
                        <TextField
                            label="name"
                            className='input input_name'
                            variant="standard"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            InputProps={{ ...inputProps }}/>
                        <TextField
                            color='primary'
                            className='input input_email'
                            label="email"
                            variant="standard"
                            value={email}
                            onBlur={e => handleValidEmail(e.target.value)}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            error={!isValidEmail}
                            helperText={!isValidEmail ? 'invalid email' : ''}
                            InputProps={{ ...inputProps }}
                            sx={{
                                '& label.Mui-focused': {
                                  color: 'grey',
                                },
                                '& .MuiInput-underline:after': {
                                  borderBottomColor: 'grey',
                                },
                              }}
                        />
                    </div>
                    <TextField
                        label="message"
                        className='input input_message'
                        variant="outlined"
                        color='primary'
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        margin="normal"
                        fullWidth
                        multiline
                        rows={4}
                        InputProps={{ ...inputProps }}
                    />
                    <Button type="submit" variant="outlined" onClick={handleSubmit}>send</Button>
                </form>
            </div>
        </div>
    )
}