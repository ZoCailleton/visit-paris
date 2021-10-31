import { useEffect, useState } from 'react'
import { gsap, Power0, Power2 } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

import './App.scss';

import Nav from './components/nav/Nav'
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
import visit1_2 from './images/discover/visit-01-2.jpg'
import visit1_3 from './images/discover/visit-01-3.jpg'
import visit2 from './images/discover/visit-02.jpg'
import visit3 from './images/discover/visit-03.jpg'
import visit3_2 from './images/discover/visit-03-2.jpg'

import brush from './images/presentation/brush.svg'
import presentation1 from './images/presentation/presentation-01.jpg'
import presentation2 from './images/presentation/presentation-02.jpg'

import backgroundGuide from './images/guide/background.jpg'
import bgGuide1 from './images/guide/background-01.jpg'
import bgGuide2 from './images/guide/background-02.jpg'
import bgGuide3 from './images/guide/background-03.jpg'
import guide1 from './images/guide/guide-01.png'
import guide2 from './images/guide/guide-02.png'
import guide3 from './images/guide/guide-03.png'

import circleBlack from './images/presentation/paris-with-locals-black.svg'
import circleWhite from './images/presentation/paris-with-locals-white.svg'

import arrow from './images/icons/arrow.svg'

function App() {
    
  gsap.registerPlugin(ScrollTrigger)
  gsap.registerPlugin(ScrollToPlugin)

  const [step, setStep] = useState(0)

  const handlePrev = () => step > 0 ? setStep(step - 1) : setStep(4)
  const handleNext = () => step < 4 ? setStep(step + 1) : setStep(0)

  useEffect(() => {

    if(step === 0) {
      gsap.to(window, {duration: 1.5, scrollTo: "#header", ease: Power2.easeInOut});
    } else if(step === 1) {
      gsap.to(window, {duration: 2, scrollTo: {y: "#discover", offsetY: -100}, ease: Power2.easeInOut});
    } else if(step === 2) {
      gsap.to(window, {duration: 2, scrollTo: {y: "#presentation", offsetY: -100}, ease: Power2.easeInOut});
    } else if(step === 3) {
      gsap.to(window, {duration: 1.5, scrollTo: "#guide", ease: Power2.easeInOut});
    } else if(step === 4) {
      gsap.to(window, {duration: 2, scrollTo: "#black", ease: Power2.easeInOut});
    }

  }, [step])

  useEffect(() => {

    // Sections
    document.querySelectorAll('section').forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          start: 'top 30%',
          trigger: section,
          toggleClass: 'visible'
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
          end: 'bottom top',
          scrub: true
        }
      });
    }

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.header-home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    
    tl.to(document.querySelectorAll('.header-home .btn:nth-child(1)'), {y: 15, rotate: 2})
    tl.to(document.querySelectorAll('.header-home .btn:nth-child(2)'), {y: 30, rotate: -2, filter: 'blur(1px)'})
    
    // Leaves
    gsap.to(document.querySelector('.leaves'), {
      top: -150,
      scrollTrigger: {
        trigger: '.header-home',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
    
    i=0
    for(let face of document.querySelectorAll('.people div')) {
      face.style.transitionDelay = `${i*50}ms`
      i++
    }

    // Heading
    const posLetters = {
      1: {
        y: 35,
        rotate: 4
      },
      2: {
        y: 25,
        rotate: 0
      },
      3: {
        y: 15,
        rotate: 0
      },
      4: {
        y: 25,
        rotate: -1
      },
      5: {
        y: 35,
        rotate: -5
      }
    }

    i=1
    for(let letter of document.querySelectorAll('.header-home .heading .letter')) {
      gsap.to(letter, {
        y: posLetters[i].y,
        rotate: posLetters[i].rotate,
        scrollTrigger: {
          trigger: '.header-home',
          start: 'top top',
          end: '100%',
          scrub: true
        }
      })
      i++
    }
    
    // Paris with locals
    for(let circle of document.querySelectorAll('.circle')) {
      gsap.to(circle, {
        rotate: 480,
        scrollTrigger: {
          trigger: '.presentation',
          start: 'top bottom',
          scrub: 1
        }
      })
    }

    // Bars
    const bars = {
      1: 250,
      2: 50,
      3: 100,
      4: 50,
      5: 150,
      6: 300
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

    // Guides - Background

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'section.guide',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    tl.to(document.querySelector('section.guide .background'), 1, {y: 200, opacity: 0.2, ease: Power0.easeNone});

    gsap.to(document.querySelector('.main-nav'), {
      y: -150,
      ease: Power0.easeNone,
      scrollTrigger: {
        trigger: 'section.guide',
        start: 'top top',
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
          line.innerHTML += `<span class="letter ${(i > 15 && i < 24 && j === 1) || (i > 19 && i < 27 && j === 2) || (i > 4 && i < 8 && j === 3) ? 'italic' : ''} ${(i > 15 && i < 24 && j === 1) || (i > 20 && i < 26 && j === 3) ? 'beige' : ''} ${letter === ' ' ? 'space' : ''}" style="transition-delay: ${i*15}ms;">${letter}</span>`
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
    
    tl = gsap.timeline({
      scrollTrigger: {
        trigger: 'section.guide',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })

  }, [])

  const playCarouselGuides = to => {

    let tl = gsap.timeline();

    if(to === 1) {

      tl
      .to('section.guide .hero .carousel', 1, {x: 0, ease: Power2.easeInOut})
      .to('section.guide .hero .carousel .slide:nth-child(1) .subject', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(1) .landscape', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(2) .subject', 1, {marginLeft: 200, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(2) .landscape', 1, {marginLeft: -50, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(3) .subject', 1, {marginLeft: 200, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(3) .landscape', 1, {marginLeft: -50, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .infos .names', 1, {y: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .next', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .prev', 1, {opacity: 0.25, ease: Power2.easeInOut}, '-=1')
      
    } else if(to === 2) {

      tl
      .to('section.guide .hero .carousel', 1, {x: '-33.33%', ease: Power2.easeInOut})
      .to('section.guide .hero .carousel .slide:nth-child(1) .subject', 1, {marginLeft: -100, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(1) .landscape', 1, {marginLeft: 50, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(2) .subject', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(2) .landscape', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .infos .names', 1, {y: '-33.33%', ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .next', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .prev', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')

    } else if(to === 3) {

      tl
      .to('section.guide .hero .carousel', 1, {x: '-66.66%', ease: Power2.easeInOut})
      .to('section.guide .hero .carousel .slide:nth-child(2) .subject', 1, {marginLeft: -100, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(2) .landscape', 1, {marginLeft: 50, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(3) .subject', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .carousel .slide:nth-child(3) .landscape', 1, {marginLeft: 0, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .infos .names', 1, {y: '-66.66%', ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .next', 1, {opacity: 0.25, ease: Power2.easeInOut}, '-=1')
      .to('section.guide .hero .navigation .prev', 1, {opacity: 1, ease: Power2.easeInOut}, '-=1')

    }

  }

  return (
    <>
      <div className="p-6 flex gap-4 fixed right-0 bottom-0 z-50">
        <div onClick={handlePrev} className="prev w-16 h-16 bg-gray-400 rounded-full cursor-pointer"></div>
        <div onClick={handleNext} className="next w-16 h-16 bg-gray-400 rounded-full cursor-pointer"></div>
      </div>
      <div className="wrapper">
        <Nav />
        <header id="header" className="header-home">
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
                <div className="btn"><div>Learn more</div></div>
                <div className="btn dark"><div>Book a <span>guide</span></div></div>
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
        <section id="discover" className="discover bg-black">
          <Strokes />
          <h2 className="heading-regular galins animated"><span className="line">Discover the</span><span className="line">City of the Lights</span></h2>
          <p className="paragraphe"><span className="line"><span>We offer many classic but also atypical and original tours</span></span><span className="line"><span>to discover the city and its most charming</span></span><span className="line"><span> places</span></span></p>
          <div className="mt-12 flex justify-center flex-wrap gap-10">
            <Box title="The secrets of Montmartres" illu={visit1} illu2={visit1_2} illu3={visit1_3} faces={[1, 2, 3]} />
            <Box title="Private visit of the Louvre" illu={visit2} faces={[4, 5]} bottom={true} />
            <Box title="In the footsteps of Napoleon" illu={visit3} illu2={visit3_2} faces={[6, 7, 8]} />
          </div>
        </section>
        <section id="presentation" className="presentation">
          <img className="brush" src={brush} alt="" />
          <Strokes small={true} />
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
              <h2 className="heading-regular galins animated"><span className="line">Live an</span><span className="line">unforgettable</span><span className="line">journey</span></h2>
              <p className="paragraphe"><span className="line"><span>A city steeped in history and culture, Paris</span></span><span className="line"><span>has an endless list of monuments and</span></span><span className="line"><span>activities to discover. You will never be bored.</span></span></p>
              <div className="cta"><div>Discover <span>places</span></div></div>
            </div>
          </div>
          <img className="circle" src={circleBlack} alt="Paris with locals"/>
        </section>
        <section id="guide" className="guide">
          <img className="background" src={backgroundGuide} alt="Paris" />
          <img className="circle" src={circleWhite} alt="Paris with locals"/>
          <Strokes />
          <div className="inner">
            <div>
              <h2 className="heading-regular galins animated"><span className="line">Find the</span><span className="line">perfect local</span><span className="line">guide</span></h2>
              <p className="paragraphe"><span className="line"><span>What better to discover a city than to be guided</span></span><span className="line"><span>by its inhabitants ? Let yourself be surprised</span></span><span className="line"><span>and discover the secrets of Paris while</span></span><span className="line"><span>going off the beaten track.</span></span></p>
              <div className="cta"><div>Book a <span>guide</span></div></div>
            </div>
            <div className="illu">
              <div className="hero">
                <div className="infos">
                  <div className="names">
                    <div>
                      <h3 className="title">Anne, <span>23</span></h3>
                      <p>History Student</p>
                    </div>
                    <div>
                      <h3 className="title">Matthieu, <span>27</span></h3>
                      <p>Web Designer</p>
                    </div>
                    <div>
                      <h3 className="title">Alex, <span>20</span></h3>
                      <p>Student</p>
                    </div>
                  </div>
                  <nav className="navigation">
                    <img className="arrow next" src={arrow} alt="Suivant"/>
                    <img className="arrow prev" src={arrow} alt="Précédent"/>
                  </nav>
                </div>
                <div className="carousel">
                  <div onClick={() => playCarouselGuides(2)} className="slide">
                    <img className="landscape" src={bgGuide1} alt="Rue de Paris" />
                    <img className="subject" src={guide1} alt="Femme portant un bérêt rouge" />
                  </div>
                  <div onClick={() => playCarouselGuides(3)} className="slide">
                    <img className="landscape" src={bgGuide2} alt="Rue de Paris" />
                    <img className="subject" src={guide2} alt="Femme portant un bérêt rouge" />
                  </div>
                  <div onClick={() => playCarouselGuides(1)} className="slide">
                    <img className="landscape" src={bgGuide3} alt="Rue de Paris" />
                    <img className="subject" src={guide3} alt="Femme portant un bérêt rouge" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="black" className="h-screen bg-black"></section>
      </div>
    </>
  );
}

export default App;
