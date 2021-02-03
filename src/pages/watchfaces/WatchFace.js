import React, { Component } from 'react';
import watchface from './watchface.module.css';

class WatchFace extends Component {
  render() {
    return(
      <div className={'col col--4 ' + watchface.frame}>
        <img src={this.props.screenshot} />
        <a className={'button button--outline button--info'} href={this.props.github} target="_blank">{this.props.name}</a>
        <button className={'button button--info'}>Try it!</button>
      </div>
    )
  }
}

export default WatchFace; // Don’t forget to use export default!