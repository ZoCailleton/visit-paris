import { useEffect } from 'react'
import { gsap, Power2 } from 'gsap'

import '../../App.scss'

import Nav from '../nav/Nav'
import Loader from '../loader/Loader'

import leaves from '../../images/header/leaves.png'
import layer1 from '../../images/header/layer-1.jpg'
import layer2 from '../../images/header/layer-2.webp'
import layer3 from '../../images/header/layer-3.png'
import layer4 from '../../images/header/layer-4.png'
import layer5 from '../../images/header/layer-5.png'
import layer6 from '../../images/header/layer-6.webp'
import layer7 from '../../images/header/layer-7.webp'
import layer8 from '../../images/header/layer-8.png'
import visit from '../../images/header/visit.svg'

const Header = () => {

  useEffect(() => {

    let tl = gsap.timeline()
    tl
    .set('.header-home .layer:nth-child(1)', {y: 500})
    .set('.header-home .layer:nth-child(2)', {y: 450})
    .set('.header-home .layer:nth-child(3)', {y: 400})
    .set('.header-home .layer:nth-child(4)', {y: 350})
    .set('.header-home .layer:nth-child(5)', {y: 300})
    .set('.header-home .layer:nth-child(6)', {y: 250})
    .set('.header-home .layer:nth-child(7)', {y: 200})
    .set('.header-home .layer:nth-child(8)', {y: 150})
    .set('.header-home .layer:nth-child(9)', {y: 100})
    .set('.header-home .leaves', {y: 50})
    .set('.header-home .heading .letter:nth-child(1)', {y: 30, opacity: 0})
    .set('.header-home .heading .letter:nth-child(2)', {y: 50, opacity: 0})
    .set('.header-home .heading .letter:nth-child(3)', {y: 15, opacity: 0})
    .set('.header-home .heading .letter:nth-child(4)', {y: 70, opacity: 0})
    .set('.header-home .heading .letter:nth-child(5)', {y: 15, opacity: 0})
    .set('.header-home .btn:nth-child(1)', {y: 15, opacity: 0})
    .set('.header-home .btn:nth-child(1) div', {y: '100%'})
    .set('.header-home .btn:nth-child(2)', {y: 25, opacity: 0})
    .set('.header-home .btn:nth-child(2) div', {y: '100%'})

    for(let layer of document.querySelectorAll('.header-home .layer')) {
      gsap.to(layer, {
        duration: 2,
        y: 0,
        ease: Power2.easeInOut,
        delay: 4.5
      })
    }
    
    for(let letter of document.querySelectorAll('.header-home .heading .letter')) {
      gsap.to(letter, {
        duration: 2,
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: 4.5
      })
    }
    
    for(let btn of document.querySelectorAll('.header-home .btn:nth-child(1), .header-home .btn:nth-child(1) div')) {
      gsap.to(btn, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: 5
      })
    }

    for(let btn of document.querySelectorAll('.header-home .btn:nth-child(2), .header-home .btn:nth-child(2) div')) {
      gsap.to(btn, {
        duration: 1.5,
        y: 0,
        opacity: 1,
        ease: Power2.easeInOut,
        delay: 5.25
      })
    }

  }, [])

  return (
    <div style={{ overflow: 'hidden' }} className="wrapper">
      <Nav />
      <Loader />
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
    </div>
  )
}

export default Header
