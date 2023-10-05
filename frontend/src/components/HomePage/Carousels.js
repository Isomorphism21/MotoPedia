import Carousel from 'react-bootstrap/Carousel';

function CarouselsMain() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="./assets/suzukiCortada.jpg" style={{maxWidth:"100%", height:"auto"}} text="First slide"/>
        <Carousel.Caption>
          <h3>Yamaha</h3>
          <p>Confiabilidad y Diseño.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src='https://www.incolmotos-yamaha.com.co/wp-content/uploads/2023/08/xtz250bannerHome.jpg' style={{maxWidth:"100%", height:"auto"}} text="First slide"/>
        <Carousel.Caption>
          <h3>Kawasaki</h3>
          <p>Torque y Agresividad.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://comotos.co/wp-content/uploads/2019/08/Product_Detail_Page_Banner_1920-965_5d4a6bfaeafbf-min.jpg' style={{maxWidth:"100%", height:"auto"}} text="First slide"/>

        <Carousel.Caption>
          <h3>Suzuki</h3>
          <p>
            Velocidad y Prestaciones.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.autecomobility.com/recursos/imagenes/hotsite/kawasaki/2023/BANNER-VERSYS-WEB.webp' style={{maxWidth:"100%", height:"auto"}} text="First slide"/>

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