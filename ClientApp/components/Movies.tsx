import * as React from 'react';
interface MovieState {
    movies: any;
    filtered: any;
    filterIsOn: boolean;
    loading: boolean;
    redirect: string;
}
interface Movie {
    movieId: number;
    name: string;
    releaseDate: string;
    genre: string;
    actors: [any];
    edit: boolean;
}

export class Movies extends React.Component<{}, Partial<MovieState>> {
    constructor() {
        super();
        this.getData = this.getData.bind(this);
        this.renderMovies = this.renderMovies.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.OnEditClick = this.OnEditClick.bind(this);
        this.state = { movies: [], filtered: [], loading: true, filterIsOn: false, redirect: "" };
        this.getData();
    }

    public render() {
        if (this.state.loading) {
            return <div>Loading...</div>
        } else if (this.state.filterIsOn) {
            return <table className='table'>
                <thead>
                    <input placeholder="Search" type="text" onChange={(e) => this.onQuaryChange(e)} />
                    <tr>
                        <th>Movie name</th>
                        <th>Release date</th>
                        <th>Genre</th>
                        <th>Actors</th>
                    </tr>
                </thead>
                {this.renderFiltered()}
            </table>
        } else
            return <table className='table'>
                <thead>
                    <input placeholder="Search" type="text" onChange={(e) => this.onQuaryChange(e)} />
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
    public onQuaryChange(e) {
        const query = e.target.value;
        if (query.length <= 0) {
            this.setState({
                filterIsOn: false
            });
        } else {

            const _movies = this.state.movies.slice();
            var _filtered = [];
            _movies.forEach(movie => {
                const or = movie.name.includes(query) || movie.releaseDate.includes(query) || this.genreEnum(movie.genre).includes(query);
                if (or) {
                    _filtered.push(movie);
                }
            })

            this.setState({
                filtered: _filtered,
                filterIsOn: true
            });
        }
    }
    public getData() {
        fetch("api/movie")
            .then((resp) => resp.json()) // Transform the data into json
            .then(data => {
                console.log(data);
                this.setState({ movies: data, loading: false });
            })

    }

    public genreEnum(number) {
        const genres = ["drama", "komedija", "veiksmo"];
        return genres[number] as any;
    }

    public genreEnumtonuber(movie) {
        const genres = ["drama", "komedija", "veiksmo"];
        var number = 0;
        genres.forEach((i, index) => {
            if (i == movie.genre) {
                number = index;

            }
        });
        return number;
    }

    public renderMovies() {
        console.log(this.state);
        return this.state.movies.map((movie, index) => {
            if (movie.edit) {
                return this.movieViewEdit(movie, index);
            }
            return this.movieView(movie, index);
        })
    }
    public renderFiltered() {
        console.log(this.state);
        return this.state.filtered.map((movie, index) => {
            if (movie.edit) {
                return this.movieViewEdit(movie, index);
            }
            return this.movieView(movie, index);
        })
    }

    public movieView(movie, index) {
        return (<thead key={movie.movieId}> <tr >
            <td>{movie.name}</td>
            <td>{movie.releaseDate as Date}</td>
            <td>{this.genreEnum(movie.genre)}</td>
            <td>{this.renderActors(movie, index)}</td>
            <td>
                <span onClick={() => this.remove(movie.movieId)} className="glyphicon glyphicon-remove"> </span>
            </td>
            <td>
                <span onClick={() => this.OnEditClick(movie.movieId, index)} className='glyphicon glyphicon-edit'></span>
            </td>
        </tr>
        </thead>);
    }

    public OnEditClick(id, index) {
        var _movies = this.state.movies.slice();
        _movies[index].edit = true;
        this.setState({ movies: _movies });
    }

    public movieViewEdit(movie, index) {
        return (<thead key={movie.movieId}> <tr >
            <td> <input placeholder="Name" type="text" value={movie.name} onChange={(e) => this.onNameChange(e, index)} /></td>
            <td><input placeholder="releaseDate" type="date" value={movie.releaseDate} onChange={(e) => this.onReleaseDateChange(e, index)} /></td>
            <td>
                <select name="genres" value={movie.genre} onChange={(e) => this.onGenreChange(e, index)}>
                    <option value="drama">Drama</option>
                    <option value="veiksmo">veiksmo</option>
                    <option value="komedija">Komedija</option>
                </select>
            </td>
            <td>
                {this.renderActors(movie, index)}
            </td>
            <td>
                <span onClick={() => this.remove(movie.movieId)} className="glyphicon glyphicon-remove"> </span></td>
            <td>
                <span onClick={() => this.OnSaveClick(index)} className='glyphicon glyphicon-save'></span>
            </td>

        </tr>
        </thead>);
    }
    onGenreChange(e, index) {
        var _movies = this.state.movies.slice();
        _movies[index].edit = true;
        _movies[index].genre = e.target.value;
        this.setState({ movies: _movies });
    }

    OnSaveClick(index) {
        console.log(this.state);
        const data = this.state.movies[index];
        const num = this.genreEnumtonuber(data);
        data.genre = num;
        fetch('/api/Movie',
            {
                method: "put",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                //make sure to serialize your JSON body
                body: JSON.stringify(data)
            })
            .then((response) => {
                var _movies = this.state.movies.slice();
                _movies[index].edit = false;
                this.setState({ movies: _movies, redirect: "/movies" });
            });
    }

    onNameChange(e, index) {
        var _movies = this.state.movies.slice();
        _movies[index].edit = true;
        _movies[index].name = e.target.value;
        this.setState({ movies: _movies });
    }

    onReleaseDateChange(e, index) {
        var _movies = this.state.movies.slice();
        _movies[index].edit = true;
        _movies[index].releaseDate = e.target.value;
        this.setState({ movies: _movies });
    }

    public renderActors(movie, movieIndex) {
        if (movie.edit) {
            return movie.actors.map((actor, index) => {
                return <div key={actor.actorId}>
                    <input placeholder="ActorName" type="text" value={actor.name} onChange={(e) => this
                        .onActorNameChange(index, e, movieIndex)} />
                    <input placeholder="ActorSurname" type="text" value={actor.surname} onChange={(e) => this
                        .onActorSurnameChange(index, e, movieIndex)} />
                </div>
            })
        } else {
            return movie.actors.map((actor, index) => {
                return <div key={actor.actorId}>{actor.name} {actor.surname}</div>
            })
        }
    }

    public remove(id) {
        console.log("removing");
        fetch('/api/Movie',
            {
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

    onActorNameChange(index, e, movieIndex) {

        const _movie = this.state.movies[movieIndex];
        _movie.actors[index].name = e.target.value;

        const _movies = this.state.movies.slice(movieIndex, 1);
        _movies.add(_movie);

        this.setState({
            movies: _movies
        });
    }

    onActorSurnameChange(index, e, movieIndex) {

        const _movie = this.state.movies[movieIndex];
        _movie.actors[index].surname = e.target.value;

        const _movies = this.state.movies.slice(movieIndex, 1);
        _movies.add(_movie);

        this.setState({
            movies: _movies
        });
    }
}
