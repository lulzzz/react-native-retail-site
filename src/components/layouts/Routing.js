import React, { Component } from 'react';
import { Navigator } from 'react-native';
import HomeIndex from '../pages/HomeIndex';
import ShowPage from '../pages/ShowPage';

class Routing extends Component {

  renderScene(route, navigator) {
    if (route.name === 'home') {
      return(
        <HomeIndex navigator={navigator} />
      )
    }
    if (route.name === 'show') {
      return(
        <ShowPage navigator={navigator} />
      )
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home', }}
        renderScene={this.renderScene.bind(this)}
      />
    );
  }
}

export default Routing;
