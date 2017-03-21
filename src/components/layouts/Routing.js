import React, { Component } from 'react';
import { Navigator } from 'react-native';
import HomeIndex from '../pages/HomeIndex';
import ShowPage from '../pages/ShowPage';

class Routing extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    if(route.name === 'home'){
      return <HomeIndex
        navigator={navigator}
      />
    } else if (route.name === 'show') {
      return <ShowPage
        navigator={navigator}
      />
    }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ name: 'home', index: 0 }}
        renderScene={this.renderScene}
      />
    );
  }
}

export default Routing;
