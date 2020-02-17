import React, { Fragment } from 'react'
import { Field } from 'formik'
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const OccupationsForm = ({props}) => {

    const occupations = [
        { id: 1, occupation: 'Painter' },
        { id: 2, occupation: 'Designer' },
        { id: 3, occupation: 'Programmer' },
        { id: 4, occupation: 'Architect' },
        { id: 5, occupation: 'Engineer' },
        { id: 6, occupation: 'Plumber' },
        { id: 7, occupation: 'Bricklayer' },
        { id: 8, occupation: 'Carpenter' },
    ]

    return (
        <Fragment>
            <Field type="occupations" name="occupations" render={
                ({ field }) => (
                    <Autocomplete
                        component={'div'}
                        multiple
                        {...field}
                        id="tags-outlined"
                        getOptionLabel={option => option.occupation}
                        filterSelectedOptions
                        getOptionSelected={(option, value) => option.id === value.id}
                        options={occupations}
                        onChange={(e, value) => props.setFieldValue("occupations", value)}
                        renderInput={params => (
                            <TextField
                                {...params}
                                error={props.errors.occupations || false}
                                helperText={props.errors.occupations}
                                variant="outlined"
                                label="Occupations"
                                placeholder="Select occupations"
                                fullWidth
                            />
                        )}
                    />
                )
            } />
        </Fragment>
    );
}

export default OccupationsForm;