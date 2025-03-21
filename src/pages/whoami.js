import React from 'react';

import Layout from 'components/Layout';

export default function About() {
  return (
    <Layout title="whoami">
      <div className="centeredContent">
        <h1 className="linkTitle">whoami</h1>
      </div>
      <div className="centeredContent">
        <p>
          I&apos;m Nick and I code the things. I&apos;m a full-time software engineer and I work on weird projects in my spare time that I write posts
          about here. I enjoy writing and working in Typescript, React, and C#, and I mostly focus on web/mobile development. I&apos;m a full-stack
          engineer familiar with working on small teams and bringing features from concept to production. Check out my{' '}
          <a href="https://github.com/rickjerrity">GitHub</a> for some code examples.
        </p>
      </div>

      <div className="centeredContent">
        <p>
          I love listening to music, watching Twitch/YouTube, playing videogames, going to concerts, eating good food, traveling, and keeping up with
          new electronics and tech. I&apos;ve been printed in the <a href="https://2600.com/">2600 magazine</a> (Autumn 2007 issue) and hosted one of
          the largest conference calls in the world dedicated entirely to telephone hacking (phreaking) (ConfCon 2009/2010).
        </p>
      </div>
    </Layout>
  );
}
