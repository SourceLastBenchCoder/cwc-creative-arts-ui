import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Facebook, Twitter, Instagram, Youtube, Whatsapp } from 'react-bootstrap-icons';

function Header() {
  return (
    <Navbar style={{backgroundColor:'orange'}}>
      <Container>
        <Navbar.Brand href="/">
          <img src="~/assets/logo.png" alt="" width={316} />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Brand>
            <a href="/" style={{ marginRight: 10 }}> <Twitter /></a>
            <a href="/" style={{ marginRight: 10 }}>  <Youtube /></a>
            <a href="/" style={{ marginRight: 10 }}>  <Facebook /></a>
            <a href="/" style={{ marginRight: 10 }}>  <Instagram /></a>
            <a href="/" style={{ marginRight: 10 }}>  <Whatsapp /></a>
          </Navbar.Brand>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;