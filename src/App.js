import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

import Camper from './Camper';
import HeaderRow from './HeaderRow';
import Title from './Title';

class App extends Component {
  
  state = {
    campers: [],
    recentText: "Points in past 30 days▼",
    alltimeText: "All time points"
  };

  setCampers = (recentOrAlltime) => {
    let newRecentText = recentOrAlltime === "recent" ? "Points in past 30 days▼" : "Points in past 30 days"
    let newAlltimeText = recentOrAlltime === "alltime" ? "All time points▼" : "All time points"
    let url = `https://fcctop100.herokuapp.com/api/fccusers/top/${recentOrAlltime}`
    axios.get(url)
    .then(res => {
      this.setState({
        campers: res.data,
        recentText: newRecentText,
        alltimeText: newAlltimeText
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
          <HeaderRow 
            setCampers={this.setCampers}
            recentText={this.state.recentText}
            alltimeText={this.state.alltimeText} />
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
