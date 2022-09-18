import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Home from './components/Home';
import Footer from './components/shared/Footer';
import Header from './components/shared/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
