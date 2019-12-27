import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SaveAlt from '@material-ui/icons/SaveAlt';

const useStyles = makeStyles({
  root: {
    margin: '16px 0px',
    flexGrow: 1,
  },
  img: {
    maxWidth: 500,
    '@media only screen and (max-width: 600px)': {
      maxWidth: 450,
    }
  },
  download: {
    margin: 0,
    textDecoration: 'none',
    '&:link': {
      color: 'rgba(0, 0, 0, 0.4)',
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
            <div>
              <a className={classes.download} href={download.file} download={download.fileName}>
                download me! <SaveAlt fontSize="small" />
              </a>
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