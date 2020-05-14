import React, { useContext } from 'react';

import ThemeContext from '../context/themeContext';

import './styles/sliderSwitch.css';

const SliderSwitch = () => {
  const theme = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        onChange={theme.toggleLightMode}
        checked={theme.lightMode ? 'checked' : ''}
      />
      <span className="slider"></span>
    </label>
  );
};

export default SliderSwitch;
