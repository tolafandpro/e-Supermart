import Announcement from '../components/Announcement';
import Categories from '../components/Categories';
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';


function Home() {
    return ( 
        <>
            <Announcement />
            <Navbar/>
            <Slider/>
            <Categories/>
            <Products />
            <Newsletter/>
            <Footer/>
        </>
     );
}

export default Home;