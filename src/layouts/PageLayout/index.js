
//NOT EDITABLE!!!
import Topography from "../../components/Topography"
import Hero from "../../components/Hero"
import Footer from "../../components/Footer"

// EDITABLE
import background from "../../assets/img/background.jpg" //Background
import logo from '../../assets/img/logo/logo.png'; //Logo


function pageLayout( props ) {
    //EDITABLE
    const deskripsi = "Selamat datang kembali di"
    const title = "Yogyakarta Blended Learning"
    const slogan = "Yogyakarta kota pelajar berhati nyaman, membuat para pengais ilmu semangat untuk menggapai kesuksesan. Perjalanan berjuta mil menuju kesuksesan dimulai dengan satu langkah dari kota Yogyakarta."
    const copyright = "2021 Yogyakarta Blended Learning - Didukung oleh Geschool"

    return (
        <div>
            <Topography />
            <Hero 
                logo={logo}
                background={background}
                deskripsi={deskripsi}
                title={title}
                slogan={slogan}
                appName={props.appName}
            >
                { props.children }
            </Hero>
            <Footer
                copyright={copyright}
            />
        </div>
    );
}


export default pageLayout;