import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import './ProfileDialog.css'

const profileDialog = (props) => {
    const { playerStats } = props.data;
    const { bio } = props.data.playerProfile;
    console.log(playerStats);

    console.log(Object.keys({ ...bio }).slice(3, 10));

    return (
        <Dialog
            fullWidth
            open={ props.isDialogOpened }
            onClose={ props.handleClose }
        >
            <DialogTitle id="responsive-dialog-title">{ bio.FirstName } { bio.LastName }</DialogTitle>
            <DialogContent>
                <div className="profileImg">
                    <img src={ bio.officialImageSrc } alt={ bio.FirstName + "-" + bio.LastName } />
                </div>
                <div className="profileContent">
                    <div>
                        <h3>Bio</h3>
                        <ul>
                            {
                                Object.keys({ ...bio }).slice(3, 10).map((el, i) => {
                                    return <li key={ i }>{ el } - { bio[el] }</li>
                                })
                            }
                        </ul>
                    </div>
                    <div>
                        <h3>Stats</h3>
                        <ul>
                            {
                                Object.keys(playerStats).map((el, i) => {
                                    return (
                                        <li key={i}>
                                            <span title={el}>
                                                { playerStats[el]["@abbreviation"] } - { playerStats[el]["#text"] }
                                            </span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={ props.handleClose } color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default profileDialog;
