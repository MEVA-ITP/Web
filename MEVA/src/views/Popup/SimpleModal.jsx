import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function getModalStyle() {
    const top = 0
    const left = 0

    return {
        top: 50,
        left: 250,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: '80%',
        height: '90%',
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
                        <div style={{margin: '2%'}}>
                        <Typography variant="h6" id="modal-title">
                            Reservierung
                        </Typography>
                        <Typography variant="subtitle1" id="simple-modal-description">
                            Reservierung werden hier gemacht
                        </Typography>

                        </div>
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