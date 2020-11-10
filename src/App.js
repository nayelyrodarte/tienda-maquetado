import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import MidBanner from './components/MidBanner';
import BrandsBanner from './components/BrandsBanner';
import Footer from './components/Footer';

import '../src/App.css';
import featuredProducts from './components/FeaturedProducts';

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <Carousel />
      <FeaturedProducts title={'Nuevos productos'} />
      <FeaturedProducts title={'Más vendidos'} />
      <Footer />
    </div>
  );
}

export default App;
