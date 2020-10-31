import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SaveAlt from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles({
  root: {
    position:  'relative',
    margin: '16px 0px',
    flexGrow: 1,
    maxWidth: 500,
    '@media only screen and (max-width: 600px)': {
      maxWidth: 400,
    },
  },
  img: {
    maxWidth: 'inherit',
  },
  downloadOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: '100%',
    width: 'inherit',
    opacity: 0,
    transition: '.3s ease',
    '&:hover': {
      opacity: 1,
    },
  },
  downloadWrapper: {
    position: 'absolute',
    borderRadius: 3,
    paddingLeft: 10,
    bottom: 4,
    width: 'inherit',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    height: 30,
    padding: 6,
  },
  download: {
    margin: 0,
    textDecoration: 'none',
    '&:link': {
      color: 'rgba(255, 255, 255, 0.8)',
    },
    '&:hover': {
      color: 'rgb(63, 81, 181)',
    },
  }
});

const ImageCard = (props) => {
  const { img, download, title } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      { title
          ? (
            <div>
              <Typography>{title}</Typography>
            </div>
          ) : null }
      <img className={classes.img} src={img} alt={title}/>
      {download
        ? (
            <div className={classes.downloadOverlay}>
              <div className={classes.downloadWrapper}>
                <a className={classes.download} href={download.file} download={download.fileName}>
                  download me! <SaveAlt fontSize="small" />
                </a>
              </div>
            </div>
          )
        : null}
    </div>
  );
}

ImageCard.propTypes = {
  img: PropTypes.any.isRequired,
  download: PropTypes.shape({
    file: PropTypes.any.isRequired,
    fileName: PropTypes.string.isRequired,
  }),
  title: PropTypes.string.isRequired,
}

ImageCard.defaultProps = {
  download: null,
  title: '',
}

export default ImageCard;