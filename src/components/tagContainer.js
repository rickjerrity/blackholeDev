import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import kebabCase from 'lodash.kebabcase';

import './styles/tagContainer.css';

const TagContainer = ({ tags }) => (
  <div className="tagContainer">
    {tags && tags.length
      ? tags.map((tag) => (
          <Link key={tag} to={`tags/${kebabCase(tag)}`}>
            <span className="tag">{tag}</span>
          </Link>
        ))
      : null}
  </div>
);

TagContainer.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TagContainer;
