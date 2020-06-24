import * as Yup from 'yup'

const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(5, 'USERNAME MUST BE AT LEAST 5 CHARACTERS LONG')
        .required('USERNAME IS REQUIRED'),
    primaryemail: Yup
        .string()
        .email('MUST BE A VALID EMAIL ADDRESS')
        .required('EMAIL IS REQUIRED'),
    password: Yup
        .string()
        .min(5, 'PASSWORD MUST BE AT LEAST 5 CHARACTERS LONG')
        .required('PASSWORD IS REQUIRED'),
    ailments: Yup
        .string()
        .required('MUST SELECT AILMENT'),
    effects: Yup
        .string()
        .required('MUST SELECT EFFECT'),
})

export default formSchema