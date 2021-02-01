import React from 'react';
import Layout from '@theme/Layout';
import WatchFace from './WatchFace';

function Hello() {
  return (
    <Layout title="Watch Faces">
      <div className="row">
        <div className="col col--3"></div>
        <div className="col col--6">
          <div className="row">
              <WatchFace screenshot={watchfaces[0].screenshot} github={watchfaces[0].source} name={watchfaces[0].name} />
              <WatchFace screenshot={watchfaces[1].screenshot} github={watchfaces[1].source} name={watchfaces[1].name} />
              <WatchFace screenshot={watchfaces[2].screenshot} github={watchfaces[2].source} name={watchfaces[2].name} />
              <WatchFace screenshot={watchfaces[3].screenshot} github={watchfaces[3].source} name={watchfaces[3].name} />
          </div>
          <div className="row">
            <WatchFace screenshot={watchfaces[4].screenshot} github={watchfaces[4].source} name={watchfaces[4].name} />
            <WatchFace screenshot={watchfaces[5].screenshot} github={watchfaces[5].source} name={watchfaces[5].name} />
            <WatchFace screenshot={watchfaces[6].screenshot} github={watchfaces[6].source} name={watchfaces[6].name} />
            <WatchFace screenshot={watchfaces[7].screenshot} github={watchfaces[7].source} name={watchfaces[7].name} />
          </div>
          <div className="row">
            <WatchFace screenshot={watchfaces[8].screenshot} github={watchfaces[8].source} name={watchfaces[8].name} />
            <WatchFace screenshot={watchfaces[9].screenshot} github={watchfaces[9].source} name={watchfaces[9].name} />
            <WatchFace screenshot={watchfaces[10].screenshot} github={watchfaces[10].source} name={watchfaces[10].name} />
          </div>          
        </div>
        <div className="col col--3">
          <p>Can't find the right watch face?</p>
          <a className="button button--lg button--secondary" href="/docs/create-watchface">Create Your Own!</a>
        </div>
      </div>
    </Layout>
  );
}

var watchfaces = [
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
    }     
                                     
];

export default Hello;