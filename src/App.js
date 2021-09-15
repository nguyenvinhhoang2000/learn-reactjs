import { useEffect } from 'react';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import productApi from './api/productApi';
import './App.scss';
import NotFound from './components/NotFound';
import TodoFeature from './features/Todo';

function App() {
  useEffect(() => {
    const fetchProducts = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
    };

    fetchProducts();
  }, []);

  return (
    <div className="app">
      <Link to="/todos">Todos</Link>
      <Switch>
        <Route path="/todos" component={TodoFeature} />
        <Route component={NotFound} />
      </Switch>
      footer
    </div>
  );
}

export default App;
