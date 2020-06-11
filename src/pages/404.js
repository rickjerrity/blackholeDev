import React from 'react';

import Layout from 'components/Layout';
import SEO from 'components/SEO';

function NotFound() {
  return (
    <Layout title="404">
      <SEO title="Four oh Four - Not found" />
      <h1>Four oh Four</h1>
      <p>This resource could not be found. You really did find a blackhole...</p>
    </Layout>
  );
}

export default NotFound;
