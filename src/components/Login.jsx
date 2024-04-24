import { useState } from 'react';
import { Logo } from "./Logo"
import { Input } from "./Input"
import {
  emailValidationMessage,
  passwordValidateMessage,
  validateEmail,
  validatePassword,
} from '../shared/validatiors'
import { useLogin } from '../shared/hooks/useLogin'

export const Login = ({switchAuthHandler}) => {
  const {login, isLoading} = useLogin()

  const [formState, setFormState] = useState({
    email: {
      value: '',
      isValid: false,
      showError: false
    },
    password: {
      value: '',
      isValid: false,
      showError: false
    }
  })

  const handleInputChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        value
      }
    }))
  }

  const handleInputValidationOnBlur = (value, field) => {
    let isValid = false
    switch (field) {
      case 'email':
        isValid = validateEmail(value)
        break;
      case 'password':
        isValid = validatePassword(value)
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isValid,
        showError: !isValid
      }
    }))
  };

  const  handleLogin = (event) => {
    event.preventDefault()

    login(formState.email.value, formState.password.value)
  }

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid ||  !formState.email.isValid
  return (
    <div className='login-container'>
      <Logo text={'Login kinal Cast'} />
      <form className='auth-form'>
        <Input
          field = 'email'
          label = 'Email'
          value = {formState.email.value}
          onChangeHandler = {handleInputChange}
          type = 'text'
          onBlurHandler = {handleInputValidationOnBlur}
          showErrorMessage = {formState.email.showError}
          validationMessage = {emailValidationMessage}
        
        />
        <Input 
          field = 'password'
          label = 'Password'
          value = {formState.password.value}
          onChangeHandler = {handleInputChange}
          type = 'password'
          onBlurHandler = {handleInputValidationOnBlur}
          showErrorMessage = {formState.password.showError}
          validationMessage = {passwordValidateMessage}
        />
        <button onClick={handleLogin}>
          Log In
        </button>
        </form>
        <span onClick={switchAuthHandler} className='auth-form-switch-label'>
          ¿Aún no tienes cuenta? ¡Regístrate!
        </span>
        
    </div>
  )
}

