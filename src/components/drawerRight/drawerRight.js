import React, { useState, useContext } from 'react';
import { appContext } from '../../contextApi';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import './drawerRight.css';

const useStyles = makeStyles(theme => ({
        paper: {
            marginTop: theme.spacing(8),
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        },
        avatar: {
            margin: theme.spacing(1),
            backgroundColor: theme.palette.secondary.main,
        },
        form: {
            // width: '100%',
            marginTop: theme.spacing(1),
        },
        submit: {
            margin: theme.spacing(3, 0, 2),
        }
    })
);

const DrawerRight = ({right, onAddUser}) => {

    const classes = useStyles();

    const state = useContext(appContext);

    const initialStateUser = {name: "", email: "", site: ""};
    const [user, setUser] = useState(initialStateUser);

    const onChange = e => setUser({...user, [e.target.name]: e.target.value});

    const onSubmit = e => {
        e.preventDefault();
        onAddUser(user);
        setUser(initialStateUser);
    }

    return (
        <div className={`panel-right ${right ? "open" : ""}`}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                    Create User
                    </Typography>
                    <form className={classes.form} onSubmit={onSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            label="Name"
                            fullWidth
                            name="name"
                            autoFocus
                            value={user.name}
                            onChange={onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            label="Email"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value={user.email}
                            onChange={onChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            required
                            name="site"
                            label="web site"
                            autoComplete="current-password"
                            value={user.site}
                            onChange={onChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            lkjsdbnvjkbxvkjxbfvjkxfbvkjjk
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default DrawerRight;
