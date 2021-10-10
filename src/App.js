import Header from 'components/Header';
import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import NotFound from './components/NotFound';
import CounterFeature from './features/Counter';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/count" component={CounterFeature} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
