import React from 'react';
import PropTypes from 'prop-types';

// eslint-disable-next-line react/prop-types
const Ninjas = ({ ninjas }) => {
  // eslint-disable-next-line react/prop-types
  const ninjasList = ninjas.map((ninja) => (
    <div className="ninja">
      <div>Name: {ninja.name}</div>
      <div>Age: {ninja.age}</div>
      <div>Belt: {ninja.belt}</div>
    </div>
  ));

  return <div className="ninja-list">{ninjasList}</div>;
};

// const Ninjas = ({ name, age, belt }) => (
//   <div className="ninja">
//     <div>Name: {name}</div>
//     <div>Age: {age}</div>
//     <div>Belt: {belt}</div>
//   </div>
// );
// Ninjas.propTypes = {
//   name: PropTypes.string.isRequired,
//   age: PropTypes.number.isRequired,
//   belt: PropTypes.string.isRequired,
// };

export default Ninjas;
