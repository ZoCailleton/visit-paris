import { useState } from 'react'

import './box.scss'

import user1 from '../../images/users/user-01.jpg'
import user2 from '../../images/users/user-02.jpg'
import user3 from '../../images/users/user-03.jpg'
import user4 from '../../images/users/user-04.jpg'
import user5 from '../../images/users/user-05.jpg'
import user6 from '../../images/users/user-06.jpg'
import user7 from '../../images/users/user-07.jpg'
import arrow from '../../images/icons/arrow.svg'

const Box = ({ title, illu, illu2, illu3, faces, bottom }) => {

    const [visibleIllu, setVisibleIllu] = useState(1)

    return (
        <div className={`box-discover ${bottom && 'bottom'}`}>
            <div className="illu transition relative">
                <div className="w-full h-full overflow-hidden">
                    <div className="overlay">
                        <div className="flex gap-2">
                            <div onClick={() => setVisibleIllu(1)} className={`dot ${visibleIllu === 1 ? 'active' : ''}`} />
                            <div onClick={() => setVisibleIllu(2)} className={`dot ${visibleIllu === 2 ? 'active' : ''}`} />
                            <div onClick={() => setVisibleIllu(3)} className={`dot ${visibleIllu === 3 ? 'active' : ''}`} />
                        </div>
                        <div className="w-full flex justify-between items-end">
                            <div className="w-2/3">
                                <h3 className="heading leading-9">{title}</h3>
                                <div className="flex people">
                                    <div>
                                        <img src={user1} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user2} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user3} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user4} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user5} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user6} alt="Visage" />
                                    </div>
                                    <div>
                                        <img src={user7} alt="Visage" />
                                    </div>
                                </div>
                            </div>
                            <img className="see-more" src={arrow} alt="Voir plus" />
                        </div>
                    </div>
                    <div style={{ transform: 'translateX(-'+(visibleIllu-1)*(100/3)+'%)' }} className={`carousel`}>
                        <div>
                            <img style={{ marginLeft: visibleIllu === 1 ? 0 : 100 }} className="transition" src={illu} alt="Lieu emblématique de Paris" />
                        </div>
                        <div>
                            <img style={{ marginLeft: visibleIllu === 2 ? 0 : visibleIllu === 3 ? 100 : -100 }}className="transition" src={illu2} alt="Lieu emblématique de Paris" />
                        </div>
                        <div>
                            <img style={{ marginLeft: visibleIllu === 3 ? 0 : -100 }}  className="transition" src={illu3} alt="Lieu emblématique de Paris" />
                        </div>
                    </div>
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
