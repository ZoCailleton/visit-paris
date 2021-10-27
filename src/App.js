import './App.scss';

import Nav from './components/nav/Nav'
import Loader from './components/loader/Loader'
import Box from './components/box/Box'

import layer1 from './images/header/layer-1.jpg'
import layer2 from './images/header/layer-2.webp'
import layer3 from './images/header/layer-3.png'
import layer4 from './images/header/layer-4.png'
import layer5 from './images/header/layer-5.png'
import layer6 from './images/header/layer-6.webp'
import layer7 from './images/header/layer-7.webp'
import layer8 from './images/header/layer-8.png'
import visit from './images/header/visit.svg'

import visit1 from './images/discover/visit-01.jpg'
import visit3 from './images/discover/visit-03.jpg'

function App() {
  return (
    <div className="wrapper">
      <Loader />
      <Nav />
      <header className="header-home">
        <img className="layer" src={layer1} alt="Photo de Paris" />
        <img className="layer" src={layer2} alt="Photo de Paris" />
        <img className="layer" src={layer3} alt="Photo de Paris" />
        <img className="layer" src={layer4} alt="Photo de Paris" />
        <img className="layer" src={layer5} alt="Photo de Paris" />
        <img className="layer" src={layer6} alt="Photo de Paris" />
        <img className="layer" src={layer7} alt="Photo de Paris" />
        <img className="layer" src={layer8} alt="Photo de Paris" />
        <div className="layer text">
          <img src={visit} alt="Visit" />
          <h1 className="heading">Paris</h1>
          <div className="w-full flex justify-center gap-4">
            <div className="cta">Learn more</div>
            <div className="cta dark">Book a <span>guide</span></div>
          </div>
        </div>
        <div className="bars flex">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </header>
      <section className="discover bg-black">
        <h2 className="heading-regular galins">Discover the<br/>City of the Lights</h2>
        <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
        <div className="mt-12 grid grid-cols-3 grid-gap-4">
          <Box title="Montmartres" illu={visit1} />
          <Box title="Montmartres" illu={visit1} bottom={true} />
          <Box title="Montmartres" illu={visit3} />
        </div>
      </section>
    </div>
  );
}

export default App;
