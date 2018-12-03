import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const errorSnackBar = (props) => {
    return (
        <div>
            <Snackbar
                anchorOrigin={ {
                    vertical: 'bottom',
                    horizontal: 'center',
                } }
                open={ props.isErrorSnackBarOpened }
                autoHideDuration={ 5000 }
                onClose={ props.handleErrorSnackBarClose }
                message={ "Player not found" }
                action={ [
                    <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={ props.handleErrorSnackBarClose }
                    >
                        <CloseIcon />
                    </IconButton>,
                ] }
            />
        </div>
    );
};

export default errorSnackBar;
