import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) =>({
    footer: {
        position: 'fixed',
        left: '0px',
        bottom: '0px',
        height: '30px',
        width: '100%',
    },
}));

function Copyright() {
    const classes = useStyles();

    return (
      <Typography variant="body2" color="textSecondary" align="center" className={classes.footer}>
        {'Copyright © '}
        <Link color="inherit" href="/">
          URL Shortner
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
};

const Footer = () =>{
    return(
        <Copyright />
    );
};

export default Footer;