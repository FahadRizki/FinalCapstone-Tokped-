import NavbarComponent from "../layout/Navbar"
import CardProduct from "../product/CardProduct"
import CarouselComponent from "../layout/Carousel"
import CardTrend from "../layout/CardTrend"
import ComponentKategori from "../layout/ComponentKategori"
import CarouselPencarian from "../layout/CarouselPencarian"
import NavbarCategory from "../layout/NavbarCategory"
import FooterComponent from "../layout/Footer"
function Home() {
    return (
        <div >
            <NavbarComponent />
            <div className="container mx-auto mt-4">
                <CarouselComponent />
                <ComponentKategori />
                <CardTrend />  
                <CarouselPencarian />
                <NavbarCategory />
                <CardProduct />             
            </div>
            <FooterComponent />
        </div>
    )
}

export default Home