import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './loader.scss'

const Loader = () => {

    useEffect(() => {

        document.querySelector('.loader').classList.add('active')

    }, [])

    return (
        <div className="loader">
            <div className="layer beige"/>
            <div className="layer white"/>
        </div>
    )
}

export default Loader
