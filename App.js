import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home'
import Category from './pages/Category'
import CategoryDetail from './pages/CategoryDetail'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Login from './pages/Login'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/login">Admin Area</Link></li>
        </ul>
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/category" exact component={Category} />
          <Route path="/category/:name" exact component={CategoryDetail} />
          <Route path="/products" exact component={Products} />
          <Route path="/products/:id" exact component={ProductDetails} />
          <Route path="/login" component={Login} />
          <Route path="/admin" component={AdminPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
