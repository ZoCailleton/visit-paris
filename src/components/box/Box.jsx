import { useEffect } from 'react'
import axios from 'axios'
import './box.scss'

const Box = ({ title, illu, bottom }) => {

    useEffect(() => {
        axios.get(`https://randomuser.me/api/`)
        .then(res => {
            console.log(res.data.results[0].picture.thumbnail)
        })
    }, []);

    return (
        <div className={`box-discover ${bottom && 'bottom'}`}>
            <div className="illu transition relative">
                <div className="flex gap-2 absolute right-5 bottom-5 z-10">
                    <div className="w-10 h-2 bg-white rounded-full" />
                    <div className="w-5 h-2 bg-white rounded-full opacity-50" />
                    <div className="w-5 h-2 bg-white rounded-full opacity-50" />
                </div>
                <img className="transition" src={illu} alt="Lieu emblématique de Paris" />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="heading leading-9">{title}</h3>
                    <p>with Pierre</p>
                </div>
                <div className="flex">
                    <div className="face"></div>
                    <div className="face"></div>
                    <div className="face"></div>
                </div>
            </div>
        </div>
    )
}

export default Box
