import React, { Component } from "react";
import MoviesList from "./MoviesList";
import { API_URL, API_KEY_3 } from "../../api/api";
import _ from "lodash";
import queryString from "query-string";

export default class MoviesContainer extends Component {
  constructor() {
    super();
    console.log("MovieContainer")
    this.state = {
      movies: []
    };
  }

  getMovies = (filters, page) => {
    const { sort_by, primary_release_year, with_genres } = filters;
    const queryStringParams = {
      api_key: API_KEY_3,
      language: "ru-RU",
      sort_by: sort_by,
      page: page,
      primary_release_year: primary_release_year,
      with_genres: with_genres
    };
    const link = `${API_URL}/discover/movie?${queryString.stringify(
      queryStringParams
    )}`;
    fetch(link)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          movies: data.results
        });
        console.log("API",data)
        this.props.onChangePagination(page, data.total_pages);
        x
      });
  };

  componentDidMount() {
    this.getMovies(this.props.filters, this.props.pagination.page);
  }

  componentDidUpdate(prevProps) {
    if (!_.isEqual(this.props.filters, prevProps.filters)) {
      this.getMovies(this.props.filters, 1);
    }
    if (!_.isEqual(this.props.pagination, prevProps.pagination)) {
      this.getMovies(this.props.filters, this.props.pagination.page);
    }
  }

  render() {
    const { movies } = this.state;console.log("API",data)
    return <MoviesList movies={movies} />;
  }
}