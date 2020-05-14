import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaRegSun, FaRegMoon } from 'react-icons/fa';

import SliderSwitch from './sliderSwitch';

const Header = ({ siteTitle }) => {
  return (
    <header>
      <h1>
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div className="themeSwitch">
        <FaRegMoon />
        <SliderSwitch />
        <FaRegSun />
      </div>
    </header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string.isRequired,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
