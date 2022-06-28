import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './screens/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './screens/Services';
import Products from './screens/Products';
import ContactUs from './screens/ContactUs';
import SignUp from './screens/SignUp';
import Marketing from './screens/Marketing';
import Consulting from './screens/Consulting';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/products' component={Products} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
