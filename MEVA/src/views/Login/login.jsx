import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import {Redirect} from "react-router-dom";
import style from './style.css';

const styles = theme => ({
    main: {
        width: '95%',
        display: 'absolute', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: '30%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        marginBottom: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            tryLogin: false,
            error: false,
            redirect: false,
            showState: 'login',
        }
    }

    updateState = (prop) => {
        return (event) => {
            this.setState({
                [prop]: event.target.value,
            })
        }
    }

    login = async (e) => {
        e.preventDefault()

        await this.setState({tryLogin: true, error: false})
        const {email, password} = this.state

        try {
            const gotten = await (await fetch('https://api.meva.thekingdave.com/login', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            })).json()

            if (gotten.ok === true) {
                this.setState({redirect: './dashboard'})
                return
            }

            this.setState({error: gotten.error, password: '', tryLogin: false})
        } catch (e) {
            this.setState({error: "There was an error contacting the server.", password: '', tryLogin: false})
        }
    }

    render = () => {
        const {classes} = this.props;

        return (
            <div>
                <div className={"body"}>
                    {this.state.redirect && (
                        <Redirect push to={this.state.redirect}/>
                    )}
                    {this.state.showState === 'login' && <main className={classes.main}>
                        <CssBaseline/>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Login
                            </Typography>
                            <form className={classes.form} onSubmit={this.login}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email Address</InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={this.updateState("email")}
                                        value={this.state.email}
                                        disabled={this.state.tryLogin}
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.updateState("password")}
                                        value={this.state.password}
                                        disabled={this.state.tryLogin}
                                    />
                                </FormControl>
                                {this.state.error && (
                                    <Typography color={"error"}>
                                        {this.state.error}
                                    </Typography>)
                                }
                                <Button
                                    style={{marginBottom: "15px"}}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={this.state.tryLogin}
                                >
                                    Login
                                </Button>
                                <Button
                                    onClick={() => {this.setState({showState: 'register'})}}
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </Paper>
                    </main>}
                    {this.state.showState === 'register' && <main className={classes.main}>
                        <CssBaseline/>
                        <Paper className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockIcon/>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Sign Up
                            </Typography>
                            <form className={classes.form} onSubmit={this.login}>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="fname">Firstname </InputLabel>
                                    <Input
                                        id="fname"
                                        name="fname"
                                        autoComplete="fname"

                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="lname">Lastname </InputLabel>
                                    <Input
                                        id="lname"
                                        name="lname"
                                        autoComplete="lname"

                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="email">Email </InputLabel>
                                    <Input
                                        id="email"
                                        name="email"
                                        autoComplete="email"

                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <Input
                                        name="password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                </FormControl>
                                <FormControl margin="normal" required fullWidth>
                                    <InputLabel htmlFor="telnr">Telephone-Number </InputLabel>
                                    <Input
                                        id="phone"
                                        name="phone"
                                        autoComplete="phone"

                                    />
                                </FormControl>
                                {this.state.error && (
                                    <Typography color={"error"}>
                                        {this.state.error}
                                    </Typography>)
                                }
                                <Button
                                    style={{marginBottom: "15px"}}
                                    onClick={() => {this.setState({showState: 'login'})}}
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                    disabled={this.state.tryLogin}
                                >
                                    Login
                                </Button>
                                <Button

                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                >
                                    Sign Up
                                </Button>
                            </form>
                        </Paper>
                    </main>}
                </div>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);