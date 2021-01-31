import React, { useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Button, DialogTitle, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import axios from 'axios';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';


const URL_API = 'http://127.0.0.1:8000'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    centerscreen: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        minHeight: "100vh",
        marginTop: '0rem',
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
}));

const fetchData = (long_url, short_url) => {
    const config = {
        headers:{
            'Content-Type': 'application/json',
        }
    };

    let body = JSON.stringify({long_url, short_url});

    return axios
        .post(`${URL_API}`, body, config)
        .then(({data}) => {
            return JSON.stringify(data)
        })
        .catch((err) => {
            console.log(err);
        });
};


const HomeComponent = () =>{
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    let ret = "";
    const [formData, setFormData] = useState({
        long_url: '',
        short_url: '' 
    });

    const {long_url, short_url} = formData;
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

    const change = e =>{
        e.preventDefault();
        ret = fetchData(long_url, short_url);
        setOpen(true);
    };

    useEffect(() => {

    }, []);
    

    const showURL = () => {
        return(
            <div>
                <Dialog
                    open={open}
                    onClose={e => {setOpen(true)}}
                >
                    <DialogTitle id="alert-dialog-title">
                        {"URL Shortner"}
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {ret ? ret : null}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={setOpen(false)}>
                            Ok
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    };

    return(
        <div className={classes.centerscreen}>
            <form className='inherit' noValidate onSubmit={e => change(e)}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="long_url"
                            variant="outlined"
                            required
                            fullWidth
                            id="longUrl"
                            label="Long URL"
                            autoFocus
                            onChange={e => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete="fname"
                            name="short_url"
                            variant="outlined"
                            fullWidth
                            id="slug"
                            label="Slug"
                            autoFocus
                            value="null"
                            onChange={e => onChange(e)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                        >
                            Genera
                        </Button>
                    </Grid>
                    {open ? showURL() : <div></div>}
                </Grid>
            </form>
        </div>
    );
};

export default HomeComponent;