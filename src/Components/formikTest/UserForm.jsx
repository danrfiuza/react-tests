import React from 'react'
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

const LogInSchema = Yup.object().shape({
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    address: Yup.object().shape({

        city: Yup.object().shape({
            name: Yup.string()
                .min(2, 'Too Short!')
                .max(50, 'Too Long!')
                .required('Required')
        })
    }),
});

const MyFormWithFormik = withFormik({
    mapPropsToValues: () => ({
        email: '',
        password: '',
        address: {
            /* outros campos */
            city: {
                name: '',
                /* outros campos */
            }
        },
    }),
    handleSubmit: values => {
        /**
         * o values seria todos os valores do mapeados no  mapValuesToProps,
         * o segundo parametro são os métodos do formik, muito úteis
         * Antes de rodar o handleSubmit, o formik já roda o método de
         * validação dos dados, que posso escrever um novo artigo sobre
        **/
        console.log(values)
    },
    isInitialValid: false,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: 'LogInSchema',
    validationSchema: LogInSchema,
})


const UserForm = () => {
    return (
        <Form>
            <Field type="email" name="email" render={
                ({ field }) => (
                    <input {...field} style={{color:'blue'}}/>
                )
            } />
            <ErrorMessage name="email"/>
            <Field type="password" name="password" />
            <ErrorMessage name="password" />

            <Field name="address.city.name" />
            <ErrorMessage name="address.city.name" />


            <button type="submit" >
                Submit
            </button>
        </Form>
    )
}
export default MyFormWithFormik(UserForm)


