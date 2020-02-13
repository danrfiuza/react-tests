import React, { Fragment } from 'react'
import { withFormik, Form, Field, ErrorMessage, setFieldValue } from 'formik'
import * as Yup from 'yup';

import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';


const LogInSchema = Yup.object().shape({
    albuns: Yup.array()
        .max(20, 'You can select only 20 occupations')
        .required('Select at least one occupation')
});

const MyFormWithFormik = withFormik({
    mapPropsToValues: () => ({
        albuns: []
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
    isInitialValid: true,
    validateOnChange: true,
    validateOnBlur: true,
    displayName: 'LogInSchema',
    validationSchema: LogInSchema,
})

const getAlbuns = async() => {
    return await axios.get('https://jsonplaceholder.typicode.com/albums')

}

class OccupationsForm extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            albuns : []
        }
    }

    componentDidMount  () {
        this.loadAlbuns()
    }

    loadAlbuns = async () => {
        const { data: albuns} = await getAlbuns()
        this.setState({albuns})
    }

    render () {
        const { albuns } = this.state
        const options = albuns;
        const { errors } = this.props
        return (
            <Fragment>
                <Form>
                    <Field type="albuns" name="albuns" render={
                        ({ field }) => (
                            <Autocomplete
                                component={'div'}
                                multiple
                                {...field}
                                id="tags-outlined"
                                getOptionLabel={option => option.title}
                                filterSelectedOptions
                                getOptionSelected={(option, value) => option.id === value.id}
                                options={options}
                                onChange={(e, value) => this.props.setFieldValue("albuns", value)}
                                renderInput={params => (
                                    <TextField
                                        {...params}
                                        error={errors.albuns || false}
                                        helperText={errors.albuns}
                                        variant="outlined"
                                        label="Occupations"
                                        placeholder="Select occupations"
                                        fullWidth
                                    />
                                )}
                            />
                        )
                    } />
                    <button type="submit" >
                        Submit
            </button>
                </Form>
            </Fragment>
        )
    }
}
export default MyFormWithFormik(OccupationsForm)


