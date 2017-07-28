import * as React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router'
interface MovieState {
    redirect:string;
    movieId:number;
    name: string;
    releaseDate: string;
    genre: string;
    actors: Array<any>;
}
interface Actor {
    id: number;
    name: string;
    surname: string;
}

export class MovieAdd extends React.Component<{}, Partial<MovieState>> {
    constructor() {
        super();
        this.add = this.add.bind(this);
        this.renderActors = this.renderActors.bind(this);

        this.onNameChange = this.onNameChange.bind(this);
        this.onGenreChange = this.onGenreChange.bind(this);
        this.onReleaseDateChange = this.onReleaseDateChange.bind(this);
        this.submit = this.submit.bind(this);
        
        this.onActorNameChange = this.onActorNameChange.bind(this);
        this.onActorSurnameChange = this.onActorSurnameChange.bind(this);
        this.state = {
            redirect:"",
            movieId:0,
            genre: "",
            name: "",
            releaseDate: "",
            actors: [
                {
                    name: "",
                    surname: ""
                }]
        };
    }
    public render() {
        if (this.state.redirect=="") {
            return <div>
                       <label> Movie submit form </label>
                       <div>
                           <input placeholder="Name" type="text" value={this.state.name} onChange={this.onNameChange} />
                       </div>
                       <div>
                           <input placeholder="releaseDate" type="date" value={this.state.releaseDate} onChange={this.onReleaseDateChange} />
                       </div>
                       <div>
                           <input placeholder="genre" type="text" value={this.state.genre} onChange={this.onGenreChange} />
                       </div>
                       <div>{this.renderActors()}</div>

                       <button onClick={this.add} type="button">Add actor!</button>
                       <button href="/movies" onClick={this.submit} type="button">Submit</button>
                   </div>;
        }
        else return <Redirect to="/movies" />
    }

    submit() {
        console.log(this.state);
        const data = this.state;
        fetch('/api/Movie', {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
                    //make sure to serialize your JSON body
                    body: JSON.stringify(data)
                })
                .then((response) => {
                this.setState({redirect:"/movies"});
            });
    }
    add() {
        console.log(this.state);
        this.setState({
            actors: [...this.state.actors, { name: "", surname: "" }]
        });
        this.render();
    }
    renderActors() {
        return this.state.actors.map((actor, index) => {
            return <div key={index}>
                <input placeholder="ActorName" type="text" value={actor.name} onChange={(e) => this.onActorNameChange(index, e)} />
                <input placeholder="ActorSurname" type="text" value={actor.surname} onChange={(e) => this.onActorSurnameChange(index, e)} />
            </div>
        })
    }
    handleChange(e) {
        this.setState({
            genre: this.state.genre,
            releaseDate: this.state.releaseDate,
            actors: this.state.actors

        });
    }
    onNameChange(e) {
        this.setState({
            name: e.target.value
        });
    }
    onReleaseDateChange(e) {
        this.setState({
            releaseDate: e.target.value
        });
    }
    onGenreChange(e) {
        this.setState({
            genre: e.target.value
        });
    }
    onActorNameChange(index, e) {
        console.log(this.state.actors);
        var actors = this.state.actors.slice();
        actors[index].name = e.target.value;
        this.setState({
            actors: actors
        });
    }
    onActorSurnameChange(index, e) {
        console.log(this.state.actors);
        var actors = this.state.actors.slice();
        actors[index].surname = e.target.value;
        this.setState({
            actors: actors
        });
    }

}
//pavadinimas, iðleidimo data, þanras (