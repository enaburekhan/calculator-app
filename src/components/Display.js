import PropTypes from 'prop-types';

const displayComponentStyle = {
  backgroundColor: '#858693',
  height: '100px',
  width: '100%',
  display: 'flex',
  justifyContent: 'flex-end',
  flexDirection: 'cloumn',
  alignItems: 'center',
  textAlign: 'right',
};

const displayStyle = {
  color: '#fff',
  fontSize: '30px',
  padding: '8px 8px 0',
};

const Display = ({ value }) => (
  <div style={displayComponentStyle} className="component-display">
    <div style={displayStyle}>
      {value}
    </div>
  </div>
);

Display.propTypes = {
  value: PropTypes.string,
};

Display.defaultProps = {
  value: '0',
};

export default Display;
