import React from 'react';
import PropTypes from 'prop-types';

const Ninjas = ({ ninjas, deleteNinja }) => {
  //   const ninjasList = ninjas
  //     .filter((ninja) => ninja.age > 20)
  //     .map((ninja) => (
  //       <div className="ninja" key={ninja.id}>
  //         <div>Name: {ninja.name}</div>
  //         <div>Age: {ninja.age}</div>
  //         <div>Belt: {ninja.belt}</div>
  //       </div>
  //     ));
  const ninjasList = ninjas.map((ninja) => (
    <div className="ninja" key={ninja.id}>
      <div>Name: {ninja.name}</div>
      <div>Age: {ninja.age}</div>
      <div>Belt: {ninja.belt}</div>
      <button onClick={deleteNinja}>X</button>
    </div>
  ));

  Ninjas.propTypes = {
    // map: PropTypes.func.isRequired,
    ninjas: PropTypes.array.isRequired,
    deleteNinja: PropTypes.func.isRequired,
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
