import React from 'react';
import Button from '../../Components/UI/Button';
import Input from '../../Components/UI/Input/Input';

function validEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Wrong email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                errorMessage: 'Wrong password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    validateControl = (value, validation) => {
        if(!validation) {
            return true;
        }
        let isValid = true;
        if(validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(validation.email) {
           isValid = validEmail(value) && isValid;
        }
        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    onChangeHandler = (e, controlName) => {
        const formControl = {...this.state.formControls};
        const control = { ...formControl[controlName] };
    
        control.value = e.target.value;
        control.touched = true;
        control.valid = this.validateControl(control.value, control.validation);
        formControl[controlName] = control;

        let validForm = true;

        Object.keys(formControl).forEach(name => {
            validForm = formControl[name].valid && validForm
        })

        this.setState({formControls: formControl, isFormValid: validForm});
    }

    renderInputs = () => {
       return Object.keys(this.state.formControls).map((controlName, i) => {
           let control = this.state.formControls[controlName];
            return (
                <Input 
                    key={controlName + i}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    touched={control.touched}
                    label={control.label}
                    shouldValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={e => this.onChangeHandler(e, controlName)}
                />
            )
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        e.target.reset();
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }
    render() { 
        return ( 
            <div className='quiz-component'>  
                <div className='auth'>
                    <h1>Auth</h1> 
                    <form className='auth-form' onSubmit={this.submitHandler}>

                    {this.renderInputs()}    

                    <Button 
                        type='success'
                        onClick={this.loginHandler}
                        disabled={!this.state.isFormValid}
                    >
                        Log in
                    </Button>
                    <Button
                        type='primary'
                        onClick={this.registerHandler}
                        disabled={!this.state.isFormValid}
                    >
                        Register
                    </Button>
                </form> 
                </div>         
            </div>
         );
    }
}
 
export default Auth;