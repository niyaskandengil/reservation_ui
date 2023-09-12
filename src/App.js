
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
