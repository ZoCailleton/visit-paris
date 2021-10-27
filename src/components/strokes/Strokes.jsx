import './strokes.scss'

const Strokes = ({ dark }) => {
    return (
        <div className={`strokes ${dark && 'dark'}`}>
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
        </div>
    )
}

Strokes.defaultProps = {
    dark: false
}

export default Strokes
