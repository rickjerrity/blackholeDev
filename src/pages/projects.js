import React from 'react';

import Layout from 'components/Layout';

export default function Projects() {
  return (
    <Layout title="Projects">
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
      <div className="centeredContent">
        <a href="https://www.npmjs.com/package/keybase-id">
          <h2 className="linkTitle">Keybase Id</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>
          An authentication and identification library that uses Keybase Saltpack messages for verification and GitHub, Twitter, and Keybase API for
          identification.
        </p>
      </div>
      <div className="centeredContent">
        <a href="/saltpack-verify">
          <h2 className="linkTitle">Saltpack Verify</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>
          An online <a href="https://saltpack.org/">Saltpack message</a> verifier.
        </p>
      </div>
      <div className="centeredContent">
        <a href="https://adchamp.live">
          <h2 className="linkTitle">AdChamp</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>
          The easiest way for Twitch streamers to make money and for advertisers to connect with a live audience. Just add a browser source to your
          streaming software and start making extra cash.
        </p>
      </div>
    </Layout>
  );
}
