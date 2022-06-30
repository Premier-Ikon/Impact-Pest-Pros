import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
import HomeScreen from "./screens/home-screen/HomeScreen";
import ServicesScreen from "./screens/services-screen/ServicesScreen";
import AboutUsScreen from "./screens/about-screen/AboutUsScreen";
import ContactUsScreen from "./screens/contact-screen/ContactUsScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/services' component={ServicesScreen} />
        <Route path='/contact-us' component={ContactUs} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/marketing' component={Marketing} />
        <Route path='/consulting' component={Consulting} />
      </Switch>
    </Router>
  );
}

export default App;
