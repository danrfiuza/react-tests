
import { Formik, Form } from "formik";
import React, { Fragment } from "react";
import * as Yup from 'yup';
import OccupationsForm from "./OccupationsForm";
import ConveniencesForm from "./ConveniencesForm";
import DescriptionForm from "./DescriptionForm";
import { makeStyles, Stepper, Step, StepLabel, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


function getSteps () {
  return ['Select your occupations', 'Select your conveniences', 'Set a little description about you'];
}


const StepForm = () => {
  const steps = getSteps()

  const saveStep = values => {
    console.log(values)
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  // const [isValid, setIsValid] = React.useState(false);

  const handleNext = (e) => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  function getInitialValues (stepIndex) {
    switch (stepIndex) {
      case 0:
        return {
          occupations: []
        };
      case 1:
        return {
          conveniences: []
        };
      case 2:
        return {
          description: ''
        };
      default:
        return 'Unknown stepIndex';
    }
  }

  function getValidationSchema (stepIndex) {

    switch (stepIndex) {
      case 0:
        return Yup.object().shape({
          occupations: Yup.array()
            .max(20, 'You can select only 20 occupations')
            .required('Select at least one occupation')
        });
      case 1:
        return Yup.object().shape({
          conveniences: Yup.array()
            .max(20, 'You can select only 20 conveniences')
            .required('Select at least one convenience')
        });
      case 2:
        return Yup.object().shape({
          description: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Share a little description about you')
        });
      default:
        return 'Unknown stepIndex';
    }
  }

  function getStepContent (stepIndex, props) {
    switch (stepIndex) {
      case 0:
        return (<OccupationsForm props={props} />);
      case 1:
        return (<ConveniencesForm props={props} />);
      case 2:
        return (<DescriptionForm props={props} />);
      default:
        return 'Unknown stepIndex';
    }
  }

  return (
    <Fragment>
      <div>

        <Formik
          initialValues={getInitialValues(activeStep)}
          onSubmit={(values) => saveStep(values)}
          validateOnBlur={true}
          validateOnChange={true}
          validateOnMount={true}
          validationSchema={getValidationSchema(activeStep)}
        >
          {(props) => (
            <Form>
              <div className={classes.root}>
                <Stepper activeStep={activeStep} alternativeLabel>
                  {steps.map(label => (
                    <Step key={label}>
                      <StepLabel>{label}</StepLabel>
                    </Step>
                  ))}
                </Stepper>
                <div>
                  {activeStep === steps.length ? (
                    <div>
                      <Typography componentclassName={classes.instructions}>All steps completed</Typography>
                      <Button onClick={handleReset}>Reset</Button>
                    </div>
                  ) : (
                      <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep, props)}</Typography>
                        <div>
                          <Button
                            disabled={activeStep === 0}
                            onClick={handleBack}
                            className={classes.backButton}
                          >
                            Back
                          </Button>
                          {activeStep === steps.length - 1 ? (
                            <Button
                              variant="contained"
                              color="primary"
                              type="submit"
                              disabled={!props.isValid}

                            >
                              Finish
                              </Button>
                          ) : (
                              <Button
                                variant="contained"
                                color="secondary"
                                type="submit"
                                onClick={handleNext}
                                disabled={!props.isValid}
                              >
                                Next
                                </Button>
                            )
                          }
                        </div>
                      </div>
                    )}
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </Fragment>
  )
}

export default StepForm;