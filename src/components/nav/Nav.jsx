import { gsap, Power2 } from 'gsap'
import { useEffect } from 'react/cjs/react.development'

import './nav.scss'

const Nav = () => {

    useEffect(() => {

        let tl = gsap.timeline()
        tl
        .set('.main-nav .inner .border-elt', {width: 0})
        .to('.main-nav .items div:nth-child(1) span', {duration: 1, y: 0, ease: Power2.easeInOut, delay: 5})
        .to('.main-nav .inner .border-elt', {duration: 1, width: '100%', ease: Power2.easeInOut})
        .to('.main-nav .items div:nth-child(1) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.75')
        .to('.main-nav .items div:nth-child(2) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.75')
        .to('.main-nav .items div:nth-child(3) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.75')
        .to('.main-nav .items div:nth-child(4) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.75')
        .to('.main-nav .items div:nth-child(5) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.75')

    }, [])

    return (
        <nav className="main-nav">
            <div className="inner">
                <div className="border-elt"/>
                <p className="logo galins">Places</p>
                <div className="flex items">
                    <div><span>Tours</span></div>
                    <div><span>Guides</span></div>
                    <div><span>Q&A</span></div>
                    <div><span>Blog</span></div>
                    <div><span>Contact</span></div>
                </div>
                <div style={{ width: 125 }}></div>
            </div>
        </nav>
    )
}

export default Nav
