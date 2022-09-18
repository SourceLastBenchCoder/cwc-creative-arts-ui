import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './components/Home';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about-us' element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
