import React from 'react';
import { Link } from 'gatsby';

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
        <Link to="/saltpack-verify">
          <h2 className="linkTitle">Saltpack Verify</h2>
        </Link>
      </div>
      <div className="centeredContent">
        <p>
          This page verifies messages signed using the <a href="https://saltpack.org/">Saltpack</a> format.
        </p>
      </div>
    </Layout>
  );
}
