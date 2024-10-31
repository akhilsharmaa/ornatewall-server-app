import '../App.css';
import Footer from '../components/Footer';
import HeroSection from '../components/Hero';
import { Navbar } from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection/>

        <p className='h-80'>H</p>
        <p className='h-80'></p>
        <p className='h-80'></p>
        <p className='h-80'></p>
        <p className='h-80'></p>

      
      <Footer />
    </div>
  );
}

export default Home;
