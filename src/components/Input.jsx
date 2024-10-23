import React from "react";
import PropTypes from "prop-types";

// ForwardRef component with display name
const Input = React.forwardRef(({ type, placeholder }, ref) => {
  return (
    <div>
      <input ref={ref} type={type} placeholder={placeholder} />
    </div>
  );
});

// Adding display name to the component for better debugging
Input.displayName = "Input";

// Defining prop types to validate props
Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
