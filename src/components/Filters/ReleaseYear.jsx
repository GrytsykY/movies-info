import React, { Component } from 'react';

class ReleaseYear extends Component {
  getYear = () => {
    let i, options = [];
    for (i = 2020; i >= 2000; i--) {
      options.push(i)
    };
    return options;
  };

  render() {
    const { onChangeFilter, primary_release_year } = this.props;
    const options = this.getYear();
    return (
      <div className="form-group">
        <label htmlFor="primary_release_year">Год релиза:</label>
        <select
          className="form-control"
          id="primary_release_year"
          name="primary_release_year"
          value={primary_release_year}
          onChange={onChangeFilter}
        >
          <option>Выберите год</option>
          {options.map(item => (
            <option value={item} key={item}>{item}</option>
          ))}
        </select>
      </div>
    )
  }
}

export default ReleaseYear;
