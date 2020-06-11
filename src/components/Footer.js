import React, { useContext } from 'react';
import { FiGithub } from 'react-icons/fi';

import ThemeContext from 'context/themeContext';

function Footer() {
  const theme = useContext(ThemeContext);

  return (
    <footer className={`centeredContent${theme.lightMode ? ' lightTheme' : ''}`}>
      © {new Date().getFullYear()}&nbsp;
      <a href="https://twitter.com/rickjerrity">@rickjerrity</a>
      &nbsp;-&nbsp;
      <a href="https://github.com/rickjerrity/blackholeDev">
        <FiGithub />
      </a>
    </footer>
  );
}

export default Footer;
