import React from 'react';
import Layout from '@theme/Layout';
import contest from './contest.module.css';

function Hello() {
  return (
    <Layout title="Watchy Case Design Contest">
    <div className="row row--no-gutters">
        <div className={"col col--3 "+contest.submit}>   
        </div>
        <div className={"col col--6 " + contest.contest}>
          <h1>Congratulations to the case design contest winners!!</h1>
          <h2>First Place - Flipped Chamfer by demseyk</h2>
          <img src="/img/watchy_contest_first_flippedchamfer.png" />
          <a href="https://github.com/sqfmi/watchy-cases/tree/main/Flipped%20Chamfer">https://github.com/sqfmi/watchy-cases/tree/main/Flipped%20Chamfer</a>
          <h2>Second Place - Slim by BraininaBowl</h2>
          <img src="/img/watchy_contest_second_slim.png" />
          <a href="https://github.com/sqfmi/watchy-cases/tree/main/Slim">https://github.com/sqfmi/watchy-cases/tree/main/Slim</a>
          <h2>Third Place - Peechy by Optogram</h2>
          <img src="/img/watchy_contest_third_peechy.png" />
          <a href="https://github.com/sqfmi/watchy-cases/tree/main/Peechy">https://github.com/sqfmi/watchy-cases/tree/main/Peechy</a>
          <h2>Thank you everyone for your submissions! Please continue to share your awesome designs :)</h2>
      </div>
      <div className={"col col--3 "+contest.vote}>
        
      </div>
    </div>
    </Layout>
  );
}

export default Hello;