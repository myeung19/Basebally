import React, {Component} from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import RefreshBar from '../../../components/Appbar/RefreshBar/RefreshBar';

import {getTeamInfo} from '../../../util/utils';
import "./StandingsPage.css"

class StandingsPage extends Component {
    state = {
        data: localStorage.getItem("standings") ? JSON.parse(localStorage.getItem("standings")) : {}
    };

    componentDidMount() {
        if (this.state.data) {
            axios.get("http://www.basebally.net/api/team_standings")
                .then((response) => {
                    console.log(response);
                    localStorage.setItem("standings", JSON.stringify(response.data));
                    this.setState({
                        data: response.data
                    })
                })
        }
    }

    render() {
        const {data} = this.state;
        const keys = Object.keys(data);

        return (
            <div className="StandingsPage">
                <RefreshBar />
                <Paper className="paperTableContainer">
                    {
                        keys.map((el, index) => {
                            const rankings = data[el];

                            return (
                                <div key={index}>
                                    <h2 className="containerTitle">{el.replace("/", " - ")}</h2>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Team</TableCell>
                                                <TableCell>Wins</TableCell>
                                                <TableCell>Losses</TableCell>
                                                <TableCell>Win(%)</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {
                                                rankings.map((rank, i) => {
                                                    const rankInfo = rank.split(" - ");
                                                    return (
                                                        <TableRow key={i}>
                                                            <TableCell>
                                                                <div className="teamNameBlock">
                                                                    <img className="teamIcon"
                                                                         src={getTeamInfo(rankInfo[0]).imgSrc} alt=""/>
                                                                    <p>{getTeamInfo(rankInfo[0]).name}</p>
                                                                </div>
                                                            </TableCell>
                                                            <TableCell>{rankInfo[1]}</TableCell>
                                                            <TableCell>{rankInfo[2]}</TableCell>
                                                            <TableCell>{rankInfo[3].slice(2, 4)}</TableCell>
                                                        </TableRow>
                                                    )
                                                })
                                            }
                                        </TableBody>
                                    </Table>
                                    <br/>
                                </div>
                            )
                        })
                    }
                </Paper>
            </div>
        );
    }
}

export default StandingsPage;