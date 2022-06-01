export const validateName = value => {
    if (!value) {
        return 'common.validators.namePresence'
    }
    return null
}

export const validateEmail = value => {
    if (!value) {
        return 'common.validators.emailPresence'
    }
    if (!/^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}/i.test(value)) {
        return 'common.validators.emailFormat'
    }
    return null
}

export const validateSubject = value => {
    if (!value) {
        return 'common.validators.subjectPresence'
    }
    return null
}

export const validateMessage = value => {
    if (!value) {
        return 'common.validators.messagePresence'
    }
    return null
}

