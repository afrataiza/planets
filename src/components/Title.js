import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StyledTitle from '../styles/title.style';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <StyledTitle>
        <h2>
          {headline}
        </h2>
      </StyledTitle>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};

export default Title;
