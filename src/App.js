import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let priCol = "green"
let secCol = "#4d4d4d"
let fakeserverData = {
  user:{
    name: 'Krunal',
      playlists: [
        {
          name: 'Krazy Playlists',
          songs: [
              {name: 'Earthquake', duration: 2346},
              {name: 'Till it Hurts', duration: 3276},
              {name: 'Earthquake', duration: 2732} 
            ]
        },
        {
          name: 'Krazy House',
          songs: [
              {name: '+1', duration: 4346},
              {name: 'Sugar', duration:3095},
              {name: 'Are you with me', duration: 2998},
              {name: 'Animals', duration: 3115}

            ]
        },
        {
          name: 'Kratex Favs',
          songs: [
              {name: 'Ghosts and Stuff', duration: 5346},
              {name: 'Super Bass', duration:3476},
              {name: 'Just one Last Time', duration: 3911},
              {name: 'Follow me', duration: 4221},
              {name: 'Energie', duration: 3567},
              {name: 'Redbone', duration:3355},
              {name: 'Come & Get it', duration: 2706},
              {name: 'The Weekend', duration: 2099}
            ]
        }
       
      ]
  }
};


class Playlist extends Component{

  render() {
    return (
      <div className="soundcard">
        <img/>
        <h3>{this.props.playlist.name}</h3>
        <ul className="sc-list">
          {this.props.playlist.songs.map(
            song => <li>{song.name}</li>
            )}
        </ul>

      </div>
    );
  }
}


class PLaylistCounter extends Component{
  render() {
    return (
      <div style={{'width' : '40%', 'display' : 'inline-block'}}>
        <h3 style={{'color': 'green'}}>
        {this.props.playlists.length } Playlists
        </h3>
      </div>
    );
  }
}

class HourCounter extends Component{
  render() {
    let allsongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)

    },[])


    let totalDuration = allsongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration/60
    },0)


    return (
      <div style={{'width' : '40%', 'display' : 'inline-block'}}>
        <h3 style={{'color': 'green'}}>
        {Math.round(totalDuration/60)} Hours
        </h3>
      </div>
    );
  }
}

class Filter extends Component{
  render() {
    return (
      <div className="filter">
        <img/>
        <input type="text"/>
        <span style={{"color": secCol}}>Filter</span>

      </div>
    );
  }
}

class App extends Component {

  constructor(){
    super();
    this.state = {serverData: {}}
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({serverData: fakeserverData});
    }, 1000);
    
  }

  render() {
    
    return (
      <div className="App">
        {this.state.serverData.user ? 
        <div>
          <h1>{this.state.serverData.user.name}'s Playlist
          </h1>

          
          <PLaylistCounter playlists={this.state.serverData.user.playlists}/>
          <HourCounter playlists={this.state.serverData.user.playlists}/>
         
          <Filter/>
          {this.state.serverData.user.playlists.map(playlist => 
            <Playlist playlist={playlist}/>
            )}







        </div>
        : <h1>Let it Load bitch....</h1>}
      </div>
    );
  }
}

export default App;
