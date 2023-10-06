import Carousel from 'react-bootstrap/Carousel';
import fotoSuzuki from "./assets/suzukiCortada.jpg";
import fotoYamaha from "./assets/yamahaCortada.jpg";
import fotoKawasaki from "./assets/kawa.jpg";
import fotoHonda from "./assets/HondaCortada.jpg";
import { Link, useHistory } from 'react-router-dom';

function CarouselsMain() {
  const history = useHistory();

  return (
    <Carousel interval={3000} fade>
      <Carousel.Item>
        <Link onClick={() => {
          history.push('/motos-yamaha');
          window.location.reload();
        }}>
          <img src={fotoYamaha} style={{ maxWidth: "100%", height: "auto" }} text="primer slide" />
        </Link>
        <Carousel.Caption>
          <h3>Yamaha</h3>
          <p>Confiabilidad y Diseño.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => {
          history.push('/motos-kawasaki');
          window.location.reload();
        }}>
          <img src={fotoKawasaki} style={{ maxWidth: "100%", height: "auto" }} text="segundo slide" />
        </Link>
        <Carousel.Caption>
          <h3>Kawasaki</h3>
          <p>Torque y Agresividad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => {
          history.push('/motos-suzuki');
          window.location.reload();
        }}>
          <img src={fotoSuzuki} style={{ maxWidth: "100%", height: "auto" }} text="tercero slide" />
        </Link>
        <Carousel.Caption>
          <h3>Suzuki</h3>
          <p>
            Velocidad y Prestaciones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link onClick={() => {
          history.push('/motos-honda');
          window.location.reload();
        }}>
          <img src={fotoHonda} style={{ maxWidth: "100%", height: "auto" }} text="cuarto slide" />
        </Link>
        <Carousel.Caption>
          <h3>Honda</h3>
          <p>
            Tecnologia y Confort.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselsMain;