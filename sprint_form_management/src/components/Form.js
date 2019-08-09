import React from 'react';
import { Form, Field, withFormik } from 'formik';
import axios from 'axios'
import * as Yup from 'yup';

const FormCreator = (values, props) => {

        const {addUserOrRecipe} = props

        return(
                <Form > 
                    <h2>Sign up</h2>

                    <Field type = 'text' placeholder = 'Name' name = 'username' className = 'input-field' data-testid = 'field'/>
                    
                    <Field type = 'email' placeholder = 'Email' name = 'email' className = 'input-field' data-testid = 'field'/> 

                    <Field type = 'password' placeholder = 'Password' name = 'password' className = 'input-field' data-testid = 'field'/> 

                    <label className = 'check-box label'>
                    <Field type = 'checkbox' name = 'terms' checked = {values.terms} data-testid = 'checkbox'/>
                    <p>I have read and agree to the <a href = '#'>Terms of Service</a>.</p>
                    </label>

                    <button type = 'submit'>Submit</button>
                </Form>
        )
    }

const FormikForm = withFormik( {

    mapPropsToValues({ username, email, password, terms }){
        return{
        username : username || '',
        email : email || '',
        password : password || '',
        terms : terms || false
        }
    },

    validationSchema : Yup.object().shape({

        username : Yup.string().required('Name is required.'),
        email : Yup.string().email('Email is required').required('Email is required.'),
        password: Yup.string().min(7, 'Password must be a minimum of 7 characters').required('Password is required.'),
        terms: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions')

    }),

    handleSubmit(values, props){
        
        const addUserOrRecipe = props.props.addUserOrRecipe

        const dataToPost = {
            username: values.username,
            password: values.password
        }

        axios
            .post('http://localhost:5000/api/register', dataToPost)
            .then(res => console.log(res, 'res'))
            .catch( err => console.log(err))

        axios
            .get('http://localhost:5000/api/restricted/data')
            .then(res => {
                addUserOrRecipe(res.data)
            })
        
    }
} )(FormCreator)

export default FormikForm