import React from 'react';
import { Form, Field, FormSpy } from 'react-final-form';
import createDecorator from 'final-form-focus';
import { Typography, TextField, Button}  from '@material-ui/core';


const sleep = ms => new Promise (resolve => setTimeout(resolve, ms))
const showResults = async values => {
    await sleep (500) 
    window.alert(JSON.stringify(values, undefined, 2));
}

const focustOnError = createDecorator()
const required = value => (value ? undefined : 'Required');


const FinalForm = () => (
    <Form 
        onSubmit={showResults}
        decorators={[focustOnError]}
        subscription={{
            submitting: true
        }}
    >
       

        {({ handleSubmit, submitting }) => (


        <form 
            style = {{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}

            onSubmit = { event => {
                    handleSubmit(event)
            }}
        >

                <div> 

                <Field 
                    name='firstName' 
                    placeholder='First Name'
                    validate={ required }
                    subscription={{
                        value: true,
                        active: true,
                        error: true,
                        touched: true
                    }}
                >
                    {
                        ({input, meta, placeholder}) => (

                            <div 
                                style={{ 
                                    position: 'relative',
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center' ,
                                    background: meta.active ? '#ccffff' : 'transparent'
                                }}
                            >

                                <TextField 
                                    {...input} 
                                    placeholder={placeholder}  
                                    label="First Name"
                                    variant='outlined'
                                    margin='dense'
                                />

                                {meta.error && meta.touched && 

                                    <span 
                                        style={{ 
                                            position: 'absolute',
                                            right: '-40%',
                                            top: '30%',
                                            color: "red", 
                                            padding: '0 10px' 
                                        }}  
                                    >
                                        <Typography variant='body1'>
                                            {meta.error}
                                        </Typography>
                                    </span>

                                }

                            </div>
                        )
                    }

                </Field>

            </div>

            <div> 

                <Field 
                    name='secondName' 
                    placeholder='Second Name'
                    validate={ required }
                    subscription={{
                        value: true,
                        active: true,
                        error: true,
                        touched: true
                    }}
                >
                    {
                        ({input, meta, placeholder}) => (

                            <div 
                                style={{ 
                                    position: 'relative',
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    background: meta.active ? '#ccffff' : 'transparent'
                                }}
                            >

                                <TextField 
                                    {...input} 
                                    placeholder={placeholder}  
                                    label="Second Name"
                                    variant='outlined'
                                    margin='dense'
                                />

                                {meta.error && meta.touched &&

                                    <span 
                                        style={{ 
                                            position: 'absolute',
                                            right: '-40%',
                                            top: '30%',
                                            color: "red", 
                                            padding: '0 10px' 
                                        }} 
                                    >
                                        <Typography variant='body1'>
                                            {meta.error}
                                        </Typography>
                                    </span>

                                }

                            </div>

                        )
                    }

                </Field>

            </div>

            <div> 

                <Field 
                    name='email' 
                    placeholder='Email'
                    validate={ required }
                    subscription={{
                        value: true,
                        active: true,
                        error: true,
                        touched: true
                    }}
                >
                    {
                        ({input, meta, placeholder}) => (

                            <div 
                                style={{ 
                                    position: 'relative',
                                    display: 'flex', 
                                    flexDirection: 'column', 
                                    alignItems: 'center',
                                    background: meta.active ? '#ccffff' : 'transparent' 
                                }}
                            >

                                <TextField 
                                    {...input} 
                                    placeholder={placeholder}  
                                    label="Email"
                                    type="email"
                                    variant='outlined'
                                    margin='dense'
                                />

                                {meta.error && meta.touched &&
                                    <span 
                                        style={{ 
                                            position: 'absolute',
                                            right: '-40%',
                                            top: '30%',
                                            color: "red", 
                                            padding: '0 10px' 
                                        }} 
                                    >
                                        <Typography variant='body1'>
                                            {meta.error}
                                        </Typography>
                                    </span>
                                }

                            </div>
                        )
                    }

                </Field>

            </div>
            
            
            <Button 
                type='submit'
                variant='contained'
                color='primary'
                disabled={submitting}
                style={{
                    margin: '10px 0 10px 0'
                }}
            >
                Submit
            </Button>
            
            <FormSpy subscription={{ values: true}}>

                {({values}) => 
                    <pre 
                        style={{
                            minHeight:'5rem',
                            width: '100%',
                            background: 'lightgrey',
                            border: '5px solid grey'
                        }}
                    > 
                        {JSON.stringify(values, undefined, 2)} 
                    </pre>
                }

            </FormSpy>

        </form>
    )}

    </Form>
)

export default FinalForm