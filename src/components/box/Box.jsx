import './box.scss'

const Box = ({ title, illu, bottom }) => {
    return (
        <div className={`box-discover ${bottom && 'bottom'}`}>
            <div className="illu transition relative">
                <div className="flex gap-2 absolute right-5 bottom-5">
                    <div className="w-10 h-2 bg-white rounded-full" />
                    <div className="w-5 h-2 bg-white rounded-full opacity-50" />
                    <div className="w-5 h-2 bg-white rounded-full opacity-50" />
                </div>
                <img className="transition" src={illu} alt="Lieu emblématique de Paris" />
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
