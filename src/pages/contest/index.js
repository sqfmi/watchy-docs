import React from 'react';
import Layout from '@theme/Layout';
import contest from './contest.module.css';

function Hello() {
  return (
    <Layout title="Watchy Case Design Contest">
    <div className="row row--no-gutters">
        <div className={"col col--3 "+contest.submit}>
            <a className="button button--secondary" href="https://github.com/sqfmi/watchy-cases" target="_blank">Submit Your Design</a>
            <p>***Contest is now closed, but feel free to contribute to our repo of open source case designs!***</p>            
        </div>
        <div className={"col col--6 " + contest.contest}>
            <h1>Watchy Case Design Contest!</h1>
            <img id={contest.banner} src="/img/watchy_case_contest_collage_IG.png" />
            <a className="button button--lg button--info" href="https://forms.gle/PPDSEPRvnmYtpe9U9">Vote!</a>
    
            <h2>Prizes</h2>
            <ul className={contest.prize}>
                <li>First Place<span>$500 Cash</span></li>
                <li>Second Place<span>$250 Cash</span></li>
                <li>Third Place<span>$100 Cash</span></li>
            </ul>

            <h2>Rules</h2>
            <ul className={contest.rules}>
                <li>All design files must be submitted to our <a href="https://github.com/sqfmi/watchy-cases">GitHub</a>, or provide a link to your repo so we could fork it</li>
                <li>Submissions must be open source and under MIT License - we want to keep every aspect of Watchy open!</li>
                <li>Design files must be in STEP file format to be considered for mass production (injection molded plastic and/or CNC aluminum)</li>
                <li>If you could share the design source e.g. Fusion 360, SolidWorks, FreeCAD, OpenSCAD, etc. then even better!</li>
                <li>Please include at least 2-3 renders of the design - or photos if you have access to a 3D printer/CNC!</li>
                <li>Please include a short README with a description of your design</li>
                <li>Every backer is allowed three ranked-choice votes (first, second, and third choices)</li>
                <li>Votes deteremined to be fraudulent by SQFMI will be discarded</li>
                <li>Voting ends on <b>11:59 PM PST March 23, 2021</b></li>                
                <li>The enclosure design that goes to manufacture will be determined solely by SQFMI</li>
                <li>No purchase necessary!</li>
            </ul>

            <h2>Resources</h2>
            <ul className={contest.resources}>
                <li>Here you will find the STEP, STL, Fusion 360 files and everything you'll need to get started!</li>
                <li><a href="https://github.com/sqfmi/watchy-cases">https://github.com/sqfmi/watchy-cases</a></li>
            </ul>            
      </div>
      <div className={"col col--3 "+contest.vote}>
        
      </div>
    </div>
    </Layout>
  );
}

export default Hello;