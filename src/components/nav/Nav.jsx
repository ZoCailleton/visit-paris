import { gsap, Power2 } from 'gsap'
import { useEffect } from 'react/cjs/react.development'

import './nav.scss'

const Nav = () => {

    useEffect(() => {

        let tl = gsap.timeline()
        tl
        .set('.main-nav .inner .border-elt', {width: 0})
        .to('.main-nav .logo span', {y: 0, delay: 5})
        .to('.main-nav .inner .border-elt', {duration: 2, width: '100%', ease: Power2.easeInOut})
        .to('.main-nav .items div:nth-child(1) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=2')
        .to('.main-nav .items div:nth-child(2) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=1.75')
        .to('.main-nav .items div:nth-child(3) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=1.5')
        .to('.main-nav .items div:nth-child(4) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=1.25')
        .to('.main-nav .items div:nth-child(5) span', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=1')
        .to('.main-nav .box .background', {duration: 1, y: 0, ease: Power2.easeInOut}, '-=0.5')
        .to('.main-nav .box .menu div:nth-child(1)', {duration: 1, width: '100%', ease: Power2.easeInOut}, '-=1')
        .to('.main-nav .box .menu div:nth-child(2)', {duration: 1, width: '50%', ease: Power2.easeInOut}, '-=0.75')
        .to('.main-nav .box .menu div:nth-child(3)', {duration: 1, width: '100%', ease: Power2.easeInOut}, '-=0.75')

    }, [])

    return (
        <nav className="main-nav">
            <div className="inner">
                <div className="border-elt"/>
                <p className="logo galins"><span>P</span><span>l</span><span>a</span><span>c</span><span>e</span><span>s</span></p>
                <div className="flex items">
                    <div><span>Tours</span></div>
                    <div><span>Guides</span></div>
                    <div><span>Q&A</span></div>
                    <div><span>Blog</span></div>
                    <div><span>Contact</span></div>
                </div>
                <div className="box">
                    <div className="background"/>
                    <div className="menu">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
