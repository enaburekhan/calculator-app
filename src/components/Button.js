import PropTypes from 'prop-types';

const Button = ({ buttonName }) => {
  return ( 
    <div>
      <button>
        {buttonName}    
      </button>    
    </div>  
   );
}

Button.PropTypes = {
  name: PropTypes.string.isRequired    
}
 
export default Button;