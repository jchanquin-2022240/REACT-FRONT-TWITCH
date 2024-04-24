export const validate = (url) => {
    const regex = /^(ftp|http|https):\/\/[^ "]+$/;

    return regex.test(url);
}

export const avatarUrlValidationMessage = "La URL del avatar no es válida";