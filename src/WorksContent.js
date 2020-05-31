import React, { Component } from 'react';
import Book from './Book';
import './WorksContent.css';
import Kaden from './Kaden';
import Tootie from './Tootie';
import Portfolio from './Portfolio';

const contentSelect = (name)=>{
    if(name==='work01'){
        return <Book />
    }
    else if(name==='work02'){
        return <Kaden />
    }
    else if(name==='work03'){
        return <Tootie />
    }
    else if(name==='work04')
        return <Portfolio />
    else return '存在しないページです'
}

class WorksContent extends Component {

    render() {
        return (
                <React.Fragment>
                    {contentSelect(this.props.name)}
                </React.Fragment>
        );
    }
}

export default WorksContent;