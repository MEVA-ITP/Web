import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';


const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'flex-end',
    },
    icon: {
        margin: theme.spacing.unit * 1,
    },
    iconHover: {
        margin: theme.spacing.unit * 1,
        '&:hover': {
            color: red[800],
        },
    },
});

function Icons(props) {
    const { classes } = props;

    return (
        <div className={classes.root}>
            <Icon className={classes.icon}> delete </Icon>
        </div>
    );
}

Icons.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Icons);