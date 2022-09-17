import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import AppCaurosal from './components/shared/AppCaurosal';
import Header from "./components/shared/Header"

function App() {
  return (
  <>
   <Header />
    <Container>     
      <AppCaurosal />
    </Container>
  </>
  );
}

export default App;
