import * as Yup from "yup";


const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(5, 'Username must be at least 5 characters long.')
        .required('Username is Required'),
    primaryemail: Yup
        .string()
        .email("Must be a valid email address.")
        .required("Must include email address."),
    password: Yup
        .string()
        .min(5, 'Password must be at least 5 characters long.')
        .required('Password is Required')
})


export default formSchema