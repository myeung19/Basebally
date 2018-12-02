import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const profileDialog = (props) => {
    const { bio } = props.data.playerProfile;
    const { stats } = props.data.playerStats;

    return (
            <Dialog
                fullScreen={false}
                open={props.isDialogOpened}
                onClose={props.handleClose}
            >
                <DialogTitle id="responsive-dialog-title">{bio.FirstName} {bio.LastName}</DialogTitle>
                <DialogContent>
                    <DialogContentText>

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary" autoFocus>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
    );
};

export default profileDialog;
