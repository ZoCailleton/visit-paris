import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './loader.scss'

const Loader = () => {

    const el = useRef()
    const q = gsap.utils.selector(el)
    const tl = useRef()

    useEffect(() => {

        tl.current = gsap.timeline()
            .to(q('.layer.white'), {y: 0})
            .to(q('.layer.beige'), {y: 0})
            .to(tl.current, {y: 0})

    }, [])

    return (
        <div ref={el} className="loader">
            <div className="layer white"></div>
            <div className="layer beige"></div>
        </div>
    )
}

export default Loader
