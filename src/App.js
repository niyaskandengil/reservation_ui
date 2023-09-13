
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserLogin from './components/UserLogin';
import AboutUS from './components/AboutUS';
import ContactUs from './components/ContactUs';
import Homepage from './components/Homepage';
import UserSignUp from './components/UserSignUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepage />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/aboutus" element={<AboutUS />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/usersignup" element={<UserSignUp />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
