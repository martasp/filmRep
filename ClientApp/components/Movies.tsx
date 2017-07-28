import * as React from 'react';
interface MovieState {
    movies: any;
    loading : boolean;
}
interface Movie {
    movieId:number;
    name: string;
    releaseDate: string;
    genre: string;
    actors: [any];
}

export class Movies extends React.Component<{}, Partial<MovieState>> {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.renderMovies = this.renderMovies.bind(this);
        this.state = { movies: [], loading: true };
        this.getData();
    }

    public render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        } else 
        return <table className='table'>
            <thead>
                <tr>
                           <th>Movie name</th>
                           <th>Release date</th>
                           <th>Genre</th>
                           <th>Actors</th>  
                </tr>
            </thead>
                       {this.renderMovies()}
                   </table>

    }
    public getData() {
        fetch("api/movie")
            .then((resp) => resp.json()) // Transform the data into json
            .then(data => {
                console.log(data);
                this.setState({ movies: data,loading:false});
            })

    }
    public genreEnum(number) {
        const genres = ["drama", "komedija", "veiksmo"];
        return genres[number];
    }
    public renderMovies() {
        console.log(this.state);

            return this.state.movies.map((movie, index) => {
                return <thead key={movie.movieId}> <tr >
                           <td>{movie.name}</td>
                           <td>{movie.releaseDate}</td>
                           <td>{this.genreEnum(movie.genre)}</td>
                           <td>{this.renderActors(movie.actors)}</td>
                           <td><span onClick={() => this.remove(movie.movieId)} className="glyphicon glyphicon-remove"> </span></td>
                           <td>
                               <span  className='glyphicon glyphicon-edit'></span>
                          </td>

                </tr>
                    </thead>
            })
    }
    public renderActors(actors) {
        return actors.map((actor, index) => {
            return <div key={actor.actorId}>{actor.name} {actor.surname}</div>
        })
    }
    public reducer(id) {
        const _movies = this.state.movies.slice() as Array<any>;
        _movies.forEach((movie) => {
            if (movie.movieId == id) {
                _movies.splice(id, 1);
                return;
            }
        });
        this.setState({movies : _movies});
    }
    public remove(id) {
        console.log("removing");
        fetch('/api/Movie', {
                method: "delete",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(id)
            })
            .then((response) => {
                this.getData();
                this.render();
            });
    }

}
