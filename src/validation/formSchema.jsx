import * as Yup from "yup";


const formSchema = Yup.object().shape({
    username: Yup
        .string()
        .min(3, 'Username must be at least 3 characters long.')
        .required('Username is Required'),
    password: Yup
        .string()
        .min(3, 'Password must be at least 3 characters long.')
        .required('Password is Required')
})


export default formSchema