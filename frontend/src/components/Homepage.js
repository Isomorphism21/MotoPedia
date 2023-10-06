import CarouselsMain from "./HomePage/Carousels.js";
import FooterHome from "./HomePage/Footer.js";
import HomeHeader from "./HomePage/Header.js"
import MainHome from "./HomePage/Main.js";

function Homepage(){
    return(
        <>
            <HomeHeader/>
            <CarouselsMain/>
            <MainHome/>
            <FooterHome/>
        </>
    )
}

export default Homepage;