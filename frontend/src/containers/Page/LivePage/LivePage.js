import React, {Component} from 'react';
import GameCard from '../../../components/Card/GameCard/GameCard'
import CustomPaper from "../../../components/CustomPaper/CustomPaper";

class LivePage extends Component {
    render() {
        return (
            <CustomPaper>
                <GameCard data={null}/>
            </CustomPaper>
        );
    }
}

export default LivePage;