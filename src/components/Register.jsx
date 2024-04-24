import { useState } from 'react';
import { Logo } from "./Logo"
import { Input } from "./Input"
import {
  emailValidationMessage,
  passwordValidateMessage,
  validateUsernameMessage,
  validatePasswordConfir,
  validateUsername,
  validateEmail,
  validatePassword,
  passwordConfirmationMessage,
} from '../shared/validatiors'
import { useRegister } from '../shared/hooks/useRegister'

export const Register = ({switchAuthHandler}) => {
  const {register, isLoading} = useRegister()

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
    },
    passwordConfir : {
      value: '',
      isValid: false,
      showError: false
    },
    username: {
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
      case 'username':
        isValid = validateUsername(value)
        break
      case 'password':
        isValid = validatePassword(value)
        break
        case 'passwordConfir':
          isValid = validatePasswordConfir(formState.password.value, value);
        break;
      default:
        break
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

  const handleRegister = (event) => {
    event.preventDefault()

    register(formState.email.value, formState.password.value, formState.username.value)
  }

  const isSubmitButtonDisabled = isLoading || 
  !formState.password.isValid ||  
  !formState.email.isValid || 
  !formState.username.isValid ||
  !formState.passwordConfir.isValid
  return (
    <div className='register-container'>
      <Logo text={'Register kinal Cast'} />
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
          field = 'username'
          label = 'Username'
          value = {formState.username.value}
          onChangeHandler = {handleInputChange}
          type = 'text'
          onBlurHandler = {handleInputValidationOnBlur}
          showErrorMessage = {formState.username.showError}
          validationMessage = {validateUsernameMessage}
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
        <Input 
          field = 'passwordConfir'
          label = 'PasswordConfir'
          value = {formState.passwordConfir.value}
          onChangeHandler = {handleInputChange}
          type = 'password'
          onBlurHandler = {handleInputValidationOnBlur}
          showErrorMessage = {formState.passwordConfir.showError}
          validationMessage = {passwordConfirmationMessage}
        />
        <button onClick={handleRegister} >
          Register
        </button>
        </form>
        <span onClick={switchAuthHandler} className='auth-form-switch-label' disabled={isSubmitButtonDisabled}>
          ¿Ya tienes una cuenta? ¡Inica sesión acá!
        </span>
        
    </div>
  )
}

