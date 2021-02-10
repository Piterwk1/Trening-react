/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddNinja extends Component {
  // eslint-disable-next-line react/state-in-constructor
  state = {
    name: null,
    age: null,
    belt: null,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { addNinja } = this.props;
    e.preventDefault();
    addNinja();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" onChange={this.handleChange} />
          <label htmlFor="name">Age:</label>
          <input type="text" id="age" onChange={this.handleChange} />
          <label htmlFor="name">Belt:</label>
          <input type="text" id="belt" onChange={this.handleChange} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

AddNinja.propTypes = {
  addNinja: PropTypes.func.isRequired,
};

export default AddNinja;
