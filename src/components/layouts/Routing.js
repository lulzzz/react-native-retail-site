import React, { Component } from 'react';
import { Navigator } from 'react-native';
import HomeIndex from '../pages/HomeIndex';

class Routing extends Component {
  constructor(){
    super()
    this.renderScene = this.renderScene.bind(this)
  }

  renderScene(route, navigator){
    if(route.name === 'home'){
      return <HomeIndex
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
