import React, { Fragment } from 'react'
import { Field } from 'formik'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const ConveniencesForm = ({ props }) => {

    const conveniences = [
        { id: 1, convenience: 'Passa Cartão de crédito' },
        { id: 2, convenience: 'Possui carro próprio' },
        { id: 3, convenience: 'emite Nota Fiscal' },
    ]

    return (
        <Fragment>
            <Field type="conveniences" name="conveniences" render={
                ({ field }) => (
                    <Autocomplete
                        component={'div'}
                        multiple
                        {...field}
                        id="tags-outlined"
                        getOptionLabel={option => option.convenience}
                        filterSelectedOptions
                        getOptionSelected={(option, value) => option.id === value.id}
                        options={conveniences}
                        onChange={(e, value) => props.setFieldValue("conveniences", value)}
                        renderInput={params => (
                            <TextField
                                {...params}
                                error={props.errors.conveniences || false}
                                helperText={props.errors.conveniences}
                                variant="outlined"
                                label="Conveniences"
                                placeholder="Select conveniences"
                                fullWidth
                            />
                        )}
                    />
                )
            } />
        </Fragment>
    );
}

export default ConveniencesForm;