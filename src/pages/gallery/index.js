import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import PostsList from './PostsList';
import styles from './gallery.module.css';

function Hello() {
    useEffect(() => {
        if (window.instgrm)
            window.instgrm.Embeds.process();
        }, []);
            
  return (
    <Layout title="Gallery">
      <div className={'row row--no-gutters '}>
        <div className="col col--3"></div>
        <PostsList />
        <div className="col col--3"></div>
      </div>
    </Layout>
  );
}

export default Hello;