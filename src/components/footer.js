import React, { useContext } from 'react';

import ThemeContext from '../context/themeContext';

const Footer = () => {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`flexContainer${theme.lightMode ? ' lightTheme' : ''}`}>
      © {new Date().getFullYear()} -&nbsp;
      <a href="https://twitter.com/rickjerrity">@rickjerrity</a>
    </footer>
  );
};

export default Footer;
