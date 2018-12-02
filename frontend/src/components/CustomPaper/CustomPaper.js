import React from 'react';
import Paper from "@material-ui/core/es/Paper/Paper";

import './CustomPaper.css'

const customPaper = (props) => {
    return (
        <div className="paperOuter">
            {/*<Paper className="paper">*/}
                {props.children}
            {/*</Paper>*/}
        </div>
    );
};

export default customPaper;
