import React from 'react';
import Navbar from './components/Navbar/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './pages/Services';
import Products from './pages/Products';
// import ContactUs from './pages/ContactUs';
import SignUp from './pages/SignUp';
import Marketing from './pages/Marketing';
import Consulting from './pages/Consulting';
import HomeScreen from "./screens/home-screen/HomeScreen";
import ServicesScreen from "./screens/services-screen/ServicesScreen";
import AboutUsScreen from "./screens/about-screen/AboutUsScreen";
import ContactUsScreen from "./screens/contact-screen/ContactUsScreen";
import PestControlScreen from "./screens/pest-control-screen/PestControlScreen";
import BirdControlScreen from "./screens/bird-control-screen/BirdControlScreen";
import RodentControlScreen from "./screens/rodent-control-screen/RodentControlScreen";
import BeeRemovalScreen from "./screens/bee-removal-screen/BeeRemovalScreen";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={HomeScreen} />
        <Route path='/services' component={ServicesScreen} />
        <Route path='/contact-us' component={ContactUsScreen} />
        <Route path='/about-us' component={AboutUsScreen} />
        <Route path='/pest-control' component={PestControlScreen} />
        <Route path='/rodent-control' component={RodentControlScreen} />
        <Route path='/bee-removal' component={BeeRemovalScreen} />
        <Route path='/bird-control' component={BirdControlScreen} />
        <Route path='/account' component={() => {
          window.location.href = "https://impactpestpros.pestportals.com/landing/index";
        }} />
      </Switch>
    </Router>
  );
}

export default App;
