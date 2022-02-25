import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import FloatingCart from './Components/FloatingCart/FloatingCart';
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import ProductShowcase from './Pages/ProductShowcase/ProductShowcase';
import ShoppingCart from './Pages/ShopppingCart/ShoppingCart'
import Contact from './Pages/Contact/Contact'; 


function App() {
  return (
    <Router>
      <Navbar />
      <FloatingCart />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/produits" component={Products} />
        <Route exact path="/Produits/:id" component={ProductShowcase} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/shoppingCart" component={ShoppingCart} />
      </Switch>
    </Router>
  );
}

export default App;
