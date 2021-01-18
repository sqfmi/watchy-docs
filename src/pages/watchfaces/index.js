import React from 'react';
import Layout from '@theme/Layout';
import WatchFace from './WatchFace';

function Hello() {
  return (
    <Layout title="Watch Faces">
      <div className="container">
        <div className="row">
            <WatchFace screenshot={watchfaces[0].screenshot} github={watchfaces[0].source} />
            <WatchFace screenshot={watchfaces[1].screenshot} github={watchfaces[1].source} />
            <WatchFace screenshot={watchfaces[2].screenshot} github={watchfaces[2].source} />
            <WatchFace screenshot={watchfaces[3].screenshot} github={watchfaces[3].source} />
            <WatchFace screenshot={watchfaces[4].screenshot} github={watchfaces[4].source} />
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
        "screenshot" : "https://raw.githubusercontent.com/sqfmi/Watchy/master/extras/WatchFaces/1_Basic.png",
        "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Basic",
        "version" : "1.0.0"
    },
    {
        "id" : "2",
        "name" : "7_SEG",
        "author" : "SQFMI",
        "screenshot" : "https://raw.githubusercontent.com/sqfmi/Watchy/master/extras/WatchFaces/2_7_SEG.png",
        "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/7_SEG",
        "version" : "1.0.0"
    },
    {
        "id" : "3",
        "name" : "DOS",
        "author" : "SQFMI",
        "screenshot" : "https://raw.githubusercontent.com/sqfmi/Watchy/master/extras/WatchFaces/3_DOS.png",
        "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/DOS",
        "version" : "1.0.0"
    },
    {
        "id" : "4",
        "name" : "Pokemon",
        "author" : "SQFMI",
        "screenshot" : "https://raw.githubusercontent.com/sqfmi/Watchy/master/extras/WatchFaces/4_Pokemon.png",
        "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/Pokemon",
        "version" : "1.0.0"
    },
    {
        "id" : "5",
        "name" : "StarryHorizon",
        "author" : "dandelany",
        "screenshot" : "https://raw.githubusercontent.com/sqfmi/Watchy/master/extras/WatchFaces/5_StarryHorizon.png",
        "source" : "https://github.com/sqfmi/Watchy/tree/master/examples/WatchFaces/StarryHorizon",
        "version" : "1.0.0"
    }                                
];

export default Hello;