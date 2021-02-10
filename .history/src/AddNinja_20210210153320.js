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
    // e.target.value = '';
  };

  handleSubmit = (e) => {
    // eslint-disable-next-line react/prop-types
    const { addNinja } = this.props;
    e.preventDefault();
    addNinja(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="reset"
            defaultValue="Reset"
            id="name"
            onChange={this.handleChange}
          />
          <label htmlFor="name">Age:</label>
          <input
            type="reset"
            defaultValue="Reset"
            id="age"
            onChange={this.handleChange}
          />
          <label htmlFor="name">Belt:</label>
          <input
            type="reset"
            defaultValue="Reset"
            id="belt"
            onChange={this.handleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

// AddNinja.propTypes = {
//   addNinja: PropTypes.func.isRequired,
// };

export default AddNinja;
