import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieCart from './MovieCart';


class MoviesContainer extends Component {
    render() {
        const { movies } = this.props;
        let content = '';

        content = movies.Response === "True" ? movies.Search.map((movie, index) => <MovieCart key={index} movie={movie} />) : <div>Have no movies</div>
        return (
            <div className="row">
                {content}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(MoviesContainer);