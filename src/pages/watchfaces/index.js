import React from 'react';
import Layout from '@theme/Layout';
import WatchFace from './WatchFace';

function Hello() {
  return (
    <Layout title="Hello">
      <div class="container">  
        <WatchFace></WatchFace>     
      </div>
    </Layout>
  );
}

export default Hello;