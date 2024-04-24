export const validateTitle = (title) => {

    return title.length >= 1 && title.length <= 30
}

export const titleValidationMessage = "El titutl debe tener entre 1 y 30 caracteres"