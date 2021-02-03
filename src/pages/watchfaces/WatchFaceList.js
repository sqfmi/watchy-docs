import React, { Component } from 'react';
import WatchFace from './WatchFace';

class WatchFaceList extends Component {

    renderRows(){
        let watchfaces = [
            {
                "id" : "1",
                "name" : "Basic",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/1_Basic.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Basic",
                "version" : "1.0.0"
            },
            {
                "id" : "2",
                "name" : "7_SEG",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/2_7_SEG.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/7_SEG",
                "version" : "1.0.0"
            },
            {
              "id" : "2A",
              "name" : "7_SEG_LIGHT",
              "author" : "SQFMI",
              "screenshot" : "/img/watchfaces/2_7_SEG_Light.png",
              "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/7_SEG",
              "version" : "1.0.0"
            },     
            {
                "id" : "3",
                "name" : "DOS",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/3_DOS.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/DOS",
                "version" : "1.0.0"
            },
            {
                "id" : "4",
                "name" : "Pokemon",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/4_Pokemon.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Pokemon",
                "version" : "1.0.0"
            },
            {
                "id" : "5",
                "name" : "StarryHorizon",
                "author" : "dandelany",
                "screenshot" : "/img/watchfaces/5_StarryHorizon.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/StarryHorizon",
                "version" : "1.0.0"
            },
            {
                "id" : "6",
                "name" : "Tetris",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/6_Tetris.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Tetris",
                "version" : "1.0.0"
            },
            {
                "id" : "7",
                "name" : "MacPaint",
                "author" : "SQFMI",
                "screenshot" : "/img/watchfaces/7_MacPaint.png",
                "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/MacPaint",
                "version" : "1.0.0"
            },
            {
                "id" : "8",
                "name" : "Bahn",
                "author" : "BraininaBowl",
                "screenshot" : "/img/watchfaces/8_Bahn.png",
                "source" : "https://github.com/BraininaBowl/Bahn-for-Watchy",
                "version" : "1.0.0"
            },
            {
                "id" : "9",
                "name" : "Re-Dub",
                "author" : "BraininaBowl",
                "screenshot" : "/img/watchfaces/9_Redub.png",
                "source" : "https://github.com/BraininaBowl/Re-Dub-for-Watchy",
                "version" : "1.0.0"
            },
            {
                "id" : "10",
                "name" : "Calculateur",
                "author" : "Jochen",
                "screenshot" : "/img/watchfaces/10_Calculateur.png",
                "source" : "https://git.sr.ht/~jochen/Calculateur",
                "version" : "1.0.0"
            },
            {
                "id" : "11",
                "name" : "Jarvis",
                "author" : "peerdavid",
                "screenshot" : "/img/watchfaces/11_Jarvis.gif",
                "source" : "https://github.com/peerdavid/Watchy/tree/master/examples/WatchFaces/David",
                "version" : "1.0.0"
            }      
                                             
        ];
        let rows = [];
        let list = [];
        watchfaces.forEach((watchfaceObj, index) => {
            rows.push(<WatchFace key={watchfaceObj.id} screenshot={watchfaceObj.screenshot} github={watchfaceObj.source} name={watchfaceObj.name} />);

            if((index+1) % 3 == 0){
                list.push(<div key={index} className="row row--no-gutters">{rows}</div>);
                rows = [];
            }
        });
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

