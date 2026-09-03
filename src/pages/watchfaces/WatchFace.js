import React from 'react';
import watchface from './watchface.module.css';
import FlashButton from './FlashButton';

function WatchFace(props) {
  return (
    <div className={'col col--4 ' + watchface.frame}>
      <img src={props.screenshot} alt={props.name} />
      <a className={'button button--outline button--info'} href={props.github} target="_blank" rel="noopener noreferrer">{props.name}</a>
      {props.firmware ? <FlashButton name={props.name} firmware={props.firmware} /> : null}
    </div>
  );
}

export default WatchFace;
