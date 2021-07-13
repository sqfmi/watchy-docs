import React from 'react';
import Layout from '@theme/Layout';
import WatchCase from './WatchCase';
import WatchCaseSTL from './WatchCaseSTL';

function Hello() {
  return (
    <Layout title="Watch Cases">
      <div className="row">
        <div className="col col--3"></div>
        <div className="col col--6">
          <div className="row">
            <WatchCaseSTL path="Yatari/Yatari_Model.stl" title="Yatari" />
            <WatchCaseSTL path="Armadillonium/Armadillonium_Model.stl" title="Armadillonium" />
            <WatchCaseSTL path="dos/dos_assembled.stl" title="dos" />
            <WatchCaseSTL path="duplo/duplo.stl" title="duplo" />
            <WatchCaseSTL path="snappy/snappy.stl" title="snappy" />
            <WatchCaseSTL path="quattro/quattro.stl" title="quattro" />
          </div>       
        </div>
        <div className="col col--3"></div>
      </div>
    </Layout>
  );
}

export default Hello;