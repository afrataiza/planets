import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div>
        <p>
          {name}
        </p>
        <p>
          {year}
        </p>
        <p>
          {country}
        </p>
        <p>
          {destination}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default PlanetCard;
