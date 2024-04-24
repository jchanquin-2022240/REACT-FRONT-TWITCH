export const validatePassword = (password) => {
    const regex = /^\${6,12}$/

    return regex.test(password)
}

export const passwordValidateMessage = "Las contraseñas deben tener entre 6 y 12 caracteres sin espacios"