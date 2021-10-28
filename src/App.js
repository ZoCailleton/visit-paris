import { useEffect, useRef, useState } from 'react'
import { gsap, Power0 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

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

import backgroundGuide from './images/guide/background.jpg'
import guide from './images/guide/guide.jpg'

import circleBlack from './images/presentation/paris-with-locals-black.svg'
import circleWhite from './images/presentation/paris-with-locals-white.svg'

function App() {
    
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  const [step, setStep] = useState(0)

  const sectionHeader = useRef(null)
  const sectionDiscover = useRef(null)
  const sectionPresentation = useRef(null)
  const sectionGuide = useRef(null)

  const handlePrev = () => step > 0 ? setStep(step - 1) : setStep(4)
  const handleNext = () => step < 3 ? setStep(step + 1) : setStep(0)

  useEffect(() => {

    if(step === 0) {
      gsap.to(window, {duration: 1.5, scrollTo: "#header", ease: "power2"});
    } else if(step === 1) {
      gsap.to(window, {duration: 2, scrollTo: "#discover", ease: "power2"});
    } else if(step === 2) {
      gsap.to(window, {duration: 2, scrollTo: "#presentation", ease: "power2"});
    } else if(step === 3) {
      gsap.to(window, {duration: 1.5, scrollTo: "#guide", ease: "power2"});
    }

  }, [step])

  useEffect(() => {

    // Sections
    document.querySelectorAll('section').forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          start: 'top 30%',
          trigger: section,
          toggleClass: 'visible',
        }
      });
    });

    // Header
    let i=0;
    for(let layer of document.querySelectorAll('.header-home .container-layer .layer')) {
      i++
      gsap.to(layer, {
        top: 400-(i*50),
        ease: Power0.easeNone,
        scrollTrigger: {
          trigger: '.header-home',
          start: 'top top',
          end: '120%',
          scrub: true
        }
      });
    }
    
    // Leaves
    gsap.to(document.querySelector('.leaves'), {
      top: -150,
      scrollTrigger: {
        trigger: '.header-home',
        start: 'top top',
        end: '120%',
        scrub: true,
        marker: true
      }
    })

    // Heading
    const posLetters = {
      1: 35,
      2: 25,
      3: 50,
      4: 25,
      5: 35
    }

    i=1
    for(let letter of document.querySelectorAll('.header-home .heading .letter')) {
      gsap.to(letter, {
        y: posLetters[i],
        scrollTrigger: {
          trigger: '.header-home',
          start: 'top top',
          end: '100%',
          scrub: true
        }
      })
      i++
    }

    // Boxes
    for(let illu of document.querySelectorAll('.box-discover .illu img')) {
      gsap.to(illu, {
        marginTop: 100,
        ease: Power0.easeNone,
        scrollTrigger: {
          trigger: 'section.discover',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      })
    }
    
    // Paris with locals
    for(let circle of document.querySelectorAll('.circle')) {
      gsap.to(circle, {
        rotate: 360,
        scrollTrigger: {
          trigger: '.presentation',
          start: 'top bottom',
          scrub: 1
        }
      })
    }

    // Bars
    const bars = {
      1: 200,
      2: 30,
      3: 100,
      4: 30,
      5: 120,
      6: 250
    }

    i=1

    for(let bar of document.querySelectorAll('.bars .bar')) {
      gsap.to(bar, {
        height: bars[i],
        scrollTrigger: {
          trigger: 'section.discover',
          start: 'top bottom',
          end: '50% top',
          scrub: 1
        }
      });
      i++
    }

    // Presentation
    gsap.to('section.presentation .mini-hero', {
      bottom: 50,
      ease: Power0.easeNone,
      scrollTrigger: {
        trigger: 'section.presentation',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

    // Guides - Background
    gsap.to(document.querySelector('section.guide .background'), {
      y: 0,
      ease: Power0.easeNone,
      scrollTrigger: {
        trigger: 'section.guide',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    })

    document.querySelector('.header-home').classList.add('active')

    //Apparition textes
    const headings = document.querySelectorAll('.heading-regular.animated')

    let j=1;
    for(let heading of headings) {
      let i=0
      for(let line of heading.querySelectorAll('.line')) {
        const letters = line.textContent.split('')
        line.innerHTML = ''
        for(let letter of letters) {
          line.innerHTML += `<span class="letter ${(i > 15 && i < 24 && j === 1) || (i > 18 && i < 22 && j === 2) || (i > 4 && i < 8 && j === 3) ? 'italic' : ''} ${(i > 15 && i < 24 && j === 1) || (i > 20 && i < 26 && j === 3) ? 'beige' : ''} ${letter === ' ' ? 'space' : ''}" style="transition-delay: ${i*15}ms;">${letter}</span>`
          i++
        }
      }
      j++
    }
    
    i=0
    for(let face of document.querySelectorAll('.face')) {
      face.style.transitionDelay = `${i*100}ms`
      i++
    }

  }, [])

  return (
    <>
      <div className="p-6 flex gap-4 fixed right-0 bottom-0 z-50">
        <div onClick={handlePrev} className="prev w-16 h-16 bg-gray-400 rounded-full cursor-pointer"></div>
        <div onClick={handleNext} className="next w-16 h-16 bg-gray-400 rounded-full cursor-pointer"></div>
      </div>
      <div className="wrapper">
        <Nav />
        <Loader />
        <header id="header" ref={sectionHeader} className="header-home">
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
              <h1 className="heading">
                <span className="letter">P</span>
                <span className="letter">a</span>
                <span className="letter">r</span>
                <span className="letter">i</span>
                <span className="letter">s</span>
              </h1>
              <div className="w-full flex justify-center gap-4">
                <div className="cta"><div>Learn more</div></div>
                <div className="cta dark"><div>Book a <span>guide</span></div></div>
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
        <section id="discover" ref={sectionDiscover} className="discover bg-black">
          <Strokes />
          <h2 className="heading-regular galins animated"><span className="line">Discover the</span><span className="line">City of the Lights</span></h2>
          <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
          <div className="mt-12 flex justify-center flex-wrap gap-10">
            <Box title="The secrets of Montmartres" illu={visit1} />
            <Box title="Montmartres" illu={visit2} bottom={true} />
            <Box title="Montmartres" illu={visit3} />
          </div>
          <div className="dots mt-8 flex justify-center gap-3">
            <div className="dot active w-4 h-4 rounded-full" />
            <div className="dot w-4 h-4 rounded-full" />
            <div className="dot w-4 h-4 rounded-full" />
          </div>
        </section>
        <section id="presentation" ref={sectionPresentation} className="presentation">
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
              <h2 className="heading-regular galins animated"><span className="line">Discover</span><span className="line">the City of</span><span className="line">the Lights</span></h2>
              <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
              <div className="cta dark"><div>Book a <span>guide</span></div></div>
            </div>
          </div>
          <img className="circle" src={circleBlack} alt="Paris with locals"/>
        </section>
        <section id="guide" ref={sectionGuide} className="guide">
          <img className="background" src={backgroundGuide} alt="Paris" />
          <img className="circle" src={circleWhite} alt="Paris with locals"/>
          <Strokes />
          <div className="inner">
            <div>
              <h2 className="heading-regular galins animated"><span className="line">Find the</span><span className="line">perfect local</span><span className="line">guide</span></h2>
              <p className="paragraphe">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, mauris amet, scelerisque nec velit quam eget eu volutpat. Amet duis risus odio hendrerit.</p>
              <div className="cta dark"><div>Book a <span>guide</span></div></div>
            </div>
            <div className="illu">
              <div className="hero">
                <img src={guide} alt="Rue de Paris" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
