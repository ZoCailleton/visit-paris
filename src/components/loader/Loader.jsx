import { useEffect, useState } from 'react'
import { gsap, Power0, Power2 } from 'gsap'

import './loader.scss'

import parisLogo from '../../images/loader/eiffel-tower.svg'

const Loader = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        
        let tl = gsap.timeline()
        .set('.loader .base', {opacity: 0})
        .to('.loader .base', 1, {opacity: 0.1, ease: Power0.easeNone})
        .to(document.querySelector('.loader .over'), 3, {webkitClipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: Power2.easeInOut, delay: 0.5})
        .to(document.querySelector('.loader .black'), 2, {y: '-120vh', ease: Power2.easeInOut})
        .to(document.querySelector('.loader .beige'), 2, {y: '-50vh', ease: Power2.easeInOut}, '-=2')
        .to(document.querySelector('.loader'), 2, {y: '-100vh', ease: Power2.easeInOut}, '-=2')

    }, [loaded])

    return (
        <div className="loader">
            <div className="layer beige"/>
            <div className="layer black">
                <img className="base" src={parisLogo} alt="Paris" />
                <img className="over" src={parisLogo} alt="Paris" />
            </div>
        </div>
    )
}

export default Loader
