export const createControl = (config, validation) => {
    return {
        ...config,
        validation,
        valid: !validation,
        touched: false,
        value: ''
    }
}

export const validate = (val, validation = null) => {
    if(!validation) {
        return true;
    }

    let isValid = true;

    if(validation) {
        isValid = val.trim() !== '' && isValid
    }

    return isValid;
}

export const validateForm = (formControls) => {
    let isFormValid = true;

    for (let control in formControls) {
        if(formControls.hasOwnProperty(control)) {
            isFormValid = formControls[control].valid && isFormValid;
        }
    }

    return isFormValid;
}