import { useState } from 'react'

import './box.scss'

const Box = ({ title, illu, illu2, illu3, faces, bottom }) => {

    const [visibleIllu, setVisibleIllu] = useState(1)

    return (
        <div className={`box-discover ${bottom && 'bottom'}`}>
            <div className="illu transition relative">
                <div className="flex gap-2 absolute right-5 bottom-5 z-10">
                    <div onClick={() => setVisibleIllu(1)} className={`dot ${visibleIllu === 1 ? 'active' : ''}`} />
                    <div onClick={() => setVisibleIllu(2)} className={`dot ${visibleIllu === 2 ? 'active' : ''}`} />
                    <div onClick={() => setVisibleIllu(3)} className={`dot ${visibleIllu === 3 ? 'active' : ''}`} />
                </div>
                <div className="w-full h-full overflow-hidden">
                    <div style={{ transform: 'translateX(-'+(visibleIllu-1)*(100/3)+'%)' }} className={`carousel`}>
                        <div>
                            <img className="transition" src={illu} alt="Lieu emblématique de Paris" />
                        </div>
                        <div>
                            <img className="transition" src={illu2} alt="Lieu emblématique de Paris" />
                        </div>
                        <div>
                            <img className="transition" src={illu3} alt="Lieu emblématique de Paris" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="heading leading-9">{title}</h3>
                    <p>with Pierre</p>
                </div>
                <div className="flex">
                    {faces.map((f, i) => {
                        <div className="face">
                            <img key={i} src={`/assets/users/user-0${f}.jpg`} alt="Utilisateur" />
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}

Box.defaultProps = {
    illu2: null,
    illu3: null
}

export default Box
