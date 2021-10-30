import { useEffect, useState } from 'react'
import { gsap, Power2 } from 'gsap'

import './loader.scss'

import parisLogo from '../../images/loader/eiffel-tower.svg'

const Loader = () => {

    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        let tl = gsap.timeline()
        .set(document.querySelector('.leaves'), {y: 200})
        .to(document.querySelector('.loader .loading'), 2, {rotate: 360, ease: Power2.easeInOut})
        .to(document.querySelector('.loader .black'), 2, {y: '-120vh', ease: Power2.easeInOut})
        .to(document.querySelector('.loader .beige'), 2, {y: '-50vh', ease: Power2.easeInOut}, '-=2')
        .to(document.querySelector('.loader'), 2, {y: '-100vh', ease: Power2.easeInOut}, '-=2')
        .to(document.querySelector('.leaves'), 2, {y: 0, ease: Power2.easeInOut}, '-=2')

    }, [loaded])

    return (
        <div className="loader">
            <div className="layer beige"/>
            <div className="layer black">
                <div id="parent">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 34 34">
                    <circle cx="17" cy="17" r="15.5"
                            class="countdown__background"/>

                    <circle cx="17" cy="17" r="15.5"
                            class="countdown__progress 
                                    js-countdown__progress"/>
                    </svg>
                    <div id="countdown-progress-label-container"></div>
                </div>
                <div className="loading">
                    <img src={parisLogo} alt="Paris" />
                </div>
            </div>
        </div>
    )
}

export default Loader
