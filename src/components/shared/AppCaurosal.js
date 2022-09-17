import { Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function AppCaurosal() {
  return (
   <Container>
     <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200/300?grayscale"
          alt="First slide"
          height={600}
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://picsum.photos/200"
          alt="Second slide"
          height={600}
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"
          alt="Third slide"
          height={600}
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
   </Container>
  );
}

export default AppCaurosal;