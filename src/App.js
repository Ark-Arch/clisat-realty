import { 
  Routes,
  Route,
} from "react-router-dom";

import HeroSection from "./components/hero-section/hero-section.component";
import OurServices from "./components/our-services/our-services.component";
// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <HeroSection/>
      <OurServices/>
    </div>
  );
}

export default App;
