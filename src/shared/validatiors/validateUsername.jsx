export const validateUsername = (username) => {
    const regex = /^\${3,8}$/

    return regex.test(username)
}

export const validateUsernameMessage = "El username tiene que tener entre 3 y 8 caracteres sin espacios"