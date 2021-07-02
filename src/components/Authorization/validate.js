export const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    else if (values.name.length > 16) {
        errors.name = 'Must be 16 characters or less'
    }
    else if (!/^[А-Я][А-Яа-я\s]+$/.test(values.name)) {
        errors.name = 'Use only Cyrillic characters'
    }

    if (!values.email) {
        errors.email = 'Required'
    }
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }

    if (!/^(\+7|8)[\- ]?\d{3}[\- ]?\d{3}[\- ]?\d{2}[\- ]?\d{2}$/.test(values.phone) && values.phone) {
        errors.phone = 'Invalid phone number'
    }

    if (!values.gender) {
        errors.gender = 'Choose gender'
    }

    if (values.netWorks.length === 0) {
        errors.netWorks = 'Сhoose at least one'
    }

    if (!/^\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*\S+\s*$/.test(values.message)) {
        errors.message = 'Must be 10 characters or more'
    }

    return errors
}