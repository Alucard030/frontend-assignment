import "./ErrorScreen.css";
import PropTypes from "prop-types";

const FullScreenError = ({ message }) => {
  return (
    <div
      className="error-container"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="error-icon">❌</div>
      <div className="error-message">{message || "Something went wrong!"}</div>
    </div>
  );
};

FullScreenError.propTypes = {
  message: PropTypes.string,
};

export default FullScreenError;
