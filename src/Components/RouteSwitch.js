import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './Nav';
import App from './App';
import Hats from './Hats'

const RouteSwitch = () => {
  return (
    
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/hats" element={<Hats />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RouteSwitch;