import React, { useContext } from 'react';

import ThemeContext from 'context/themeContext';
import DarkTheme from './DarkTheme';
import LightTheme from './LightTheme';

function CircleLoading() {
  const theme = useContext(ThemeContext);

  return theme.lightMode ? <LightTheme /> : <DarkTheme />;
}

export default CircleLoading;
