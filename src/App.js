
import './App.css';

import { BrowserRouter,  Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import {CountriesDetails} from "./components/CountriesDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:alpha3Code" element={<CountriesDetails />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
