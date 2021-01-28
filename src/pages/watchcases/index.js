import React from 'react';
import Layout from '@theme/Layout';
import WatchCase from './WatchCase';

function Hello() {
  return (
    <Layout title="Watch Cases">
      <div className="row">
        <div className="col col--3"></div>
        <div className="col col--6">
          <div className="row">
            <WatchCase path="dos/dos_assembled.stl" title="dos" />
          </div>       
        </div>
        <div className="col col--3"></div>
      </div>
    </Layout>
  );
}

export default Hello;