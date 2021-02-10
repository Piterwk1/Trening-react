import React from 'react';
import PropTypes from 'prop-types';

const Ninjas = ({ ninjas }) => {
  const ninjasList = ninjas.map((ninja) => (
    <div className="ninja" key={ninja.id}>
      <div>Name: {ninja.name}</div>
      <div>Age: {ninja.age}</div>
      <div>Belt: {ninja.belt}</div>
    </div>
  ));

  Ninjas.propTypes = {
    map: PropTypes.func.isRequired,
    ninjas: PropTypes.func.isRequired,
  };

  return <div className="ninja-list">{ninjasList}</div>;

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
};

export default Ninjas;
