import Header from './components/Header';
import MenuBar from './components/MenuBar';
import Carousel from './components/Carousel';
import FeaturedProducts from './components/FeaturedProducts';
import MidBanner from './components/MidBanner';
import Footer from './components/Footer';

import '../src/App.css';

function App() {
  return (
    <div>
      <Header />
      <MenuBar />
      <Carousel />
      <FeaturedProducts title={'Nuevos productos'} />
      <MidBanner />
      <FeaturedProducts title={'Más vendidos'} />
      <Footer />
    </div>
  );
}

export default App;
