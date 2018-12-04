import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Tooltip from '@material-ui/core/Tooltip';

import './ProfileDialog.css'
import Table from "@material-ui/core/Table/Table";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";

const profileDialog = (props) => {
    const { playerStats } = props.data;
    const { bio } = props.data.playerProfile;

    console.log(bio.team);

    return (
        <Dialog
            fullWidth
            open={ props.isDialogOpened }
            onClose={ props.handleClose }
        >
            <DialogTitle>{ bio.FirstName } { bio.LastName }</DialogTitle>
            <DialogContent>
                <div className="profileImg">
                    <img src={ bio.officialImageSrc } alt={ bio.FirstName + "-" + bio.LastName } />
                </div>
                <div className="profileContent">
                    <div>
                        <h2>Bio</h2>
                        <Table>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Team</TableCell>
                                    <TableCell>{bio.team.City} {bio.team.Name}</TableCell>
                                </TableRow>
                                {
                                    Object.keys({ ...bio }).slice(3, 11).map((el, i) => {
                                        console.log(el, bio[el]);
                                        return (
                                            <TableRow key={ i }>
                                                <TableCell>{ el }</TableCell>
                                                <TableCell>{ bio[el] }</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                        <br />
                    </div>
                    <div>
                        <h2>Stats</h2>
                        <Table>
                            <TableBody>
                                {
                                    Object.keys(playerStats).map((el, i) => {
                                        return (
                                            <TableRow key={ i }>
                                                <TableCell>
                                                    <Tooltip title={el} placement="left">
                                                        <p>{ playerStats[el]["@abbreviation"] }</p>
                                                    </Tooltip>
                                                </TableCell>
                                                <TableCell>{ playerStats[el]["#text"] }</TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
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
