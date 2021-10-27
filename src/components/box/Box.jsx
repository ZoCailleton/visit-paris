import './box.scss'

const Box = ({ title, illu, bottom }) => {
    return (
        <div className={`box-discover ${bottom && 'bottom'}`}>
            <div className="illu">
                <img src={illu} alt="Lieu emblématique de Paris" />
            </div>
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="heading">{title}</h3>
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
