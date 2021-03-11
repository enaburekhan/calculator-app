import PropTypes from 'prop-types';

const Button = ({ buttonName }) => (
  <div>
    <button>
      {buttonName}
    </button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Button;
