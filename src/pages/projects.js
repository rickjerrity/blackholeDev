import React from 'react';

import Layout from 'components/Layout';

export default function Projects() {
  return (
    <Layout title="Projects">
      <div className="centeredContent">
        <h1 className="linkTitle">Projects</h1>
      </div>
      <div className="centeredContent">
        <a href="https://chatroyale.io">
          <h2 className="linkTitle">Chat Royale</h2>
        </a>
      </div>
      <div className="centeredContent">
        <p>A chat based battle royale game written in Typescript using React/Tailwind/Socket.IO.</p>
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
    </Layout>
  );
}
