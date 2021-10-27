import './nav.scss'

const Nav = () => {
    return (
        <nav className="main-nav">
            <div className="inner">
                <p className="logo galins">Flights</p>
                <div className="flex items">
                    <div>How we work</div>
                    <div>Pricing</div>
                    <div>Blog</div>
                    <div>Contact</div>
                </div>
                <div className="cta">Book a guide</div>
            </div>
        </nav>
    )
}

export default Nav
