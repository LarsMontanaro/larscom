import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 500,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    padding: 8,
    backgroundColor: theme.palette.background.default,
  },
  img: {
    maxHeight: 318,
    display: 'block',
    maxWidth: 500,
    overflow: 'hidden',
    width: '100%',
  },
  stepper: {
    height: 20,
    padding: 8,
  },
}));

function ImageStepper(props) {
  const classes = useStyles();
  const { title, items, autoStep, stepInterval } = props;

  const View = autoStep ? autoPlay(SwipeableViews) : SwipeableViews;

  const maxSteps = items.length;
  const [activeStep, setActiveStep] = React.useState(0);
  const handleNext = () => setActiveStep(prevActiveStep => prevActiveStep + 1);
  const handleBack = () => setActiveStep(prevActiveStep => prevActiveStep - 1);
  const handleStepChange = step => setActiveStep(step);

  return (
    <div className={classes.root}>
      <Card elevation={0}> 
        { title
          ? (
            <div className={classes.header}>
              <Typography>{title}</Typography>
            </div>
          ) : null }
        <View
          axis={'x'}
          index={activeStep}
          interval={autoStep ? stepInterval : null}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {items.map((item, index) => (
            <div key={item.imgPath}>
              {Math.abs(activeStep - index) <= 2 ? (
                <img className={classes.img} src={item.img} alt={item.label} />
              ) : null}
            </div>
          ))}
        </View>
        <MobileStepper
          className={classes.stepper}
          position="block"
          variant="dots"
          activeStep={activeStep}
          steps={maxSteps}
          nextButton={
            <Button disableRipple size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
              {<KeyboardArrowRight />}
            </Button>
          }
          backButton={
            <Button disableRipple size="small" onClick={handleBack} disabled={activeStep === 0}>
              {<KeyboardArrowLeft />}
            </Button>
          }
        />
      </Card>
    </div>
  );
}

ImageStepper.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    imgPath: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  autoStep: PropTypes.bool,
  stepInterval: PropTypes.number,
}

ImageStepper.propTypes = {
  title: '',
  autoStep: false,
  stepInterval: 3000,
}

export default ImageStepper;