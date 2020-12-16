import React, { Component } from 'react';
import MovieList from './Movies/MoviesList';

class App extends Component {
  constructor(){
    super();

    this.initialState = {
      filters: {
        sort_by: "vote_average.desc",
        primary_release_year: "",
        with_genres: []
      },
      page: 1
    };
    this.state = {...this.initialState};
  };

  onChangeFilter = event =>{
    const name = event.target.name,
          value = event.target.value;
    this.setState(prevState =>({
      filters:{
        ...prevState.filters,
        [name]:value
      }
    }))
  };

  onChangePage = page =>{
    this.setState({
      page
    })
  };

  onReset = event =>{
    this.setState({...this.initialState});
  };

  render() {
    const {filters, page} = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-4">
            <div className="card" style={{ width: "100%" }}>
              <div className="card-body">
                <h3>Фильтры:</h3>
                
              </div>
            </div>
          </div>
          <div className="col-8">
            <MovieList 
              filters={filters}
              page={page}
              onChangePage={this.onChangePage}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
