import PropTypes from 'prop-types';

const Button = ({ clickHandler, name }) => {
  const handleClick = () => clickHandler(name);

  return (

    <button type="button" onClick={handleClick}>
      {name}
    </button>

  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};

export default Button;
