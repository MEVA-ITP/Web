import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

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

class SimpleModal extends React.Component {
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
                <Button style={{width: '45%', height: '45%', backgroundColor: '#00BCD4', marginLeft: '25%'}} variant="contained" size="large" color="primary" onClick={this.handleOpen}>Reservieren</Button>
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

SimpleModal.propTypes = {
    classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;