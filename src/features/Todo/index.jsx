import React from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import NotFound from "../../components/NotFound";
import DetailPage from "./page/DetailPage";
import ListPage from "./page/ListPage";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default TodoFeature;
