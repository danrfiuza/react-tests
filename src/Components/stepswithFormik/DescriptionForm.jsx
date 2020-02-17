import React, { Fragment } from 'react';
import { Field } from 'formik'
import { TextField } from '@material-ui/core'

const DescriptionForm = ({ props }) => {
    return (
        <Fragment>
            <Field type="text" name="description" render={
                ({ field }) => (
                    <TextField
                        {...field}
                        id="outlined-multiline-flexible"
                        label="Description"
                        placeholder="Tell us a little more about you"
                        multiline
                        rowsMax="4"
                        fullWidth
                        error={props.errors.description || false}
                        helperText={props.errors.description}
                        variant="outlined"
                    />
                )
            } />
        </Fragment>
    );
}

export default DescriptionForm;
