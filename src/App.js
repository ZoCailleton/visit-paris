import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger"

import './App.scss';

import Nav from './components/nav/Nav'
import Loader from './components/loader/Loader'
import Strokes from './components/strokes/Strokes'
import Box from './components/box/Box'

import leaves from './images/header/leaves.png'
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
import visit2 from './images/discover/visit-02.jpg'
import visit3 from './images/discover/visit-03.jpg'

import brush from './images/presentation/brush.svg'
import presentation1 from './images/presentation/presentation-01.jpg'
import presentation2 from './images/presentation/presentation-02.jpg'

function App() {

  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger)
    document.querySelectorAll('section').forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          start: '50% bottom',
          trigger: section,
          toggleClass: 'visible'
        }
      });
    });

    document.querySelector('.header-home').classList.add('active')
    
    const lines = document.querySelectorAll('span.line')
    
    let i=0;

    for(let line of lines) {
      const letters = line.textContent.split('')
      line.innerHTML = ''
      for(let letter of letters) {
        line.innerHTML += `<span class="letter" transition-delay="${i*50}ms;">${letter}</span>`
        i++
      }
    }

  }, [])

  return (
    <div className="wrapper">
      <Nav />
      <Loader />
      <header className="header-home">
        <img className="layer leaves" src={leaves} alt="Photo de Paris" />
        <div className="container-layer">
          <img className="layer" src={layer1} alt="Photo de Paris" />
          <img  className="layer" src={layer2} alt="Photo de Paris" />
          <img className="layer" src={layer3} alt="Photo de Paris" />
          <img  className="layer" src={layer4} alt="Photo de Paris" />
          <img className="layer" src={layer5} alt="Photo de Paris" />
          <img  className="layer" src={layer6} alt="Photo de Paris" />
          <img className="layer" src={layer7} alt="Photo de Paris" />
          <img  className="layer full" src={layer8} alt="Photo de Paris" />
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
        </div>
      </header>
      <section className="discover bg-black">
        <Strokes />
        <h2 className="heading-regular galins"><span className="line">Discover the</span><span className="line">City <span className="beige">of the</span> Lights</span></h2>
        <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
        <div className="mt-12 grid grid-cols-3 grid-gap-4">
          <Box title="Montmartres" illu={visit1} />
          <Box title="Montmartres" illu={visit2} bottom={true} />
          <Box title="Montmartres" illu={visit3} />
        </div>
        <div className="dots mt-8 flex justify-center gap-3">
          <div className="dot active w-4 h-4 rounded-full" />
          <div className="dot w-4 h-4 rounded-full" />
          <div className="dot w-4 h-4 rounded-full" />
        </div>
      </section>
      <section className="presentation">
        <img className="brush" src={brush} alt="" />
        <div className="inner">
          <div className="illu">
            <div className="hero">
              <img src={presentation1} alt="Rue de Paris" />
            </div>
            <div className="mini-hero">
              <img src={presentation2} alt="Rue de Paris" />
            </div>
          </div>
          <div>
            <h2 className="galins heading-regular">Discover the City of the Lights</h2>
            <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
            <div className="cta dark">Book a <span>guide</span></div>
          </div>
        </div>
      </section>
      <section className="guide">
        <Strokes />
        <div className="inner">
          <div>
            <h2 className="galins heading-regular">Discover the City of the Lights</h2>
            <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
            <div className="cta dark">Book a <span>guide</span></div>
          </div>
          <div className="illu">
            <div className="hero">
              <img src={presentation1} alt="Rue de Paris" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
