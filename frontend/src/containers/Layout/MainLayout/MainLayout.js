import React from 'react';
import Appbar from '../../../components/Appbar/Appbar'
import BottomNavigationBar from '../../../components/Navigation/BottomNavigationBar/BottomNavigationBar'
import CustomPaper from '../../../components/CustomPaper/CustomPaper'

import './MainLayout.css';

class MainLayout extends React.Component {
    state = {
        pageValue: 0,
    };

    handleChange = (event, value) => {
        this.setState({
            pageValue: value
        });
    };

    render() {
        return (
            <div className="container">
                <Appbar/>
                <CustomPaper value={this.state.pageValue}/>
                <BottomNavigationBar value={this.state.pageValue} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default MainLayout;