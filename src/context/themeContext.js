import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const defaultState = {
  lightMode: false,
  toggleLightMode: () => {},
};

const ThemeContext = React.createContext(defaultState);

const ThemeProvider = ({ children }) => {
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    const usingLightMode = localStorage.getItem('usingLightMode');

    if (usingLightMode) {
      toggleLightMode();
    }

    // eslint-disable-next-line
  }, []);

  const toggleLightMode = () => {
    const usingLightMode = !lightMode;

    setLightMode(usingLightMode);

    if (usingLightMode) {
      localStorage.setItem('usingLightMode', 'true');

      document.body.classList.add('lightTheme');
    } else {
      localStorage.clear();

      document.body.classList.remove('lightTheme');
    }
  };

  return (
    <ThemeContext.Provider value={{ lightMode, toggleLightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

const ThemeConsumer = ThemeContext.Consumer;

export default ThemeContext;

export { ThemeProvider, ThemeConsumer };
