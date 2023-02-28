import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import Footer from './components/footer/Footer';
import Privacypolicy from './components/privacypolicy/Privacypolicy';
import Termandcondition from './components/termandcondition/Termandcondition';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacyandpolicy" element={<Privacypolicy />} />
          <Route exact path="/termandcondition" element={<Termandcondition />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
