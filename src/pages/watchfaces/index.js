import React from 'react';
import Layout from '@theme/Layout';
import WatchFaceList from './WatchFaceList';

function Hello() {
  return (
    <Layout title="Watch Faces">
      <div className="row row--no-gutters">
        <div className="col col--3"></div>
        <WatchFaceList />
        <div className="col col--3">
          <p>Can't find the right watch face?</p>
          <a className="button button--lg button--secondary" href="/docs/create-watchface">Create Your Own!</a>
        </div>
      </div>
    </Layout>
  );
}

export default Hello;