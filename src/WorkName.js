import React, { Component } from 'react';

class WorkName extends Component {
    render() {
        const name = this.props.location.pathname.slice(7)
        let text = '存在しないページです'
        if(name === 'work01'){ text = name}
        return (
            <React.Fragment>
                <div className="area">
                {text}
                </div>
            </React.Fragment>
        );
    }
}

export default WorkName;