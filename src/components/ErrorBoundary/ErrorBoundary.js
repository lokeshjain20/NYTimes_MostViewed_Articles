import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const errorHandler = () => {
      setHasError(true);
    };

    window.addEventListener("error", errorHandler);

    return () => {
      window.removeEventListener("error", errorHandler);
    };
  }, []);

  if (hasError) {
    return (
      <div>
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }

  return children;
};
ErrorBoundary.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ErrorBoundary;
