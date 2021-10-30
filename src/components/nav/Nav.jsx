import './nav.scss'

const Nav = () => {
    return (
        <nav className="main-nav">
            <div className="inner">
                <p className="logo galins">Flights</p>
                <div className="flex items">
                    <div>Tours</div>
                    <div>Guides</div>
                    <div>Q&A</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div style={{ width: 125 }}></div>
            </div>
        </nav>
    )
}

export default Nav
