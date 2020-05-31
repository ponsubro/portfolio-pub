import React, { Component } from 'react';
import Works from './Works';
import WorksContent from './WorksContent';

class WorksContainer extends Component {
    render() {
        const workName = this.props.location.pathname.slice(7)
        let content = <Works />
        if (workName) { content = <WorksContent name={workName} /> }
        return (
            <React.Fragment>
                {content}
            </React.Fragment>
        );
    }
}

export default WorksContainer;