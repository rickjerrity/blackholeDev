import React from 'react';

import Layout from 'components/Layout';

export default function Projects() {
  return (
    <Layout>
      <div className="centeredContent">
        <h1 className="linkTitle">Projects</h1>
      </div>
      <div className="centeredContent">
        <a href="https://streame.tv">
          <h2 className="linkTitle">StreamE.tv</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>A multi-platform stream viewing service for Twitch, Mixer, and YouTube live streamers.</p>
      </div>
      <div className="centeredContent">
        <a href="https://giddyup.horse">
          <h2 className="linkTitle">giddyup.horse</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>A GitHub Pages site editable by anyone at anytime.</p>
      </div>
    </Layout>
  );
}
