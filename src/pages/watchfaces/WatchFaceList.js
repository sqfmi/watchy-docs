import React, { Component } from 'react';
import WatchFace from './WatchFace';
import watchfaces from './watchfaces';

class WatchFaceList extends Component {

    renderRows(){

        let rows = [];
        let list = [];
        watchfaces.forEach((watchfaceObj, index) => {
            rows.push(<WatchFace key={watchfaceObj.id} author={watchfaceObj.author} screenshot={watchfaceObj.screenshot} ota_bin={watchfaceObj.ota_bin} github={watchfaceObj.source} name={watchfaceObj.name} />);
            if((index+1) % 3 == 0){
                list.push(<div key={index} className="row row--no-gutters">{rows}</div>);
                rows = [];
            }    
        });
        list.push(<div key={list.length} className="row row--no-gutters">{rows}</div>);
        return list;
    }

    render(){
        return(
            <div className="col col--6">
                {this.renderRows()}
            </div>
        )
    }
}

export default WatchFaceList

