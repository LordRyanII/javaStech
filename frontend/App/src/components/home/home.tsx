import { Header } from "../header/Header";
import { Info } from "../info/Info";
import { Footer } from "../footer/Footer";

const Home = () => {
    return (
        <>
            <Header title="JavaStech" description="Soluções em TI" />
            <Info />
            <Footer />
        </>
    )
}

export default Home;