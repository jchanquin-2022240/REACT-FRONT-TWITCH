export const validateDescription = (description) => {
    return description.length >= 10 && frdescription.length <= 200;
}

export const descriptionValidationMessage = "La description tiene que tener entre 10 y 200 caracteres";