import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Camper from './Camper';
import Firstrow from './Firstrow';
import Title from './Title';

class App extends Component {
  
  state = {
    campers: []
  };

  /*
  static propTypes = {    
    campers: PropTypes.arrayOf(PropTypes.shape({
      username: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      recent: PropTypes.number.isRequired,
      alltime: PropTypes.number.isRequired,
      lastUpdate: PropTypes.string.isRequired
    }))
  };*/

  setCampers = (recentOrAlltime) => {
    let url = `https://fcctop100.herokuapp.com/api/fccusers/top/${recentOrAlltime}`
    axios.get(url)
    .then(res => {
      this.setState({
        campers: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }

  componentDidMount() {
    //console.log(topCampersRecentUrl);
    this.setCampers("recent");
    /*
    axios.get("https://fcctop100.herokuapp.com/api/fccusers/top/recent")
    .then(res => {
      this.setState({
        campers: res.data
      });
    })
    .catch((error) => {
      console.log(error);
    }); */
  };

  render() {
    return (
      <div className="everything">
        <div className="board">
          <Title />
          <Firstrow 
            setCampers={this.setCampers} />
          <div className="campers">
            {this.state.campers.map(function(camper, index) {
              return(
                <Camper 
                  username={camper.username}
                  image={camper.img}
                  recentPoints={camper.recent}
                  alltimePoints={camper.alltime}
                  index={index+1} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
