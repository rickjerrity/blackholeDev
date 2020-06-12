import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from './src/context/themeContext';

const wrappedRootElement = ({ element }) => <ThemeProvider>{element}</ThemeProvider>;

wrappedRootElement.propTypes = {
  element: PropTypes.element,
};

export const wrapRootElement = wrappedRootElement;
