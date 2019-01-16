import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';
import Icon from '@material-ui/core/Icon';

function getModalStyle() {
    const top = 55
    const left = 55

    return {
        top: `54.6%`,
        left: `62.5%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: '78.7%',
        height: '91.5%',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],

    },
});

class PopUpIcon extends React.Component {
    constructor(props){
        super(props);
        console.log(this.props)
    }
    state = {
        open: false,
    };

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;

        return (
            <div>
            <div className={classes.root}>
                <Button onClick={this.handleOpen}>
                <Icon className={classes.icon} onClick={() => this.handleOpen}>images outline</Icon></Button>
            </div>

            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.open}
                onClose={this.handleClose}
            >
                <div style={getModalStyle()} className={classes.paper}>
                    <Typography variant="h6" id="modal-title">
                    Reservierung
                    </Typography>
                    <Typography variant="subtitle1" id="simple-modal-description">
                    Hier wird der Fenster fertig gestellt wo man die Artikeln reservieren kann.
                    </Typography>
                </div>
            </Modal>
        </div>
        );
    }
}

PopUpIcon.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(PopUpIcon);

export default SimpleModalWrapped;