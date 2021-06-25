import './App.css';
import HomePage from './components/home/homepage';
import ItemPage from './components/item/itempage';
import CartPage from './components/cart/cartpage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path='/cart' component={CartPage} />
          <Route path='/item/:id' component={ItemPage} />
          <Route path='/' component={HomePage} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
