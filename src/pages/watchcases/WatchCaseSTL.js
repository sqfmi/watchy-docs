import React, { Component } from 'react';
import watchcase from './watchcase.module.css';

class WatchCaseSTL extends Component {

    render(){
        return(
        <div className={'col col--6 '+watchcase.case}>
            <h1>{this.props.title}</h1>
            <iframe height='420' width='420' frameBorder='0' src={'https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/sqfmi/watchy-cases/master/'+this.props.path} title={this.props.title}></iframe>
            <a className={'button button--outline button--info'} href={'https://github.com/sqfmi/watchy-cases/tree/main/' + this.props.title} target="_blank">GitHub</a>
        </div>
        )
    }
}

export default WatchCaseSTL; // Don’t forget to use export default!