import { Link, useHistory } from "react-router-dom";
import imagenTexto from "./assets/Yamaha-R1-25-anos-1-min.jpg"

function MainHome() {
    const history = useHistory();
    return (
        <main className="contenedorInfo">
            <div className="contenedorTitulo">
                <h1>Toda la Informacion sobre tus marcas favoritas</h1>
            </div>

            <div className="card-horizontal">
                <div className="card-horizontal-image">
                    <img
                        style={{ maxWidth: "100%", height: "auto" }}
                        src={imagenTexto}
                        alt="Imagen"
                    />
                </div>
                <div className="card-horizontal-text">
                    <div className="cardTitulo">
                        <h3 style={{ fontSize: "50px" }}>Somos</h3>
                    </div>
                    <div className="cardTexto">
                        <p className="cambiartamaño">
                            MotoPedia es una pagina de informacion de motos donde damos una fiche tecnica
                            basica para ayudarte a encontrar tu motocicleta ideal o conocer mas la que tiene,
                            es una pagina creada por amantes de las 2 ruedas orientado a un publico con la misma
                            pasion o nuevos en el mundo del motor, encontraras principalmente marcas japonesas
                            pues son el tipo de motocicleta que mas recomendamos ademas encontraras diferentes
                            tipos de motocicletas como Scooter, Deportivas o Touring todo dependiendo de tus gustos,
                            esperamos que te guste la informacion y Bienvenido a MotoPedia.
                        </p>
                    </div>
                </div>
            </div>
            <div className="cardDiseño">
                <div className="tituloMarcas">
                    <h3 style={{ fontSize: "50px" }}>Marcas Disponibles</h3>
                </div>
                <div class="grid-container">
                    <div class="grid-item">
                        <Link onClick={() => {
                            history.push('/motos-yamaha');
                            window.location.reload();
                        }}>
                            <img src="https://img.remediosdigitales.com/9ad84d/rizoma-yamaha-mt-09-008/1366_2000.jpg"></img>
                            <p>YAMAHA</p>
                        </Link>
                    </div>
                    <div class="grid-item">
                        <Link onClick={() => {
                            history.push('/motos-honda');
                            window.location.reload();
                        }}>
                            <img src="https://p4.wallpaperbetter.com/wallpaper/344/375/803/black-honda-2018-cb1000r-hd-wallpaper-preview.jpg"></img>
                            <p>HONDA</p>
                        </Link>
                    </div>
                    <div class="grid-item">
                        <Link onClick={() => {
                            history.push('/motos-kawasaki');
                            window.location.reload();
                        }}>
                            <img src="https://w0.peakpx.com/wallpaper/141/799/HD-wallpaper-kawasaki-motorcycles.jpg"></img>
                            <p>KAWASAKI</p>
                        </Link>
                    </div>
                    <div class="grid-item">
                        <Link onClick={() => {
                            history.push('/motos-suzuki');
                            window.location.reload();
                        }}>
                            <img src="https://w0.peakpx.com/wallpaper/736/23/HD-wallpaper-suzuki-gsx-r-750-suzuky-2014-black-10.jpg"></img>
                            <p>SUZUKI</p>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default MainHome;