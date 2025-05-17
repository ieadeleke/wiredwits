import * as yup from "yup";

export const signUpValidator = yup.object().shape({
    email_address: yup.string().email('Email address is not valid').required('Email address field is required'),
    password: yup.string().min(6).required('Password field is required'),
    first_name: yup.string().min(2).required('First name field is required'),
    last_name: yup.string().min(2).required('Last name field is required'),
    phone: yup.string().min(9).optional()
})

export const signInValidator = yup.object().shape({
    email_address: yup.string().email('Email address is not valid').required('Email address field is required'),
    password: yup.string().min(6).required('Password field is required')
})

export const changePasswordValidator = yup.object().shape({
    curr_password: yup.string().min(6, 'Current password can not be less than 6 characters').required('Please enter your current password'),
    password: yup.string().min(6, 'Password can not be less than 6 characters').required('Please enter your new password')
})

export const summaryQuestionValidator = yup.object().shape({
    comment: yup.string().required('Please enter question')
})
