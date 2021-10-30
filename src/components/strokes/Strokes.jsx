import './strokes.scss'

const Strokes = ({ dark, small }) => {
    return (
        <div className={`strokes ${dark ? 'dark' : ''} ${small ? 'small' : ''}`}>
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
          <div className="stroke" />
        </div>
    )
}

Strokes.defaultProps = {
    dark: false,
    small: false
}

export default Strokes
