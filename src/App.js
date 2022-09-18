import './App.css';
import {useEffect} from 'react';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomeScreen from "./screens/home-screen/HomeScreen";
import ServicesScreen from "./screens/services-screen/ServicesScreen";
import AboutUsScreen from "./screens/about-screen/AboutUsScreen";
import ContactUsScreen from "./screens/contact-screen/ContactUsScreen";
import PestControlScreen from "./screens/pest-control-screen/PestControlScreen";
import BirdControlScreen from "./screens/bird-control-screen/BirdControlScreen";
import RodentControlScreen from "./screens/rodent-control-screen/RodentControlScreen";
import BeeRemovalScreen from "./screens/bee-removal-screen/BeeRemovalScreen";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import ScrollToTop from "./ScrollToTop";

import ReactGA from 'react-ga'
const TRACKING_ID = "G-P32TLG0VRW"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Router>
        <ScrollToTop/>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<HomeScreen/>} />
          <Route path='/services' element={<ServicesScreen/>} />
          <Route path='/about-us' element={<AboutUsScreen/>} />
          <Route path='/contact-us' element={<ContactUsScreen/>} />
          <Route path='/pest-control' element={<PestControlScreen/>} />
          <Route path='/rodent-control' element={<RodentControlScreen/>} />
          <Route path='/bee-removal' element={<BeeRemovalScreen/>} />
          <Route path='/bird-control' element={<BirdControlScreen/>} />
          <Route path='/account' element={() => {
            window.location.href = "https://impactpestpros.pestportals.com/landing/index";
          }} />
          <Route path='/test' element={() => {
            window.location.href = "mailto: info@impactpestpros.com?subject=Online Inquiry";
          }}/>
        </Routes>
        <Footer />

      </Router>
    </div>
  );
}

export default App;
