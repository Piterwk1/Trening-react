import React from 'react';

const Ninjas = ({ name, age, belt }) => (
  <div className="ninja">
    <div>Name: {name}</div>
    <div>Age: {age}</div>
    <div>Belt: {belt}</div>
  </div>
);

Ninjas.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  belt: PropTypes.string.isRequired,
};

export default Ninjas;
