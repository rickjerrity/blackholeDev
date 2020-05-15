import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout title="404">
    <SEO title="Four oh Four - Not found" />
    <h1>Four oh Four</h1>
    <p>This resource could not be found. You really did find a blackhole...</p>
  </Layout>
);

export default NotFoundPage;
