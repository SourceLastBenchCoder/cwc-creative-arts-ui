import { MDBContainer } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import Header from './components/shared/Header';
import Jumbotron from './components/shared/Jumbotron';

function App() {
  return (
    <>
      <Header />
      <Jumbotron />
      <MDBContainer>
        
      </MDBContainer>
    </>
  );
}

export default App;
