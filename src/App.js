import './App.css';
import HomePage from './components/home/homepage';
import ItemPage from './components/item/itempage';
import CartPage from './components/cart/cartpage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/cart' component={CartPage} />
        <Route path='/item' component={ItemPage} />
        <Route path='/' component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
