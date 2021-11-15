import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPageProduct from './pages/ListPage';
import { Box } from '@material-ui/core';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const match = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={match.url} exact component={ListPageProduct} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
