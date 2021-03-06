import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import OccupationsForm from './OccupationsForm';
import { withFormik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';

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

function getStepContent (stepIndex,professionalData) {
  switch (stepIndex) {
    case 0:
      return (<OccupationsForm professionalData={professionalData}/>);
    case 1:
      return (<Fragment>Conveniences</Fragment>);
    case 2:
      return (<Fragment>More Info</Fragment>);
    default:
      return 'Unknown stepIndex';
  }
}

export default function StepForm () {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const [professionalData, setProfessionalData] = React.useState({
    occupations:  [],
    conveniences: [],
    description : ''
  });

  const steps = getSteps();

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
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
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
            <div>
              <Typography className={classes.instructions}>{getStepContent(activeStep,professionalData)}</Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
              </Button>
                <Button variant="contained" color="primary" onClick={handleNext} >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}
