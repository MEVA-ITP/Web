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

const styles = theme => ({
    main: {
        width: '100%',
        display: 'absolute', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
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
            <div className={"body"}>
                {this.state.redirect && (
                    <Redirect push to={this.state.redirect}/>
                )}
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
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
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                disabled={this.state.tryLogin}
                            >
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);