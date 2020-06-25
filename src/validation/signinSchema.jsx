import * as Yup from 'yup'

const signinSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(5, 'USERNAME MUST BE AT LEAST 5 CHARACTERS LONG')
        .required('USERNAME IS REQUIRED'),
    password: Yup
        .string()
        .min(5, 'PASSWORD MUST BE AT LEAST 5 CHARACTERS LONG')
        .required('PASSWORD IS REQUIRED'),
})

export default signinSchema