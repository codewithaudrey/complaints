import React from 'react';
import IndexFeature from '../features/index/Feature';
import { Helmet } from 'react-helmet-async';

const IndexPage = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Multiverse Deep Sync - One Wallet</title>
      </Helmet>
      <IndexFeature />
    </React.Fragment>
  );
};

export default IndexPage;
